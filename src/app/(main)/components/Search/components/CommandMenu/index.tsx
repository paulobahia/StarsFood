"use client"

import { CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator } from "@/app/components/ui/command"
import { Circle, File } from "lucide-react"
import { useRouter } from "next/navigation"
import { Dispatch, SetStateAction, useEffect } from "react"

type CommandMenuProps = {
    open: boolean
    setOpen: Dispatch<SetStateAction<boolean>>
}

const CommandMenu: React.FC<CommandMenuProps> = ({ open, setOpen }) => {
    const router = useRouter()

    useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
                e.preventDefault()
                setOpen((open) => !open)
            }
        }
        document.addEventListener("keydown", down)
        return () => document.removeEventListener("keydown", down)
    }, [])

    const goto = (pathRouter: string) => {
        setOpen(false)
        router.push(pathRouter)
    }

    return (
        <CommandDialog open={open} onOpenChange={setOpen}>
            <CommandInput placeholder="Estou procurando por..." />
            <div className="max-h-[35vh] overflow-y-auto overflow-x-hidden">
                <CommandList>
                    <CommandEmpty>Nenhum resultado encontrado.</CommandEmpty>
                    <CommandGroup heading="Links">
                        <div onClick={() => goto('/overview')}>
                            <CommandItem className="cursor-pointer flex items-center">
                                <File className="w-5 h-5 mr-2" />
                                <div>Overview</div>
                            </CommandItem>
                        </div>
                        <div onClick={() => goto('/orders')}>
                            <CommandItem className="cursor-pointer flex items-center">
                                <File className="w-5 h-5 mr-2" />
                                <div>Pedidos</div>
                            </CommandItem>
                        </div>
                        <div onClick={() => goto('/products')}>
                            <CommandItem className="cursor-pointer flex items-center">
                                <File className="w-5 h-5 mr-2" />
                                <div>Produtos</div>
                            </CommandItem>
                        </div>
                        <div onClick={() => goto('/settings')}>
                            <CommandItem className="cursor-pointer flex items-center">
                                <File className="w-5 h-5 mr-2" />
                                <div>Configurações</div>
                            </CommandItem>
                        </div>
                    </CommandGroup>
                </CommandList>
                <CommandGroup heading="Pedidos">
                    <div>
                        <CommandItem onClick={() => goto('/orders')} className="cursor-pointer flex items-center">
                            <Circle className="w-1 h-1 mr-2" />
                            <div>Gerenciar Pedido</div>
                        </CommandItem>
                    </div>
                    <div onClick={() => goto('/orders/invoices')}>
                        <CommandItem className="cursor-pointer flex items-center">
                            <Circle className="w-1 h-1 mr-2" />
                            <div>Pedidos e Comandas</div>
                        </CommandItem>
                    </div>
                    <div onClick={() => goto('/orders/close-order')}>
                        <CommandItem className="cursor-pointer flex items-center">
                            <Circle className="w-1 h-1 mr-2" />
                            <div>Finalizar Comanda</div>
                        </CommandItem>
                    </div>
                </CommandGroup>
                <CommandGroup heading="Produtos">
                    <div onClick={() => goto('/products')}>
                        <CommandItem className="cursor-pointer flex items-center">
                            <Circle className="w-1 h-1 mr-2" />
                            <div>Gerenciar Produtos</div>
                        </CommandItem>
                    </div>
                    <div onClick={() => goto('/products/add-products')}>
                        <CommandItem className="cursor-pointer flex items-center">
                            <Circle className="w-1 h-1 mr-2" />
                            <div>Adicionar Produtos</div>
                        </CommandItem>
                    </div>
                    <div onClick={() => goto('/products/categories')}>
                        <CommandItem className="cursor-pointer flex items-center">
                            <Circle className="w-1 h-1 mr-2" />
                            <div>Gerenciar Categorias</div>
                        </CommandItem>
                    </div>
                    <div onClick={() => goto('/products/categories/add-categories')}>
                        <CommandItem className="cursor-pointer flex items-center">
                            <Circle className="w-1 h-1 mr-2" />
                            <div>Adicionar Categorias</div>
                        </CommandItem>
                    </div>
                </CommandGroup>
                <CommandSeparator />
            </div>
        </CommandDialog>
    )
}

export default CommandMenu