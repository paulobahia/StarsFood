"use client"

import { useState } from "react";
import { DragDropContext, DropResult, Droppable } from 'react-beautiful-dnd';
import OrderList from "./components/OrderList";


export default function Orders() {

    const initialColumns: ColumnData[] = [
        { id: 'todo', title: 'Novos Pedidos' },
        { id: 'inProgress', title: 'Em Preparo' },
        { id: 'done', title: 'Pedidos Prontos' },
    ];

    const initialOrders: Order[] = [
        { id: '0', title: 'Pedido - #00129', status: 'todo' },
        { id: '1', title: 'Pedido - #00128', status: 'inProgress' },
        { id: '2', title: 'Pedido - #00127', status: 'inProgress' },
        { id: '3', title: 'Pedido - #00123', status: 'done' },
        { id: '4', title: 'Pedido - #00122', status: 'done' },
        { id: '5', title: 'Pedido - #00121', status: 'done' },
        { id: '6', title: 'Pedido - #00126', status: 'done' },
    ];

    const [state, setState] = useState<AppState>({
        columns: initialColumns,
        orders: initialOrders,
    });

    const onDragEnd = (result: DropResult) => {
        const { source, destination } = result;

        if (!destination) return;

        const updatedOrders = [...state.orders];
        const sourceColumn = state.columns.find((col) => col.id === source.droppableId);
        const destColumn = state.columns.find((col) => col.id === destination.droppableId);

        const movedOrder = updatedOrders.find((order) => order.id === result.draggableId);

        const sourceOrders = updatedOrders.filter((order) => order.status === sourceColumn!.id);
        sourceOrders.splice(source.index, 1);

        const destOrders = updatedOrders.filter((order) => order.status === destColumn!.id);
        destOrders.splice(destination.index, 0, movedOrder!);

        movedOrder!.status = destColumn!.id;

        setState((prevState) => ({
            ...prevState,
            orders: updatedOrders,
        }));
    };


    return (
        <main className="text-white">
            <div className="flex-col flex justify-center items-center gap-y-4">
                <div className="flex flex-1 w-full text-3xl font-semibold">
                    Pedidos
                </div>
            </div>
            <DragDropContext onDragEnd={onDragEnd}>
                <OrderList columns={state.columns} orders={state.orders} />
            </DragDropContext>
        </main >
    )
}