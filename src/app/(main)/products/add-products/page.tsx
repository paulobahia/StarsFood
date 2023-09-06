"use client"

import { useCallback, useEffect, useState } from "react";

import { z } from 'zod'
import InfoProducts from "./components/InfoProducts";
import { DataTable } from "./components/data-table";
import { columns } from "./components/columns";
import ImageProducts from "./components/ImageProducts";
import DragInDropImage, { Imagens } from "./components/drag-in-drop";
import { infoProductsFormSchema } from "@/schemas/products/productsFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { Notify } from "@/context/NotifyContext";

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

export default function AddProducts() {
    type InfoProdutctsFormData = z.infer<typeof infoProductsFormSchema>
    const [productName, setProductName] = useState<string | null>(null)
    const [productsImage, setProductsImage] = useState<Imagens[]>(() => [...defaultImagens]);
    const [variations, setVariations] = useState<Variants[]>([]);
    const [originalData, setOriginalData] = useState([...variations])
    const _Notify = Notify();

    const { register, handleSubmit, formState: { errors } } = useForm<InfoProdutctsFormData>({
        resolver: zodResolver(infoProductsFormSchema)
    })

    useEffect(() => {
        setOriginalData(variations)
    }, [variations])

    const handleAdd = () => {
        const newItem: Variants = {
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

    const handleRevert = (rowIndex: number, revert: boolean) => {
        if (revert) {
            setVariations((old) =>
                old.map((row, index) =>
                    index === rowIndex ? originalData[rowIndex] : row
                )
            );
        } else {
            setOriginalData((old) =>
                old.map((row, index) => (index === rowIndex ? variations[rowIndex] : row))
            );
        }
    }

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

        if (validProductImage) {
            _Notify.showNotify('Erro ao Criar Produto', 'É necessário adicionar as 3 imgens do produto.', 'Error')
            return false
        }

        if (variations.length <= 0) {
            _Notify.showNotify('Erro ao Criar Produto', 'É necessário adicionar ao menos uma variação.', 'Error')
            return false
        }

        return true
    }

    const createProduct: SubmitHandler<InfoProdutctsFormData> = ({ name, category, description, type }) => {
        if (handleValidateProduct()) {
            // console.log(variations)
        }
    }

    return (
        <form onSubmit={handleSubmit(createProduct)} className="text-white">
            <div className="flex-col flex justify-center items-center gap-y-4">
                <div className="flex flex-1 w-full text-3xl font-semibold">
                    Adicionar Produto
                </div>
            </div>
            <div className="min-h-screen grid grid-cols-1 gap-x-3 gap-y-3 lg:grid-cols-2 justify-between mt-5">
                <div className="flex flex-col gap-y-3">
                    <ImageProducts productsImage={productsImage} onRemove={handleRemoveImage} />
                    <InfoProducts setProductName={setProductName} productName={productName} register={register} errors={errors} variations={variations} />
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
                            <DataTable columns={columns} data={variations} onEdit={handleEdit} onRevert={handleRevert} onRemove={handleRemove} />
                        </div>
                    </div>
                    <div className="flex gap-y-6  justify-end">
                        <button type='submit' className="bg-white sm:max-w-[200px] mt-1 sm:mt-0 transition-colors items-center flex justify-center gap-x-2 ease-in-out w-full p-2 border text-black font-medium text-sm rounded-md hover:bg-transparent hover:border hover:border-gray-300 hover:text-white disabled:bg-neutral-500 disabled:border-0 disabled:hover:text-black">
                            Criar Produto
                        </button>
                    </div>
                </div>
            </div>
        </form>
    )
}