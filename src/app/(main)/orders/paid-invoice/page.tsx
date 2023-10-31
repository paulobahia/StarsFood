import { Badge } from "@/app/components/ui/badge";
import { Button } from "@/app/components/ui/button";
import { ArrowCircleLeft, DocumentDownload, Edit, Profile2User, Share, Printer, Card, Moneys } from "iconsax-react";
import { DataTable } from "./components/data-table";
import { ProductsInvoice, columns } from "./components/columns";
import { amountProduct } from "@/utils/methods";

import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/app/components/ui/sheet"

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
        id: "#003",
        productName: 'Coca Cola 2L',
        quantity: 1,
        price: "R$ 10,00",
        category: 'Bebidas'
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
                                    <Button variant="ghost" className="h-8 w-8 p-0 hover:bg-transparent">
                                        <Edit
                                            size="25"
                                            color="#d9e3f0"
                                            variant="Bulk"
                                        />
                                    </Button>
                                    <Button variant="ghost" className="h-8 w-8 p-0 hover:bg-transparent">
                                        <DocumentDownload
                                            size="25"
                                            color="#d9e3f0"
                                            variant="Bulk"
                                        />
                                    </Button>
                                    <Button variant="ghost" className="h-8 w-8 p-0 hover:bg-transparent">
                                        <Share
                                            size="25"
                                            color="#d9e3f0"
                                            variant="Bulk"
                                        />
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
                                            R$ 59,00
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
                        <div className="w-full my-10 flex justify-between items-start">
                            <div className="flex flex-col gap-y-2 w-[70%]">
                                <div className="font-semibold text-base">
                                    Observação
                                </div>
                                <div className="text-sm text-primary-secundary font-normal max-w-[250px] text-justify">
                                    O cliente pediu para caprichar no molho do Hambúrguer e enviar sache extra de molho verde.
                                </div>
                            </div>
                            <div className="flex divide-y divide-white flex-col w-[30%]">
                                <div className="flex flex-col mb-4 gap-y-2">
                                    <div className="flex justify-between">
                                        <div className="font-light text-base">
                                            Total
                                        </div>
                                        <div className="font-semibold text-base">
                                            R$ 59,00
                                        </div>
                                    </div>
                                    <div className="flex justify-between">
                                        <div className="font-light text-base">
                                            Desconto
                                        </div>
                                        <div className="font-semibold text-base">
                                            R$ 00,00
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="mt-4 flex justify-between">
                                        <div className="font-light text-base">
                                            Total
                                        </div>
                                        <div className="font-semibold text-base">
                                            R$ 59,00
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <SheetTrigger asChild className="absolute right-3 top-1/2 cursor-pointer">
                <ArrowCircleLeft size="40" color="#d9e3f0" variant="Bold" />
            </SheetTrigger>
            <SheetContent side={"right"} className="w-[450px] sm:max-w-none py-10 px-5">
                <div className="pb-4 text-3xl font-normal">
                    Finalizar Pedido
                </div>
                <div className="flex flex-1 flex-col gap-y-5 h-[50%] w-full bg-[#1e1e21] rounded-t-xl p-5">
                    {Fakedata.map((item) => {
                        return (
                            <div key={item.id} className="flex items-center justify-between">
                                <div className="flex gap-x-3 items-center">
                                    <div className="bg-primary w-8 h-8 flex justify-center items-center rounded-full">
                                        <div className="text-black text-lg font-semibold">
                                            {item.quantity}
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-start justify-center">
                                        <div className="text-primary text-sm font-medium">
                                            {item.productName}
                                        </div>
                                        <div className="text-primary-secundary text-xs font-light">
                                            {item.category}
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col items-end justify-center">
                                    <div className="text-primary text-base font-semibold">{amountProduct(item.price, item.quantity.toString())}</div>
                                    <div className="text-primary-secundary text-xs font-light">{item.price}/Un</div>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className="bg-[#1e1e21] px-3">
                    <div className="border-t-2 border-primary/30 border-dashed" />
                </div>
                <div className="flex flex-col justify-end flex-1 h-[20%] w-full bg-[#1e1e21] p-5">
                    <div className="gap-y-2 flex flex-col">
                        <div className="w-full flex justify-between">
                            <div>
                                Taxas
                            </div>
                            <div className="text-sm font-light text-primary-secundary">
                                R$ 00,00
                            </div>
                        </div>
                        <div className="w-full flex justify-between">
                            <div>
                                Desconto
                            </div>
                            <div className="text-sm font-light text-primary-secundary">
                                R$ 00,00
                            </div>
                        </div>
                        <div className="w-full flex justify-between items-center">
                            <div>
                                Subtotal
                            </div>
                            <div className="text-sm font-light text-primary-secundary">
                                R$ 59,00
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex flex-1 justify-between items-end">
                        <div className="text-xl font-bold">
                            TOTAL
                        </div>
                        <div className="text-xl font-normal">
                            R$ 59,00
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-3 flex-1 h-[25%] w-full bg-primary rounded-b-xl">
                    <div className="text-black flex flex-col gap-y-1 justify-center group items-center cursor-pointer">
                        {/* <Profile2User size="45" color="#555555" variant="Bulk" /> */}
                    </div>
                    <div className="text-black flex flex-col gap-y-1 justify-center group items-center cursor-pointer">
                        {/* <Profile2User size="45" color="#555555" variant="Bulk" /> */}
                    </div>
                    <div className="text-black flex flex-col gap-y-1 justify-center group items-center cursor-pointer">
                        <Profile2User size="45" color="#555555" variant="Bulk" />
                        <span className={`fixed right-28 mb-0.5 rounded-lg font-medium shadow-xl scale-0 bg-[#1e1e21] p-2 text-xs text-white group-hover:scale-100`}>Dividir</span>
                    </div>
                    <div className="text-black flex flex-col gap-y-1 justify-center group items-center cursor-pointer">
                        <Moneys size="45" color="#555555" variant="Bulk" />
                        <span className={`fixed right-96 rounded-lg font-medium shadow-xl scale-0 bg-[#1e1e21] p-2 text-xs text-white group-hover:scale-100`}>Dinheiro</span>
                    </div>
                    <div className="text-black flex flex-col gap-y-1 group justify-center items-center cursor-pointer">
                        <Card size="45" color="#555555" variant="Bulk" />
                        <span className={`fixed right-60 mr-2 mb-0.5 rounded-lg font-medium shadow-xl scale-0 bg-[#1e1e21] p-2 text-xs text-white group-hover:scale-100`}>Cartão</span>
                    </div>
                    <div className="text-black flex flex-col gap-y-1 justify-center group items-center cursor-pointer">
                        <Printer size="45" color="#555555" variant="Bulk" />
                        <span className={`fixed right-28 mb-0.5 rounded-lg font-medium shadow-xl scale-0 bg-[#1e1e21] p-2 text-xs text-white group-hover:scale-100`}>Imprimir</span>
                    </div>
                </div>
            </SheetContent>
        </Sheet>
    )
}