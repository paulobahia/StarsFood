import { DataTable } from "./components/data-table";
import InfoProducts from "./components/InfoProducts";
import { Variants, columns } from "./components/columns";
import Image from "next/image";
import Upload from '../../../assets/Upload.png'
import { UploadCloud } from "lucide-react";

export default function AddProducts() {

    const Fakedata: Variants[] = [

    ]

    return (
        <main className="text-white">
            <div className="flex-col flex justify-center items-center gap-y-4">
                <div className="flex flex-1 w-full text-3xl font-semibold">
                    Adicionar Produto
                </div>
            </div>
            <div className="min-h-screen grid grid-cols-1 gap-x-3 gap-y-3 md:grid-cols-2 justify-between mt-5">
                <div className="flex flex-col gap-y-3">
                    <div className="bg-backgrounds-secondary p-5 rounded-xl flex h-full items-center justify-center">
                    </div>
                    <InfoProducts />
                </div>
                <div className="flex flex-col gap-y-3">
                    <div className="bg-backgrounds-secondary p-5 flex flex-col rounded-xl h-[40%]">
                        <div className="text-xl font-semibold">
                            Imagens do Produto
                        </div>
                        <div className="flex flex-1 mt-3 border-dashed border border-primary-light rounded-sm h-full items-center justify-center">
                            <div className="flex gap-0 flex-col">
                                <div className="flex justify-center mb-2">
                                    <UploadCloud className="w-16 h-16" />
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
                    <div className="bg-backgrounds-secondary p-5 rounded-xl gap-y-3 flex flex-col h-[50%]">
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
                            <DataTable columns={columns} data={Fakedata} />
                        </div>
                    </div>
                    <div className="flex gap-y-6 justify-end">
                        <button type='submit' className="bg-white max-w-[200px] transition-colors items-center flex justify-center gap-x-2 ease-in-out w-full p-2 border text-black font-medium text-sm rounded-md hover:bg-transparent hover:border hover:border-gray-300 hover:text-white disabled:bg-neutral-500 disabled:border-0 disabled:hover:text-black">
                            Criar Produto
                        </button>
                    </div>
                </div>
            </div>
        </main>
    )
}