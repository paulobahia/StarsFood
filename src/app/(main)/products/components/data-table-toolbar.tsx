"use client"

import { Table } from "@tanstack/react-table"
import { useRouter } from 'next/navigation'
import { Input } from "@/app/components/ui/input"
import { Button } from "@/app/components/ui/button"
import { Plus } from "lucide-react"

interface DataTableToolbarProps<TData> {
    table: Table<TData>
}

import { DataTableViewOptions } from "./data-table-view-options"

export function DataTableToolbar<TData>({ table }: DataTableToolbarProps<TData>) {
    const router = useRouter()
    return (
        <div className="flex py-5 px-3 justify-between items-center">
            <div className="w-full max-w-[220px] sm:max-w-[250px] flex items-center">
                <Input
                    placeholder="Pesquise por produto"
                    value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
                    onChange={(event) =>
                        table.getColumn("name")?.setFilterValue(event.target.value)
                    }
                    className="h-8 w-[150px] lg:w-[250px] placeholder:text-primary-secundary placeholder:text-xs text-sm rounded-md text-white"
                />
            </div>
            <div className="flex items-center gap-x-3">
                <DataTableViewOptions table={table} />
                <Button
                    onClick={() => router.push('/products/add-products')}
                    variant="default"
                    size="sm"
                    className="ml-auto py-2 hidden h-8 lg:flex border border-primary-light"
                >
                    <span className="sm:flex hidden">
                        Adicionar Produto
                    </span>
                    <span>
                        <Plus className="flex sm:hidden" />
                    </span>
                </Button>
            </div>
        </div>
    )
}