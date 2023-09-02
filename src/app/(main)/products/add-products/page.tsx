"use client"

import { useState } from "react";
import { ImageOff, UploadCloud } from "lucide-react";


import InfoProducts from "./components/InfoProducts";
import { Variants, columns } from "./components/columns";
import { DataTable } from "./components/data-table";

export interface ProductVariation {
    id: string
    name: string
    range: string
    price: string
}

export default function AddProducts() {
    const [showImage, setShowImage] = useState(0)
    const [variations, setVariations] = useState<ProductVariation[]>([
        {
            id: '0',
            name: 'Porção de Batata Frita',
            price: 'R$ 8,00',
            range: '300g',
        },
        {
            id: '1',
            name: 'Porção de Batata Frita',
            price: 'R$ 12,00',
            range: '500g',
        },
        {
            id: '2',
            name: 'Porção de Batata Frita',
            price: 'R$ 15,00',
            range: '800g',
        }
    ]);

    const handleEdit = (index: number, updatedData: ProductVariation) => {
        const updatedVariations = [...variations];
        updatedVariations[index] = updatedData;
        setVariations(updatedVariations);
    };

    const listImage = [
        {
            id: 0,
            imagePath: ''
        },
        {
            id: 1,
            imagePath: ''
        },
        {
            id: 2,
            imagePath: ''
        }
    ]


    return (
        <main className="text-white">
            <div className="flex-col flex justify-center items-center gap-y-4">
                <div className="flex flex-1 w-full text-3xl font-semibold">
                    Adicionar Produto
                </div>
            </div>
            <div className="min-h-screen grid grid-cols-1 gap-x-3 gap-y-3 lg:grid-cols-2 justify-between mt-5">
                <div className="flex flex-col gap-y-3">
                    <div className="bg-backgrounds-secondary p-5 gap-x-2 rounded-xl flex h-full items-center justify-start">
                        <div className="h-full w-[70%] bg-backgrounds-primary flex flex-col justify-center items-center rounded-lg">
                            <ImageOff className="w-20 h-20 sm:w-40 sm:h-40 text-white" />
                        </div>
                        <div className="flex flex-col gap-y-2 w-[30%] h-full">
                            {listImage.map(({ id, imagePath }, index: number) => {
                                return (
                                    <div key={index} onClick={() => setShowImage(index)} className={`w-full py-3 h-1/3 bg-backgrounds-primary flex flex-col justify-center items-center rounded-lg ${showImage != index && 'opacity-70 cursor-pointer'}`}>
                                        <ImageOff className="w-10 h-10 sm:w-20 sm:h-20 text-white" />
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <InfoProducts />
                </div>
                <div className="flex flex-col gap-y-3 justify-end">
                    <div className="bg-backgrounds-secondary p-5 flex flex-col rounded-xl h-2/5">
                        <div className="text-xl font-semibold">
                            Imagens do Produto
                        </div>
                        <div className="flex flex-1 mt-3 border-dashed border border-primary-light rounded-sm h-full items-center justify-center">
                            <div className="flex py-5 flex-col">
                                <div className="flex justify-center mb-2">
                                    <UploadCloud className="w-10 h-10 sm:w-16 sm:h-16" />
                                </div>
                                <div className="flex">
                                    <div className="text-sm font-medium flex">Escolha um arquivo</div>
                                    &nbsp;
                                    <div className="text-sm font-normal text-primary-light"> ou arraste ele aqui</div>
                                </div>
                                <div className="flex justify-center">
                                    <div className="text-xs font-normal text-primary-light">Arquivos PNG, JPG e GIF são permitidos.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-backgrounds-secondary p-5 rounded-xl gap-y-3 flex flex-col h-[60%]">
                        <div className="flex items-center justify-between">
                            <div className="text-xl font-semibold">
                                Gerenciar Variações
                            </div>
                            <div>
                                <button type='submit' className="bg-white transition-colors items-center flex justify-center ease-in-out w-full py-1.5 px-2 border text-black font-medium text-xs rounded-md hover:bg-transparent hover:border hover:border-gray-300 hover:text-white disabled:bg-neutral-500 disabled:border-0 disabled:hover:text-black">
                                    Adicionar Variantes
                                </button>
                            </div>
                        </div>
                        <div className="w-full h-full">
                            <DataTable columns={columns} data={variations} onEdit={handleEdit} />
                        </div>
                    </div>
                    <div className="flex gap-y-6  justify-end">
                        <button type='submit' className="bg-white sm:max-w-[200px] mt-1 sm:mt-0 transition-colors items-center flex justify-center gap-x-2 ease-in-out w-full p-2 border text-black font-medium text-sm rounded-md hover:bg-transparent hover:border hover:border-gray-300 hover:text-white disabled:bg-neutral-500 disabled:border-0 disabled:hover:text-black">
                            Criar Produto
                        </button>
                    </div>
                </div>
            </div>
        </main>
    )
}