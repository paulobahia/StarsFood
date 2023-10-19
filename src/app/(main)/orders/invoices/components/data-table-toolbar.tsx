"use client"

import { Table } from "@tanstack/react-table"
import { Input } from "@/app/components/ui/input"
import { SearchNormal1 } from "iconsax-react"

interface DataTableToolbarProps<TData> {
    table: Table<TData>
}

export function DataTableToolbar<TData>({ table }: DataTableToolbarProps<TData>) {

    return (
        <div className="flex p-6 justify-between items-center">
            <div className="w-full max-w-[220px] sm:max-w-[250px] flex items-center">
                <Input
                    placeholder="Pesquise pelo funcionário"
                    value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
                    onChange={(event) =>
                        table.getColumn("name")?.setFilterValue(event.target.value)
                    }
                    className="flex placeholder:text-primary-secundary placeholder:text-xs w-full p-2 bg-transparent border text-sm border-primary-light text-white rounded-l-md"
                />
                <button className="border-y border-r border-primary-light rounded-r-md p-2 hover:bg-slate-200/10" >
                    <SearchNormal1 size="22" color="#fff" />
                </button>
            </div>
        </div>
    )
}