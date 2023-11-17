"use client"

import { DataTable } from "./components/data-table";
import { Categories, columns } from "./components/columns";
import { useEffect, useState } from "react";
import { getAllCategorys } from "@/services";


export default function Categories() {

    const [data, setData] = useState<Categories[]>()

    useEffect(() => {
        getCategories()
    }, [])

    const handleUpdateOrDelete = () => {
        getCategories()
    }

    const getCategories = () => {
        getAllCategorys()
            .then((response) => {
                setData(response)
            })
            .catch((error) => {
                console.log(error)
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
                    {
                        data &&
                        <DataTable onUpdateOrDelete={handleUpdateOrDelete} columns={columns} data={data} />
                    }
                </div>
            </div>
        </main>
    )
}