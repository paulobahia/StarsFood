"use client"

import { ColumnDef } from "@tanstack/react-table"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/app/components/ui/dropdown-menu"
import { Button } from "@/app/components/ui/button"

import { Edit } from "lucide-react"
import { ProductVariation } from "../page"

export type Variants = {
    id: string
    name: string
    range: string
    price: string
}

export const columns: ColumnDef<Variants>[] = [
    {
        accessorKey: "name",
        header: ({ column }) => (<div className="flex text-xs">Produto</div>),
        cell: ({ row }) => <div className="text-primary-light text-xs w-[150px]">{row.getValue("name")}</div>,
    },
    {
        accessorKey: "range",
        header: ({ column }) => (<div className="flex text-xs justify-center mr-2">Tamanho</div>),
        cell: ({ row }) => <div className="text-xs w-[100px] flex justify-center">{row.getValue("range")}</div>
    },
    {
        accessorKey: "price",
        header: ({ column }) => (<div className="flex text-xs justify-center">Preço</div>),
        cell: ({ row }) => <div className="text-xs w-[100px] flex justify-center">{row.getValue("price")}</div>
    },
    {
        id: "actions",
        cell: ({ row }) => {

            return (
                <div className="flex justify-center items-center">
                    <Button variant="ghost" className="h-8 w-8 p-0">
                        <span className="sr-only">Abrir Menu</span>
                        <Edit className="h-4 w-4" />
                    </Button>
                </div>
            )
        },
    }
]
