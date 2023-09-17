import {
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/app/components/ui/navigation-menu"
import Link from "next/link"
import { usePathname } from "next/navigation"

const NavigationMenuOrder = () => {
    const pathname = usePathname()
    const pathSplited = pathname.split('/')[1]

    return (
        <NavigationMenuList>
            <NavigationMenuItem>
                <p className={pathSplited == 'orders' ? 'text-white' : 'text-primary-light'}>
                    <NavigationMenuTrigger className="cursor-pointer p-0 h-0">Pedidos</NavigationMenuTrigger>
                </p>
                <NavigationMenuContent>
                    <div className="grid gap-3 p-4 w-[500px] grid-cols-2">
                        <Link className="col-span-1 cursor-pointer block select-none space-y-1 rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground" href={"/orders"}>
                            <div >
                                <div className="text-sm font-medium leading-none">
                                    Gerenciar Pedidos
                                </div>
                                <p className="line-clamp-2 text-sm font-normal leading-snug text-muted-foreground">
                                    Visualize os pedidos em tempo real.
                                </p>
                            </div>
                        </Link>
                        <Link className="col-span-1 cursor-pointer block select-none space-y-1 rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground" href={"/orders/invoices"}>
                            <div>
                                <div className="text-sm font-medium leading-none">
                                    Pedidos e Comandas
                                </div>
                                <p className="line-clamp-2 text-sm font-normal leading-snug text-muted-foreground">
                                    Informações sobre todos os pedidos do seu restaurante.
                                </p>
                            </div>
                        </Link>
                        <Link className="col-span-2 cursor-pointer block select-none space-y-1 rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground" href={"/orders/close-order"}>
                            <div>
                                <div className="text-sm font-medium leading-none">
                                    Finalizar Comanda
                                </div>
                                <p className="line-clamp-2 text-sm font-normal leading-snug text-muted-foreground">
                                    Com a comanda em mão escanei/digite o código contido nela, com isso sera possivel realizar o fechamento da comanda.
                                </p>
                            </div>
                        </Link>
                    </div>
                </NavigationMenuContent>
            </NavigationMenuItem>
        </NavigationMenuList>
    )
}

export { NavigationMenuOrder }