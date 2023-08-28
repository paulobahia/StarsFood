import DailyTraffic from "./components/DailyTraffic";

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
                <div className="grid grid-cols-1 xl:gap-x-5 gap-y-5 xl:grid-cols-4 w-full">
                    <div className="col-span-3 border border-primary-light rounded-xl p-6">
                        <div>
                            <span className="text-base font-medium text-white">
                                Overview
                            </span>
                        </div>
                        <DailyTraffic />
                    </div>
                    <div className="border border-primary-light rounded-xl p-6 col-span-1">
                        <div className="flex-col gap-y-6 flex">
                            <span className="flex-col gap-y-1">
                                <p className="text-base font-medium text-white">
                                    Últimas vendas
                                </p>
                                <p className="text-sm font-medium text-primary-light">
                                    Você fez um total de 562 vendas esse mês.
                                </p>
                            </span>
                            <span className="flex-col gap-y-8 flex">
                                <div className="flex justify-between items-center w-full">
                                    <div className="flex gap-x-3 items-center">
                                        <img className=" h-9 w-9 rounded-full" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                                        <div className="flex-col flex">
                                            <span className="text-sm font-medium">
                                                Olivia Martin
                                            </span>
                                            <span className="text-sm font-medium text-primary-light">
                                                Pedido - #00129
                                            </span>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-center">
                                        <div className="text-xl font-semibold">R$ 230,00</div>
                                    </div>
                                </div>
                                <div className="flex justify-between items-center w-full">
                                    <div className="flex gap-x-3 items-center">
                                        <img className=" h-9 w-9 rounded-full" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80" alt="" />
                                        <div className="flex-col flex">
                                            <span className="text-sm font-medium">
                                                Jackson Lee
                                            </span>
                                            <span className="text-sm font-medium text-primary-light">
                                                Pedido - #00128
                                            </span>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-center">
                                        <div className="text-xl font-semibold">R$ 39,00</div>
                                    </div>
                                </div>
                                <div className="flex justify-between items-center w-full">
                                    <div className="flex gap-x-3 items-center">
                                        <img className=" h-9 w-9 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                                        <div className="flex-col flex">
                                            <span className="text-sm font-medium">
                                                William Kim
                                            </span>
                                            <span className="text-sm font-medium text-primary-light">
                                                Pedido - #00127
                                            </span>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-center">
                                        <div className="text-xl font-semibold">R$ 299,00</div>
                                    </div>
                                </div>
                                <div className="flex justify-between items-center w-full">
                                    <div className="flex gap-x-3 items-center">
                                        <img className=" h-9 w-9 rounded-full" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80" alt="" />
                                        <div className="flex-col flex">
                                            <span className="text-sm font-medium">
                                                Jackson Lee
                                            </span>
                                            <span className="text-sm font-medium text-primary-light">
                                                Pedido - #00126
                                            </span>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-center">
                                        <div className="text-xl font-semibold">R$ 99,00</div>
                                    </div>
                                </div>
                                <div className="flex justify-between items-center w-full">
                                    <div className="flex gap-x-3 items-center">
                                        <img className=" h-9 w-9 rounded-full" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80" alt="" />
                                        <div className="flex-col flex">
                                            <span className="text-sm font-medium">
                                                Jackson Lee
                                            </span>
                                            <span className="text-sm font-medium text-primary-light">
                                                Pedido - #00126
                                            </span>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-center">
                                        <div className="text-xl font-semibold">R$ 99,00</div>
                                    </div>
                                </div>
                                <div className="flex justify-between items-center w-full">
                                    <div className="flex gap-x-3 items-center">
                                        <img className=" h-9 w-9 rounded-full" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80" alt="" />
                                        <div className="flex-col flex">
                                            <span className="text-sm font-medium">
                                                Jackson Lee
                                            </span>
                                            <span className="text-sm font-medium text-primary-light">
                                                Pedido - #00126
                                            </span>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-center">
                                        <div className="text-xl font-semibold">R$ 99,00</div>
                                    </div>
                                </div>
                                <div className="flex justify-between items-center w-full">
                                    <div className="flex gap-x-3 items-center">
                                        <img className=" h-9 w-9 rounded-full" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80" alt="" />
                                        <div className="flex-col flex">
                                            <span className="text-sm font-medium">
                                                Jackson Lee
                                            </span>
                                            <span className="text-sm font-medium text-primary-light">
                                                Pedido - #00126
                                            </span>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-center">
                                        <div className="text-xl font-semibold">R$ 99,00</div>
                                    </div>
                                </div>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}