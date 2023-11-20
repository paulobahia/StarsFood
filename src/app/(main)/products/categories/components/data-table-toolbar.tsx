"use client"

import { useRouter } from 'next/navigation'
import { Table } from "@tanstack/react-table"

import { Input } from "@/app/components/ui/input"
import { Button } from "@/app/components/ui/button"

import { DataTableFacetedFilter } from "./data-table-faceted-filter"
import { DataTableViewOptions } from "./data-table-view-options"

import { Circle, Plus, CircleOff } from "lucide-react"

export const statuses = [
    {
        value: true,
        label: "Ativo",
        icon: Circle,
    },
    {
        value: false,
        label: "Inativo",
        icon: CircleOff,
    },
]

interface DataTableToolbarProps<TData> {
    table: Table<TData>
}

export function DataTableToolbar<TData>({ table }: DataTableToolbarProps<TData>) {
    const router = useRouter()
    return (
        <div className="flex p-6 justify-between items-center">
            <div className="w-full max-w-[220px] sm:max-w-[250px] flex items-center gap-x-2">
                <Input
                    placeholder="Pesquise por categoria"
                    value={(table.getColumn("categoryName")?.getFilterValue() as string) ?? ""}
                    onChange={(event) =>
                        table.getColumn("categoryName")?.setFilterValue(event.target.value)
                    }
                    className="h-8 w-[150px] lg:w-[250px] placeholder:text-primary-secundary placeholder:text-xs text-sm rounded-md text-white"
                />
                {table.getColumn("isAvailable") && (
                    <DataTableFacetedFilter
                        column={table.getColumn("isAvailable")}
                        title="Status"
                        options={statuses}
                    />
                )}
            </div>
            <div className="flex items-center gap-x-3">
                <DataTableViewOptions table={table} />
                <Button
                    onClick={() => router.push('/products/categories/add-categories')}
                    variant="default"
                    size="sm"
                    className="ml-auto py-2 hidden h-8 lg:flex border border-primary-light"
                >
                    <span className="sm:flex hidden">
                        Adicionar Categoria
                    </span>
                    <span>
                        <Plus className="flex sm:hidden" />
                    </span>
                </Button>
            </div>
        </div>
    )
}