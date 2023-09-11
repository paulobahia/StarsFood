type ColumnData = {
    id: string;
    title: string;
};

type Order = {
    id: string;
    title: string;
    status: string;
    waiterName: string;
    waiterAvatar: any; // TODO: Alterar para a tipagem correta
    orderTime: string;
    table: string;
    itens: ItensOrder[];
};

type ItensOrder = {
    name: string;
    imagePath: any; // TODO: Alterar para a tipagem correta
    quantity: number;
    price: number;
}

type AppState = {
    columns: ColumnData[];
    orders: Order[];
};
