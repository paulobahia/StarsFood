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

import { deleteCategory, updateCategory } from "@/services"
import { useState } from "react"
import { Label } from "@/app/components/ui/label"
import { Input } from "@/app/components/ui/input"
import { UpdateCategory } from "@/contracts"

interface DataTableRowActionsProps<TData> {
    row: Row<TData>
    onUpdateOrDelete: () => void;
}

export function DataTableRowActions<TData>({
    row,
    onUpdateOrDelete
}: DataTableRowActionsProps<TData>) {

    const [isTypeHandlerCategory, setIsTypeHandlerCategory] = useState<string>('')
    const [nameCategory, setNameCategory] = useState<string>('')

    const removeCategory = (id: number) => {
        deleteCategory(id)
            .then(() => {
                onUpdateOrDelete()
            })
            .catch((e) => {
                console.log(e)
            })
    }


    const handlerNameCateogory = (id: number, data: UpdateCategory) => {

        let postData: UpdateCategory = { ...data, categoryName: nameCategory }

        updateCategory(id, postData)
            .then(() => {
                onUpdateOrDelete()
            })
            .catch((e) => {
                console.log(e)
            })
    }

    const handlerStatusCateogory = (id: number, data: UpdateCategory) => {

        let postData: UpdateCategory = { ...data, isAvailable: !data.isAvailable }

        updateCategory(id, postData)
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
                    <AlertDialogTrigger className="w-full" onClick={() => (setIsTypeHandlerCategory('rename'), setNameCategory(row.getValue('categoryName')))}>
                        <DropdownMenuItem>Editar</DropdownMenuItem>
                    </AlertDialogTrigger>
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
                    isTypeHandlerCategory == 'rename' &&
                    <AlertDialogContent>
                        <AlertDialogHeader>
                            <AlertDialogTitle>Editar Categoria</AlertDialogTitle>
                            <AlertDialogDescription>Informe o novo nome desejado para a categoria e clique em Salvar para finalizar a alteração.</AlertDialogDescription>
                        </AlertDialogHeader>
                        <div className="gap-4 py-4 flex flex-col items-start">
                            <Label className="text-right">
                                Categoria
                            </Label>
                            <Input
                                value={nameCategory}
                                onChange={(e) => setNameCategory(e.target.value)}
                            />
                        </div>
                        <AlertDialogFooter>
                            <AlertDialogCancel>Cancelar</AlertDialogCancel>
                            <AlertDialogAction disabled={nameCategory == '' || nameCategory.length == 0} onClick={() => handlerNameCateogory(row.getValue('id'), { categoryName: row.getValue('categoryName'), isAvailable: row.getValue('isAvailable') })}>Salvar</AlertDialogAction>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                }
                {
                    isTypeHandlerCategory == 'status' &&
                    <AlertDialogContent>
                        <AlertDialogHeader>
                            <AlertDialogTitle>Você tem certeza absoluta?</AlertDialogTitle>
                            <AlertDialogDescription>Essa ação irá alterar o status da sua categoria.</AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                            <AlertDialogCancel>Cancelar</AlertDialogCancel>
                            <AlertDialogAction onClick={() => handlerStatusCateogory(row.getValue('id'), { categoryName: row.getValue('categoryName'), isAvailable: row.getValue('isAvailable') })}>Continuar</AlertDialogAction>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                }
                {
                    isTypeHandlerCategory == 'remove' &&
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
                }
            </AlertDialogPortal>
        </AlertDialog >
    )
}