import { DataTable } from "./components/data-table";
import { Categories, columns } from "./components/columns";

const Fakedata: Categories[] = [
    {
        id: "#003",
        name: "Acompanhamentos",
        isAvailable: 'active'
    },
    {
        id: "#010",
        name: "Bebidas",
        isAvailable: 'active'
    },
    {
        id: "#025",
        name: "Carnes Principais",
        isAvailable: 'active'
    },
    {
        id: "#042",
        name: "Saladas",
        isAvailable: 'inactive'
    },
    {
        id: "#068",
        name: "Sobremesas",
        isAvailable: 'active'
    },
    {
        id: "#089",
        name: "Hambúrgueres",
        isAvailable: 'inactive'
    },
]

export default function Categories() {
    return (
        <main className="text-white">
            <div className="flex-col flex justify-center items-center gap-y-4">
                <div className="flex flex-1 w-full text-3xl font-semibold">
                    Gerenciar Categorias
                </div>
            </div>
            <div className="flex w-full mt-5 border border-backgrounds-primary-light bg-backgrounds-secondary rounded-lg">
                <div className="w-full">
                    <DataTable columns={columns} data={Fakedata} />
                </div>
            </div>
        </main>
    )
}