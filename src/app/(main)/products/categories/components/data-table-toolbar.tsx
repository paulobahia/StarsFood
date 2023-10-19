"use client"

import { Table } from "@tanstack/react-table"
import { useRouter } from 'next/navigation'
import { Input } from "@/app/components/ui/input"
import { SearchNormal1 } from "iconsax-react"
import { Plus } from "lucide-react"

interface DataTableToolbarProps<TData> {
    table: Table<TData>
}

export function DataTableToolbar<TData>({ table }: DataTableToolbarProps<TData>) {
    const router = useRouter()
    return (
        <div className="flex p-6 justify-between items-center">
            <div className="w-full max-w-[220px] sm:max-w-[250px] flex items-center">
                <Input
                    placeholder="Pesquise por categoria"
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
            <div>
                <button onClick={() => router.push('/products/categories/add-categories')} className="bg-white transition-colors items-center flex justify-center gap-x-2 ease-in-out w-full sm:py-2 sm:px-5 p-1 font-semibold border text-black text-sm rounded-md hover:bg-transparent hover:border hover:border-gray-300 hover:text-white disabled:bg-neutral-500 disabled:border-0 disabled:hover:text-black">
                    <span className="sm:flex hidden">
                        Adicionar Categoria
                    </span>
                    <span>
                        <Plus className="flex sm:hidden" />
                    </span>
                </button>
            </div>
        </div>
    )
}