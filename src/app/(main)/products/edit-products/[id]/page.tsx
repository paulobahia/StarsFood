"use client"

import { useCallback, useEffect, useState } from "react";

import { promise, z } from 'zod'
import InfoProducts from "./components/InfoProducts";
import { DataTable } from "./components/data-table";
import { columns } from "./components/columns";
import ImageProducts from "./components/ImageProducts";
import DragInDropImage, { Imagens } from "./components/drag-in-drop";
import { infoProductsFormSchema } from "@/schemas/products/productsFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { Notify } from "@/context/NotifyContext";
import { useRouter } from "next/navigation";
import { Categories } from "../../categories/components/columns";
import { createProduct, getAllCategorys, getProductById } from "@/services";
import PingLoading from "@/app/components/ui/pingLoading";
import { CreateProduct, Product } from "@/contracts/productsContracts";

export type Variants = {
    name: string
    range: string
    price: string
}

const defaultImagens: Imagens[] = [
    {
        imagePath: ''
    },
    {
        imagePath: ''
    },
    {
        imagePath: ''
    }
]

const defaultCategoryData: Categories = {
    id: "",
    categoryName: "",
    isAvailable: false
}

export default function AddProducts({ params }: { params: { id: string } }) {
    type InfoProdutctsFormData = z.infer<typeof infoProductsFormSchema>
    const [productName, setProductName] = useState<string | null>(null)
    const [productsImage, setProductsImage] = useState<Imagens[]>(() => [...defaultImagens]);
    const [description, setDescription] = useState<string>('')
    const [categoryDataForm, setCategoryDataForm] = useState<Categories>(defaultCategoryData)
    const [variations, setVariations] = useState<Variants[]>([]);
    const [loading, setLoading] = useState<boolean>(false)
    const [isLoadingData, setIsLoadingData] = useState<boolean>(false)
    const [category, setCategory] = useState<Categories[]>([])

    const _Notify = Notify();
    const router = useRouter()

    useEffect(() => {
        setIsLoadingData(true)
        getProductData()
    }, [])

    const getProductData = () => {
        let productId = parseInt(params.id)
        Promise.all([
            getProduct(productId),
            getCategories()
        ])
        setIsLoadingData(false)
    }

    const getProduct = (productId: number) => {
        getProductById(productId)
            .then((response) => {
                setEditProductData(response)
            })
            .catch((e) => {
                console.log(e)
                router.push(`/products`)
            })
    }

    const getCategories = () => {
        getAllCategorys()
            .then((response) => {
                setCategory(response)
            })
            .catch((error) => {
                console.log(error)
            })
    }


    const { register, handleSubmit, formState: { errors } } = useForm<InfoProdutctsFormData>({
        resolver: zodResolver(infoProductsFormSchema)
    })

    const setEditProductData = (product: Product) => {
        setProductName(product.name)
        setCategoryDataForm({
            id: product.category.id.toString(),
            categoryName: product.category.categoryName,
            isAvailable: product.category.isAvailable
        })
        setDescription(product.description)
    }

    const handleAdd = () => {
        const newItem = {
            name: productName!,
            range: "",
            price: "",
        };

        setVariations((old) => [...old, newItem]);
    };

    const handleEdit = (rowIndex: number, columnId: string, value: string) => {
        setVariations((old) =>
            old.map((row, index) => {
                if (index === rowIndex) {
                    return {
                        ...old[rowIndex],
                        [columnId]: value,
                    };
                }
                return row;
            })
        );
    };

    const handleRemove = (rowIndex: number) => {
        setVariations((old) => old.filter((_, index) => index !== rowIndex));
    };

    const handleRemoveImage = (index: number) => {
        if (index >= 0 && index < productsImage.length) {
            const updatedItems = [...productsImage];
            updatedItems[index] = { imagePath: '' };
            setProductsImage(updatedItems);
        }
    };

    function handleValidateProduct(): boolean {

        const validProductImage = productsImage.every((item) => {
            return typeof item === 'object' && 'imagePath' in item && item.imagePath === '';
        });

        const isItemValid = (item: Variants) => {
            return item.range.trim() !== '' && item.price.trim() !== '';
        };

        const allItemsAreValid = variations.every(isItemValid);

        if (validProductImage) {
            _Notify.showNotify('Erro ao Criar Produto', 'É necessário adicionar as 3 imgens do produto.', 'Error')
            return false
        }

        if (variations.length <= 0) {
            _Notify.showNotify('Erro ao Criar Produto', 'É necessário adicionar ao menos uma variação.', 'Error')
            return false
        }

        if (!allItemsAreValid) {
            _Notify.showNotify('Erro ao Criar Produto', 'Alguns itens não têm o quantidade e preço preenchidos corretamente.', 'Error')
            return false;
        }

        return true
    }

    const postProduct: SubmitHandler<InfoProdutctsFormData> = ({ name, description }) => {
        if (handleValidateProduct()) {
            setLoading(true)

            let categoryID = parseInt(categoryDataForm.id)

            let variationData = variations.map((e) => {
                let valueFormated = parseFloat(e.price.replace("R$", ''))
                return {
                    description: e.range,
                    value: valueFormated
                }
            })

            var postData: CreateProduct = {
                createProductCommand: {
                    name,
                    description,
                    categoryId: categoryID,
                    imgUrl: '',
                },
                createVariationCommandList: variationData
            }

            createProduct(postData)
                .then(() => {
                    _Notify.showNotify('Produto Criado com Sucesso', 'Seu produto foi criado com sucesso e está pronto para ser exibido.', 'Success')
                    router.push('/products')
                })
                .catch((error) => {
                    setLoading(false)
                    console.log(error)
                })
        }
    }

    return (
        <form onSubmit={handleSubmit(postProduct)} className="text-white">
            <div className="flex-col flex justify-center items-center gap-y-4">
                <div className="flex flex-1 w-full text-3xl font-semibold">
                    Editar Produto
                </div>
            </div>
            {
                isLoadingData
                    ?
                    <div>
                        Loading
                    </div>
                    :
                    <div className="min-h-screen grid grid-cols-1 gap-x-3 gap-y-3 lg:grid-cols-2 justify-between mt-5">
                        <div className="flex flex-col gap-y-3">
                            <ImageProducts productsImage={productsImage} onRemove={handleRemoveImage} />
                            <InfoProducts setProductName={setProductName} productName={productName} register={register} errors={errors} variations={variations} setCategoryDataForm={setCategoryDataForm} categoryDataForm={categoryDataForm} description={description} setDescription={setDescription} category={category}/>
                        </div>
                        <div className="flex flex-col gap-y-3 justify-end">
                            <DragInDropImage productsImage={productsImage} setProductsImage={setProductsImage} />
                            <div className="bg-backgrounds-secondary p-5 rounded-xl gap-y-3 flex flex-col h-[60%]">
                                <div className="flex items-center justify-between">
                                    <div className="text-xl font-semibold">
                                        Gerenciar Variações
                                    </div>
                                    <div>
                                        <button disabled={productName == null || productName == ''} type='button' onClick={handleAdd} className="bg-white transition-colors flex items-center justify-center ease-in-out w-full py-1.5 px-2 border text-black font-medium text-xs rounded-md hover:bg-transparent hover:border hover:border-gray-300 hover:text-white disabled:bg-neutral-500 disabled:border-0 disabled:hover:text-black disabled:cursor-default">
                                            Adicionar Variantes
                                        </button>
                                    </div>
                                </div>
                                <div className="w-full h-full overflow-auto">
                                    <DataTable columns={columns} data={variations} onEdit={handleEdit} onRemove={handleRemove} />
                                </div>
                            </div>
                            <div className="flex gap-y-6  justify-end">
                                <button type='submit' className="bg-white sm:max-w-[200px] mt-1 sm:mt-0 transition-colors items-center flex justify-center gap-x-2 ease-in-out w-full p-2 border text-black font-medium text-sm rounded-md hover:bg-transparent hover:border hover:border-gray-300 hover:text-white disabled:bg-neutral-500 disabled:border-0 disabled:hover:text-black">
                                    {loading
                                        ?
                                        <PingLoading />
                                        :
                                        <span>
                                            Editar Produto
                                        </span>
                                    }
                                </button>
                            </div>
                        </div>
                    </div>
            }
        </form>
    )
}