"use client"

import { Table } from "@tanstack/react-table"
import { Input } from "@/app/components/ui/input"
import { DataTableViewOptions } from "./data-table-view-options"
import { DataTableFacetedFilter } from "./data-table-faceted-filter"
import { Circle, CircleOff, CheckCircle } from "lucide-react"

interface DataTableToolbarProps<TData> {
    table: Table<TData>
}

export const statuses = [
    {
        value: "Aberto",
        label: "Aberto",
        icon: Circle,
    },
    {
        value: "Cancelado",
        label: "Cancelado",
        icon: CircleOff,
    },
    {
        value: "Pagamento Realizado",
        label: "Pagamento Realizado",
        icon: CheckCircle,
    },
]

export function DataTableToolbar<TData>({ table }: DataTableToolbarProps<TData>) {

    return (
        <div className="flex py-5 px-3 justify-between items-center">
            <div className="w-full max-w-[220px] sm:max-w-[250px] flex items-center gap-x-2">
                <Input
                    placeholder="Pesquise pelo funcionário"
                    value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
                    onChange={(event) =>
                        table.getColumn("name")?.setFilterValue(event.target.value)
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
            </div>
        </div>
    )
}