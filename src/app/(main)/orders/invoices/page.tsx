import { Invoices, columns } from "./components/columns";
import { DataTable } from "./components/data-table";

const Fakedata: Invoices[] = [
    {
        id: "#003",
        name: "Ricardo Monteiro",
        createdAt: "Mar 18, 2022",
        status: 'Aberto',
        amount: "R$ 20,50",
    },
    {
        id: "#002",
        name: "Ricardo Monteiro",
        createdAt: "Mar 18, 2022",
        status: 'Aberto',
        amount: "R$ 70,10",
    },
    {
        id: "#010",
        name: "Paulo Henrique",
        createdAt: "Mar 18, 2022",
        status: 'Aberto',
        amount: "R$ 55,45",
    },
    {
        id: "#011",
        name: "Ricardo Monteiro",
        createdAt: "Mar 18, 2022",
        status: 'Cancelado',
        amount: "R$ 94,20",
    },
    {
        id: "#020",
        name: "Paulo Henrique",
        createdAt: "Mar 18, 2022",
        status: 'Pagamento Realizado',
        amount: "R$ 105,50",
    },
    {
        id: "#040",
        name: "Paulo Henrique",
        createdAt: "Mar 18, 2022",
        status: 'Aberto',
        amount: "R$ 230,00",
    },
]

export default function Invoice() {
    return (
        <main className="text-white">
            <div className="flex-col flex justify-center items-center gap-y-4">
                <div className="flex flex-1 w-full text-3xl font-semibold">
                    Pedidos e Comandas
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