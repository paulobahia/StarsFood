import AvatarUser from "@/app/assets/waiter2.png"
import { Button } from "@/app/components/ui/button";

import {
    SheetClose,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
    SheetFooter
} from "@/app/components/ui/sheet"

import { BoxSearch, Diagram, MenuBoard, ReceiptItem, Setting2 } from "iconsax-react";
import Link from "next/link";
import { usePathname } from "next/navigation";


export default function Sheet() {
    const pathname = usePathname()

    return (
        <SheetContent className="p-0 divide-y max-w-xs">
            <SheetHeader className="p-6">
                <SheetTitle className="flex items-center gap-x-2">
                    <div>
                        <img className='w-10 h-10' src={AvatarUser.src} alt="Imagem do Garçom" />
                    </div>
                    <div className="flex flex-col items-start">
                        <p className='text-white font-medium text-sm'>
                            Paulo Henrique
                        </p>
                        <p className="text-primary-light font-medium text-xs">
                            Garçom
                        </p>
                    </div>
                </SheetTitle>
            </SheetHeader>
            <SheetFooter className="flex flex-col p-6 text-sm font-medium">
                <SheetClose asChild>
                    <Link className="cursor-pointer" href={"/overview"}>
                        <Button type="submit" className="bg-transparent p-0 m-0 flex gap-x-2 items-center justify-start">
                            <Diagram size="20" color="#fff" variant="Outline" />
                            <p className={pathname.split('/')[1] == 'overview' ? 'text-white' : 'text-primary-light'}>
                                Overview
                            </p>
                        </Button>
                    </Link>
                </SheetClose>
                <SheetClose type="submit" asChild>
                    <Link className="cursor-pointer" href={"/orders"}>
                        <Button className="bg-transparent p-0 m-0 flex gap-x-2 justify-start">
                            <MenuBoard size="20" color="#fff" variant="Outline" />
                            <p className={pathname.split('/')[1] == 'orders' ? 'text-white' : 'text-primary-light'}>
                                Pedidos
                            </p>
                        </Button>
                    </Link>
                </SheetClose>
                <SheetClose type="submit" asChild>
                    <Link className="cursor-pointer" href={"/products"}>
                        <Button className="bg-transparent p-0 m-0 flex gap-x-2 justify-start">
                            <BoxSearch size="20" color="#fff" variant="Outline" />
                            <p className={pathname.split('/')[1] == 'products' ? 'text-white' : 'text-primary-light'}>
                                Produtos
                            </p>
                        </Button>
                    </Link>
                </SheetClose>
                <SheetClose asChild>
                    <Link className="cursor-pointer" href={"/commands"}>
                        <Button type="submit" className="bg-transparent p-0 m-0 flex gap-x-2 justify-start">
                            <ReceiptItem size="20" color="#fff" variant="Outline" />
                            <p className={pathname.split('/')[1] == 'commands' ? 'text-white' : 'text-primary-light'}>
                                Comandas
                            </p>
                        </Button>
                    </Link>
                </SheetClose>
                <SheetClose asChild>
                    <Link className="cursor-pointer" href={"/settings"}>
                        <Button type="submit" className="bg-transparent p-0 m-0 flex gap-x-2 justify-start">
                            <Setting2 size="20" color="#fff" variant="Outline" />
                            <p className={pathname.split('/')[1] == 'settings' ? 'text-white' : 'text-primary-light'}>
                                Configurações
                            </p>
                        </Button>
                    </Link>
                </SheetClose>
            </SheetFooter>
        </SheetContent>
    )
}
