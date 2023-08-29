
const LastSales = () => {

    interface salesDataProps {
        name: string,
        imagePath: string,
        order: string,
        value: string
    }

    const salesData = [
        {
            name: 'Olivia Martin',
            imagePath: 'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            order: '#00129',
            value: 'R$ 230,00'
        },
        {
            name: 'Jackson Lee',
            imagePath: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            order: '#00130',
            value: 'R$ 39,00'
        },
        {
            name: 'William Kim',
            imagePath: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80',
            order: '#00126',
            value: 'R$ 299,00'
        },
        {
            name: 'Jackson Lee',
            imagePath: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            order: '#00124',
            value: 'R$ 99,00'
        },
        {
            name: 'Olivia Martin',
            imagePath: 'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            order: '#00123',
            value: 'R$ 39,00'
        },
        {
            name: 'William Kim',
            imagePath: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80',
            order: '#00122',
            value: 'R$ 175,00'
        },
        {
            name: 'Jackson Lee',
            imagePath: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            order: '#00127',
            value: 'R$ 123,40'
        }
    ]

    return (
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
                    {salesData.map(({ imagePath, name, order, value }: salesDataProps, index: number) => {
                        return (
                            <div className="flex justify-between items-center w-full" key={index}>
                                <div className="flex gap-x-3 items-center">
                                    <img className="h-9 w-9 rounded-full" src={imagePath} alt="" />
                                    <div className="flex-col flex">
                                        <span className="text-sm font-medium">
                                            {name}
                                        </span>
                                        <span className="text-sm font-medium text-primary-light">
                                            Pedido - {order}
                                        </span>
                                    </div>
                                </div>
                                <div className="flex items-center justify-center">
                                    <div className="text-xl font-semibold">{value}</div>
                                </div>
                            </div>
                        )
                    })}
                </span>
            </div>
        </div>
    )
}

export default LastSales