"use client"

import { DataTable } from "./components/data-table";
import { Products, columns } from "./components/columns";
import { useEffect, useState } from "react";
import { getAllProducts } from "@/services";

export default function Products() {
    const [data, setData] = useState<Products[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(false)

    useEffect(() => {
        getProducts()
    }, [])

    const handleUpdateOrDelete = () => {
        getProducts()
    }
    
    const getProducts = () => {
        setIsLoading(true)
        getAllProducts()
            .then((response) => {
                setData(response)
                setIsLoading(false)
            })
            .catch((error) => {
                console.log(error)
                setIsLoading(false)
            })
    }

    return (
        <main className="text-white">
            <div className="flex-col flex justify-center items-center gap-y-4">
                <div className="flex flex-1 w-full text-3xl font-semibold">
                    Gerenciar Produtos
                </div>
            </div>
            <div className="flex w-full mt-5 border border-backgrounds-primary-light bg-backgrounds-secondary rounded-lg">
                <div className="w-full">
                    <DataTable columns={columns} data={data} onUpdateOrDelete={handleUpdateOrDelete} isLoading={isLoading} />
                </div>
            </div>
        </main>
    )
}