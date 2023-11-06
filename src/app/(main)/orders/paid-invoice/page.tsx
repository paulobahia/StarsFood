import { Badge } from "@/app/components/ui/badge";
import { Button } from "@/app/components/ui/button";
import { DocumentDownload, Edit, Share } from "iconsax-react";
import { DataTable } from "./components/data-table";
import { ProductsInvoice, columns } from "./components/columns";

import { Sheet, SheetTrigger } from "@/app/components/ui/sheet"

import SheetInvoice from "./components/SheetInvoice";
import { amountOrder } from "@/utils/methods";

const Fakedata: ProductsInvoice[] = [
    {
        id: "#001",
        productName: 'Porção de Batata Frita',
        quantity: 1,
        price: "R$ 8,00",
        category: 'Acompanhamentos'
    },
    {
        id: "#002",
        productName: 'Hambúrguer Vegano',
        quantity: 2,
        price: "R$ 20,50",
        category: 'Hambúrgueres'
    },
    {
        id: "#020",
        productName: 'Coca Cola 2L',
        quantity: 1,
        price: "R$ 10,00",
        category: 'Bebidas'
    },
    {
        id: "#015",
        productName: 'Salada Caesar com Frango',
        quantity: 1,
        price: "R$ 12,00",
        category: 'Saladas'
    },
    {
        id: "#050",
        productName: 'Suco Natural de Laranja',
        quantity: 2,
        price: "R$ 6,50",
        category: 'Bebidas'
    },
    {
        id: "#033",
        productName: 'Torta de Maçã',
        quantity: 2,
        price: "R$ 8,00",
        category: 'Sobremesa'
    },
]

export default function PaidInvoice() {
    return (
        <Sheet>
            <main className="min-h-[80vh] flex items-center py-5 justify-center">
                <div className="flex p-5 relative flex-col gap-y-3 justify-center items-center w-full max-w-3xl rounded-xl bg-backgrounds-secondary text-white">
                    <div className="flex shadow-lg items-center h-full justify-center rounded-xl w-full p-16 bg-toast-background">
                        <div className="flex flex-1 gap-y-2 flex-col w-full">
                            <div className="flex justify-between items-center">
                                <Badge variant='default' className="rounded-lg bg-primary/20 hover:bg-primary/20 text-white">
                                    Pagemento em Aberto
                                </Badge>
                                <div className="flex gap-x-3">
                                    <Button variant="ghost" className="h-8 w-8 p-0 hover:bg-transparent group">
                                        <Edit
                                            size="25"
                                            color="#d9e3f0"
                                            variant="Bulk"
                                        />
                                        <span className={`fixed mt-14 mr-16 rounded-l-lg rounded-br-lg font-medium shadow-xl scale-0 bg-[#1e1e21] p-2 text-xs text-white group-hover:scale-100`}>Editar</span>
                                    </Button>
                                    <Button variant="ghost" className="h-8 w-8 p-0 hover:bg-transparent group">
                                        <DocumentDownload
                                            size="25"
                                            color="#d9e3f0"
                                            variant="Bulk"
                                        />
                                        <span className={`fixed mt-14 mr-16 rounded-l-lg rounded-br-lg font-medium shadow-xl scale-0 bg-[#1e1e21] p-2 text-xs text-white group-hover:scale-100`}>Baixar</span>
                                    </Button>
                                    <Button variant="ghost" className="h-8 w-8 p-0 hover:bg-transparent group">
                                        <Share
                                            size="25"
                                            color="#d9e3f0"
                                            variant="Bulk"
                                        />
                                        <span className={`fixed mt-14 mr-24 rounded-l-lg rounded-br-lg font-medium shadow-xl scale-0 bg-[#1e1e21] p-2 text-xs text-white group-hover:scale-100`}>Compartilhar</span>
                                    </Button>
                                </div>
                            </div>
                            <div className="flex flex-1 w-full text-3xl font-semibold">
                                Pedido #03941
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col px-16 w-full">
                        <div className="bg-[#1e1e21] shadow-lg flex flex-col -top-16 w-full relative rounded-lg p-7">
                            <div className="flex flex-1 flex-col w-full">
                                <div className="flex justify-between items-center">
                                    <div className="flex gap-y-0.5 flex-col justify-end">
                                        <div className="text-base font-normal text-primary-secundary">
                                            Faturado para:
                                        </div>
                                        <div className="text-xl font-bold">
                                            Ricardo Monteiro
                                        </div>
                                    </div>
                                    <div className="flex gap-y-2 flex-col justify-start">
                                        <div className="text-base font-normal text-primary-secundary">
                                            Total do Pedido
                                        </div>
                                        <div className="text-4xl font-bold">
                                            {amountOrder(Fakedata)}
                                        </div>
                                        <div>
                                            <Badge variant='default' className="rounded-lg bg-primary/20 hover:bg-primary/20 text-white">
                                                Pedido realizado em Nov 02, 2023
                                            </Badge>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full relative">
                            <DataTable columns={columns} data={Fakedata} />
                        </div>
                        <div className="w-full my-10 flex justify-between items-end">
                            <div className="flex flex-col gap-y-2 w-[70%]">
                                <div className="font-semibold text-base">
                                    Observação
                                </div>
                                <div className="text-sm text-primary-secundary font-normal max-w-[250px] text-justify">
                                    O cliente pediu para caprichar no molho do Hambúrguer e enviar sache extra de molho verde.
                                </div>
                            </div>
                            <div className="flex flex-1 w-full justify-end">
                                <SheetTrigger>
                                    <Button variant={"default"} size={"default"} className="flex">
                                        Finalizar Pedido
                                    </Button>
                                </SheetTrigger>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <SheetInvoice data={Fakedata} />
        </Sheet>
    )
}