"use client"

import { DataTable } from "./components/data-table";
import { Categories, columns } from "./components/columns";
import { useEffect, useState } from "react";
import { getAllCategorys } from "@/services";


export default function Categories() {

    const Fakedata: Categories[] = [
        {
            id: "#003",
            categoryName: "Acompanhamentos",
            isAvailable: 'active'
        },
        {
            id: "#010",
            categoryName: "Bebidas",
            isAvailable: 'active'
        },
        {
            id: "#025",
            categoryName: "Carnes Principais",
            isAvailable: 'active'
        },
        {
            id: "#042",
            categoryName: "Saladas",
            isAvailable: 'inactive'
        },
        {
            id: "#068",
            categoryName: "Sobremesas",
            isAvailable: 'active'
        },
        {
            id: "#089",
            categoryName: "Hambúrgueres",
            isAvailable: 'inactive'
        },
    ]

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
                    <DataTable onUpdateOrDelete={handleUpdateOrDelete} columns={columns} data={Fakedata} />
                </div>
            </div>
        </main>
    )
}