import { DataTable } from "./components/data-table";
import { Products, columns } from "./components/columns";

const Fakedata: Products[] = [
    {
        id: "#003",
        name: "Porção de Batata Frita",
        createdAt: "Mar 18, 2022 ás 08:20",
        category: "Acompanhamentos",
        updatedAt: "Mar 20, 2022 ás 12:30",
        price: "R$ 7,20"
    },
    {
        id: "#010",
        name: "Churrasco Misto",
        createdAt: "Mar 18, 2022 ás 08:20",
        category: "Carnes Principais",
        updatedAt: "Mar 20, 2022 ás 12:30",
        price: "R$ 20,50"
    },
    {
        id: "#025",
        name: "Refrigerante Cola",
        createdAt: "Abr 02, 2022 ás 15:45",
        category: "Bebidas",
        updatedAt: "Abr 05, 2022 ás 18:10",
        price: "R$ 4,00"
    },
    {
        id: "#042",
        name: "Prato Executivo Frango Grelhado",
        createdAt: "Abr 10, 2022 ás 12:00",
        category: "Pratos Executivos",
        updatedAt: "Abr 10, 2022 ás 14:30",
        price: "R$ 16,90"
    },
    {
        id: "#068",
        name: "Sobremesa Pudim de Leite",
        createdAt: "Abr 22, 2022 ás 19:30",
        category: "Sobremesas",
        updatedAt: "Abr 23, 2022 ás 10:15",
        price: "R$ 8,50"
    },
    {
        id: "#089",
        name: "Salada Caesar com Frango",
        createdAt: "Mai 05, 2022 ás 14:15",
        category: "Saladas",
        updatedAt: "Mai 06, 2022 ás 09:40",
        price: "R$ 12,75"
    },
    {
        id: "#105",
        name: "Prato Vegetariano Risoto de Cogumelos",
        createdAt: "Mai 15, 2022 ás 11:30",
        category: "Pratos Vegetarianos",
        updatedAt: "Mai 15, 2022 ás 13:20",
        price: "R$ 18,00"
    },
    {
        id: "#120",
        name: "Suco Natural de Laranja",
        createdAt: "Jun 02, 2022 ás 09:00",
        category: "Bebidas",
        updatedAt: "Jun 02, 2022 ás 09:05",
        price: "R$ 6,50"
    },
    {
        id: "#135",
        name: "Massa Carbonara",
        createdAt: "Jun 15, 2022 ás 18:30",
        category: "Massas",
        updatedAt: "Jun 16, 2022 ás 11:20",
        price: "R$ 14,75"
    },
    {
        id: "#150",
        name: "Hambúrguer Vegano",
        createdAt: "Jul 05, 2022 ás 12:15",
        category: "Hambúrgueres",
        updatedAt: "Jul 06, 2022 ás 14:30",
        price: "R$ 15,00"
    },
    {
        id: "#165",
        name: "Torta de Maçã",
        createdAt: "Jul 20, 2022 ás 16:45",
        category: "Sobremesas",
        updatedAt: "Jul 21, 2022 ás 09:10",
        price: "R$ 7,90"
    },
    {
        id: "#180",
        name: "Café Expresso",
        createdAt: "Ago 10, 2022 ás 08:00",
        category: "Bebidas",
        updatedAt: "Ago 10, 2022 ás 08:05",
        price: "R$ 3,50"
    },
    {
        id: "#195",
        name: "Peixe Grelhado com Molho de Limão",
        createdAt: "Ago 25, 2022 ás 19:00",
        category: "Pratos do Dia",
        updatedAt: "Ago 25, 2022 ás 20:30",
        price: "R$ 19,50"
    },
    {
        id: "#210",
        name: "Bife à Parmegiana",
        createdAt: "Set 08, 2022 ás 13:45",
        category: "Carnes Principais",
        updatedAt: "Set 08, 2022 ás 15:20",
        price: "R$ 22,00"
    },
    {
        id: "#225",
        name: "Salada de Quinoa e Abacate",
        createdAt: "Set 15, 2022 ás 12:30",
        category: "Saladas",
        updatedAt: "Set 15, 2022 ás 13:45",
        price: "R$ 11,75"
    },
    {
        id: "#240",
        name: "Lasanha de Frango com Espinafre",
        createdAt: "Out 03, 2022 ás 17:20",
        category: "Massas",
        updatedAt: "Out 03, 2022 ás 18:40",
        price: "R$ 16,90"
    },
    {
        id: "#255",
        name: "Tiramisu",
        createdAt: "Out 20, 2022 ás 20:00",
        category: "Sobremesas",
        updatedAt: "Out 20, 2022 ás 20:15",
        price: "R$ 8,00"
    }
]

export default function Products() {
    return (
        <main className="text-white">
            <div className="flex-col flex justify-center items-center gap-y-4">
                <div className="flex flex-1 w-full text-3xl font-semibold">
                    Gerenciar Produtos
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