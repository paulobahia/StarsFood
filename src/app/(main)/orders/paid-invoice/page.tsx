import { Badge } from "@/app/components/ui/badge";
import { Button } from "@/app/components/ui/button";
import { DocumentDownload, Edit, Share } from "iconsax-react";

export default function PaidInvoice() {
    return (
        <main className="min-h-[80vh] flex items-center p-10 justify-center">
            <div className="flex p-5 relative flex-col gap-y-3 justify-center items-center w-full max-w-4xl rounded-xl bg-backgrounds-secondary text-white">
                <div className="flex shadow-lg items-center h-full justify-center rounded-xl w-full p-16 pb-20 bg-toast-background">
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
                    <div className="bg-[#1e1e21] gap-x-3 shadow-lg flex flex-col -top-16 w-full relative rounded-lg p-7">
                        <div className="flex flex-1 flex-col w-full">
                            <div className="flex justify-between items-start">
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
                                        R$ 395,00
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
                </div>
            </div>
        </main>
    )
}