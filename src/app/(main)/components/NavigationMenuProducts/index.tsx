import {
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/app/components/ui/navigation-menu"
import Link from "next/link"
import { usePathname } from "next/navigation"

const NavigationMenuProducts = () => {
    const pathname = usePathname()
    const pathSplited = pathname.split('/')[1]

    return (
        <NavigationMenuList>
            <NavigationMenuItem>
                <p className={pathSplited == 'products' ? 'text-white' : 'text-primary-light'}>
                    <NavigationMenuTrigger className="cursor-pointer p-0 h-0">Produtos</NavigationMenuTrigger>
                </p>
                <NavigationMenuContent>
                    <div className="grid gap-3 p-4 w-[500px] grid-cols-2">
                        <Link className="col-span-1 cursor-pointer block select-none space-y-1 rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground" href={"/products"}>
                            <div >
                                <div className="text-sm font-medium leading-none">
                                    Gerenciar Produtos
                                </div>
                                <p className="line-clamp-2 text-sm font-normal leading-snug text-muted-foreground">
                                    Visualize seus produtos cadastrados.
                                </p>
                            </div>
                        </Link>
                        <Link className="col-span-1 cursor-pointer block select-none space-y-1 rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground" href={"/products/add-products"}>
                            <div>
                                <div className="text-sm font-medium leading-none">
                                    Adicionar Produto
                                </div>
                                <p className="line-clamp-2 text-sm font-normal leading-snug text-muted-foreground">
                                    Adicione novos produtos ao cardápio.
                                </p>
                            </div>
                        </Link>
                        <Link className="col-span-1 cursor-pointer block select-none space-y-1 rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground" href={"/products/categories"}>
                            <div>
                                <div className="text-sm font-medium leading-none">
                                    Gerenciar Categorias
                                </div>
                                <p className="line-clamp-2 text-sm font-normal leading-snug text-muted-foreground">
                                    Visualize todas as categorias cadastradas.
                                </p>
                            </div>
                        </Link>
                        <Link className="col-span-1 cursor-pointer block select-none space-y-1 rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground" href={"/products/categories/add-categories"}>
                            <div>
                                <div className="text-sm font-medium leading-none">
                                    Adicionar Categorias
                                </div>
                                <p className="line-clamp-2 text-sm font-normal leading-snug text-muted-foreground">
                                    Adicione novas categorias ao cardápio.
                                </p>
                            </div>
                        </Link>
                    </div>
                </NavigationMenuContent>
            </NavigationMenuItem>
        </NavigationMenuList>
    )
}

export { NavigationMenuProducts }