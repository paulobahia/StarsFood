
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

type Invoices = {
    id: string
    name: string
    createdAt: string
    isAvailable: string
    amount: string
}

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

type ProductsInvoice = {
    id: string
    productName: string
    quantity: number
    price: string
    category: string
}

type Person = {
    id: number,
    name: string,
    products: ProductsInvoice[]
}
