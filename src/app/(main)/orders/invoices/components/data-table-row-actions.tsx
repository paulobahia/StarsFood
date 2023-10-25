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

interface DataTableRowActionsProps<TData> {
    row: Row<TData>
}

const labels = [
    {
        value: "active",
        label: "Ativar",
    },
    {
        value: "inactive",
        label: "Desativar",
    },
]

export function DataTableRowActions<TData>({
    row,
}: DataTableRowActionsProps<TData>) {

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant="ghost"
                    className="flex h-8 w-8 p-0 data-[state=open]:bg-muted"
                >
                    <DotsHorizontalIcon className="h-4 w-4" />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="min-w-max">
                <DropdownMenuItem>Editar</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuSub>
                    <DropdownMenuSubTrigger>Status</DropdownMenuSubTrigger>
                    <DropdownMenuSubContent>
                        <DropdownMenuRadioGroup>
                            {labels.map((label) => (
                                <DropdownMenuRadioItem key={label.value} value={label.value}>
                                    {label.label}
                                </DropdownMenuRadioItem>
                            ))}
                        </DropdownMenuRadioGroup>
                    </DropdownMenuSubContent>
                </DropdownMenuSub>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="flex gap-x-2">
                    <div>
                        Remover
                    </div>
                    <DropdownMenuShortcut className="hidden md:flex">Ctrl + D</DropdownMenuShortcut>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}