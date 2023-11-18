"use client"

import { DataTable } from "./components/data-table";
import { Categories, columns } from "./components/columns";
import { useEffect, useState } from "react";
import { getAllCategorys } from "@/services";


export default function Categories() {

    const [data, setData] = useState<Categories[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(true)

    useEffect(() => {
        getCategories()
    }, [])

    const handleUpdateOrDelete = () => {
        getCategories()
    }

    const getCategories = () => {
        setIsLoading(true)
        getAllCategorys()
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
                    Gerenciar Categorias
                </div>
            </div>
            <div className="flex w-full mt-5 border border-backgrounds-primary-light bg-backgrounds-secondary rounded-lg">
                <div className="w-full">
                    <DataTable onUpdateOrDelete={handleUpdateOrDelete} columns={columns} data={data} isLoading={isLoading} />
                </div>
            </div>
        </main>
    )
}