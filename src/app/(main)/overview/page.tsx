import Dashboard from "./components";

export default function Overview() {
    return (
        <main className="text-white">
            <div className="flex-col flex justify-center items-center gap-y-4">
                <div className="flex flex-1 w-full text-3xl font-semibold">
                    Dashboard
                </div>
                <div className="flex w-full">
                    <div className="bg-backgrounds-secondary py-2 px-3 rounded-lg justify-between flex items-center gap-x-3">
                        <span className="bg-backgrounds-primary cursor-pointer rounded px-2 py-1 text-sm font-medium">Overview</span>
                        <span className="text-sm font-medium">Análise</span>
                        <span className="text-sm font-medium">Relatórios</span>
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-y-3 md:grid-cols-2 xl:grid-cols-4 gap-x-5 w-full">
                    <div className="p-5 border border-primary-light flex-col rounded-xl">
                        <div className="text-sm font-medium text-white mb-3">Rendimento total</div>
                        <div>
                            <div className="text-xl font-semibold">R$ 2.231,89</div>
                            <div className="text-xs font-medium text-primary-light">+20,1% em relação ao mês passado</div>
                        </div>
                    </div>
                    <div className="p-5 border border-primary-light rounded-xl">
                        <div className="text-sm font-medium text-white mb-3">Clientes</div>
                        <div>
                            <div className="text-xl font-semibold">+1720</div>
                            <div className="text-xs font-medium text-primary-light">+70,5% em relação ao mês passado</div>
                        </div>
                    </div>
                    <div className="p-5 border border-primary-light rounded-xl">
                        <div className="text-sm font-medium text-white mb-3">Vendas</div>
                        <div>
                            <div className="text-xl font-semibold">+12.234</div>
                            <div className="text-xs font-medium text-primary-light">+19% desde o mês passado</div>
                        </div>
                    </div>
                    <div className="p-5 border border-primary-light rounded-xl">
                        <div className="text-sm font-medium text-white mb-3">Gastos</div>
                        <div>
                            <div className="text-xl font-semibold">+12.234</div>
                            <div className="text-xs font-medium text-primary-light">+19% desde o mês passado</div>
                        </div>
                    </div>
                </div>
                <Dashboard />
            </div>
        </main>
    )
}