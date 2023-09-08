type ColumnData = {
    id: string;
    title: string;
};

type Order = {
    id: string;
    title: string;
    status: string;
};

type AppState = {
    columns: ColumnData[];
    orders: Order[];
};