"use client"

import { DotsHorizontalIcon } from "@radix-ui/react-icons"
import { Row } from "@tanstack/react-table"

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

import { deleteCategory, updateStatusCategory } from "@/services"
import { useState } from "react"

interface DataTableRowActionsProps<TData> {
    row: Row<TData>
    onUpdateOrDelete: () => void;
}

export function DataTableRowActions<TData>({
    row,
    onUpdateOrDelete
}: DataTableRowActionsProps<TData>) {

    const [isRemoveCategory, setIsRemoveCategory] = useState<boolean>(false)

    const removeCategory = (id: number) => {
        deleteCategory(id)
            .then(() => {
                onUpdateOrDelete()
            })
            .catch((e) => {
                console.log(e)
            })
    }

    const handlerStatusCateogory = (id: number, status: boolean) => {

        updateStatusCategory(id, !status)
            .then(() => {
                onUpdateOrDelete()
            })
            .catch((e) => {
                console.log(e)
            })
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
                    <DropdownMenuItem>Editar</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuSub>
                        <DropdownMenuSubTrigger>Status</DropdownMenuSubTrigger>
                        <DropdownMenuSubContent>
                            <DropdownMenuRadioGroup className="flex flex-col" value={row.getValue('isAvailable') ? 'active' : 'inactive'}>
                                <AlertDialogTrigger disabled={row.getValue('isAvailable')} onClick={() => setIsRemoveCategory(false)}>
                                    <DropdownMenuRadioItem disabled={row.getValue('isAvailable')} value={'active'}>
                                        Ativo
                                    </DropdownMenuRadioItem>
                                </AlertDialogTrigger>
                                <AlertDialogTrigger disabled={!row.getValue('isAvailable')} onClick={() => setIsRemoveCategory(false)}>
                                    <DropdownMenuRadioItem disabled={!row.getValue('isAvailable')} value={'inactive'}>
                                        Inativo
                                    </DropdownMenuRadioItem>
                                </AlertDialogTrigger>
                            </DropdownMenuRadioGroup>
                        </DropdownMenuSubContent>
                    </DropdownMenuSub>
                    <DropdownMenuSeparator />
                    <AlertDialogTrigger onClick={() => setIsRemoveCategory(true)}>
                        <DropdownMenuItem className="flex gap-x-2">
                            Remover
                            <DropdownMenuShortcut className="hidden md:flex">Ctrl + D</DropdownMenuShortcut>
                        </DropdownMenuItem>
                    </AlertDialogTrigger>
                </DropdownMenuContent>
            </DropdownMenu>
            <AlertDialogPortal>
                {isRemoveCategory
                    ?
                    <AlertDialogContent>
                        <AlertDialogHeader>
                            <AlertDialogTitle>Você tem certeza absoluta?</AlertDialogTitle>
                            <AlertDialogDescription>Essa ação não pode ser desfeita. Isso excluirá permanentemente sua categoria.</AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                            <AlertDialogCancel>Cancelar</AlertDialogCancel>
                            <AlertDialogAction onClick={() => removeCategory(row.getValue('id'))} >Continuar</AlertDialogAction>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                    :
                    <AlertDialogContent>
                        <AlertDialogHeader>
                            <AlertDialogTitle>Você tem certeza absoluta?</AlertDialogTitle>
                            <AlertDialogDescription>Essa ação irá alterar o status da sua categoria.</AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                            <AlertDialogCancel>Cancelar</AlertDialogCancel>
                            <AlertDialogAction onClick={() => handlerStatusCateogory(row.getValue('id'), row.getValue('isAvailable'))}>Continuar</AlertDialogAction>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                }
            </AlertDialogPortal>
        </AlertDialog >
    )
}