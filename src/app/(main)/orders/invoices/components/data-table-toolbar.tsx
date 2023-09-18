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
                <div className="relative">
                    <Input
                        placeholder="Pesquise por produto"
                        value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
                        onChange={(event) =>
                            table.getColumn("name")?.setFilterValue(event.target.value)
                        }
                        className="flex placeholder:text-primary-secundary placeholder:text-xs w-full p-2 bg-transparent border text-sm border-primary-light text-white rounded-md"
                    />
                    <div className="top-3 right-2 absolute">
                        <SearchNormal1 size="18" color="#fff" className="" />
                    </div>
                </div>
            </div>
        </div>
    )
}