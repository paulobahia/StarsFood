"use client"

import { DotsHorizontalIcon } from "@radix-ui/react-icons"
import { Cell, Row } from "@tanstack/react-table"

import { Button } from "@/app/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from "@/app/components/ui/dropdown-menu"
import {
    AlertDialog,
    AlertDialogPortal,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
    AlertDialogFooter,
    AlertDialogCancel,
    AlertDialogAction,
} from "@/app/components/ui/alert-dialog"

import { deleteProduct, updateProduct } from "@/services"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Product, UpdateProduct } from "@/contracts/productsContracts"

interface DataTableRowActionsProps<TData> {
    row: Row<TData>
    onUpdateOrDelete: () => void
    tableData: Product[]
}

export function DataTableRowActions<TData>({
    row,
    tableData,
    onUpdateOrDelete
}: DataTableRowActionsProps<TData>) {
    const router = useRouter()

    const [isTypeHandlerCategory, setIsTypeHandlerCategory] = useState<string>('')

    const removeProduct = (id: number) => {
        deleteProduct(id)
            .then(() => {
                onUpdateOrDelete()
            })
            .catch((e) => {
                console.log(e)
            })
    }
    const handlerStatusProduct = (id: number) => {

        let rowData = tableData.filter((e) => e.id == id)[0]

        let postData: UpdateProduct = {
            id: rowData.id,
            name: rowData.name,
            imgUrl: rowData.imgUrl,
            description: rowData.description,
            isAvailable: !rowData.isAvailable,
            categoryId: rowData.categoryId
        }

        updateProduct(id, postData)
            .then(() => {
                onUpdateOrDelete()
            })
            .catch((e) => {
                console.log(e)
            })
    }

    const gotoEditProducts = (id: number) => {
        router.push(`/products/edit-products/${id}`)
    }

    return (
        <AlertDialog>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button
                        variant="ghost"
                        className="flex h-8 w-8 p-0 data-[state=open]:bg-muted"
                    >
                        <DotsHorizontalIcon className="h-4 w-4" />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                    <DropdownMenuItem onClick={() => gotoEditProducts(row.getValue('id'))}>Editar</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuSub>
                        <DropdownMenuSubTrigger>Status</DropdownMenuSubTrigger>
                        <DropdownMenuSubContent>
                            <DropdownMenuRadioGroup className="flex flex-col" value={row.getValue('isAvailable') ? 'active' : 'inactive'}>
                                <AlertDialogTrigger disabled={row.getValue('isAvailable')} onClick={() => setIsTypeHandlerCategory('status')}>
                                    <DropdownMenuRadioItem disabled={row.getValue('isAvailable')} value={'active'}>
                                        Ativo
                                    </DropdownMenuRadioItem>
                                </AlertDialogTrigger>
                                <AlertDialogTrigger disabled={!row.getValue('isAvailable')} onClick={() => setIsTypeHandlerCategory('status')}>
                                    <DropdownMenuRadioItem disabled={!row.getValue('isAvailable')} value={'inactive'}>
                                        Inativo
                                    </DropdownMenuRadioItem>
                                </AlertDialogTrigger>
                            </DropdownMenuRadioGroup>
                        </DropdownMenuSubContent>
                    </DropdownMenuSub>
                    <DropdownMenuSeparator />
                    <AlertDialogTrigger onClick={() => setIsTypeHandlerCategory('remove')}>
                        <DropdownMenuItem className="flex gap-x-2">
                            Remover
                            <DropdownMenuShortcut className="hidden md:flex">Ctrl + D</DropdownMenuShortcut>
                        </DropdownMenuItem>
                    </AlertDialogTrigger>
                </DropdownMenuContent>
            </DropdownMenu>
            <AlertDialogPortal>
                {
                    isTypeHandlerCategory == 'status' &&
                    <AlertDialogContent>
                        <AlertDialogHeader>
                            <AlertDialogTitle>Você tem certeza absoluta?</AlertDialogTitle>
                            <AlertDialogDescription>Essa ação
                                da sua categoria.</AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                            <AlertDialogCancel>Cancelar</AlertDialogCancel>
                            <AlertDialogAction onClick={() => handlerStatusProduct(row.getValue('id'))}>Continuar</AlertDialogAction>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                }
                {
                    isTypeHandlerCategory == 'remove' &&
                    <AlertDialogContent>
                        <AlertDialogHeader>
                            <AlertDialogTitle>Você tem certeza absoluta?</AlertDialogTitle>
                            <AlertDialogDescription>Essa ação não pode ser desfeita. Isso excluirá permanentemente seu produto.</AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                            <AlertDialogCancel>Cancelar</AlertDialogCancel>
                            <AlertDialogAction onClick={() => removeProduct(row.getValue('id'))} >Continuar</AlertDialogAction>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                }
            </AlertDialogPortal>
        </AlertDialog >
    )
}