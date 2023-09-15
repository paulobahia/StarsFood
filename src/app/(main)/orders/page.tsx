"use client"

import { useState } from "react";
import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import OrderList from "./components/OrderList";
import WaiterOlivia from '../../assets/waiter1.png'
import WaiterJackson from '../../assets/waiter2.png'
import WaiterWilliam from '../../assets/waiter3.png'
import Item1 from '../../assets/item1.png'
import Item2 from '../../assets/item2.png'
import Item3 from '../../assets/item3.png'
import Column from "./components/Column";

export default function Orders() {

    const initialColumns: ColumnData[] = [
        { id: 'todo', title: 'Novos Pedidos' },
        { id: 'inProgress', title: 'Em Preparo' },
        { id: 'done', title: 'Pedidos Prontos' },
    ];

    const initialOrders: Order[] = [
        { id: '0', title: 'Pedido - #00129', waiterName: 'Olivia Martin', waiterAvatar: WaiterOlivia, itens: [{ name: 'Suco de Laranaja', imagePath: Item1, price: 8.00, quantity: 2 }, { name: 'Batata Frita - 500g', imagePath: Item2, price: 18.00, quantity: 1 }, { name: 'Magnífico Burguer', imagePath: Item3, price: 29.99, quantity: 2 }], orderTime: "2023-09-08T18:30:00", table: '005', status: 'todo' },
        { id: '1', title: 'Pedido - #00128', waiterName: 'Jackson Lee', waiterAvatar: WaiterJackson, itens: [{ name: 'Suco de Laranaja', imagePath: Item1, price: 8.00, quantity: 2 }, { name: 'Batata Frita - 500g', imagePath: Item2, price: 18.00, quantity: 1 }, { name: 'Magnífico Burguer', imagePath: Item3, price: 29.99, quantity: 2 }], orderTime: "2023-09-08T18:30:00", table: '008', status: 'inProgress' },
        { id: '2', title: 'Pedido - #00127', waiterName: 'William Kim', waiterAvatar: WaiterWilliam, itens: [{ name: 'Suco de Laranaja', imagePath: Item1, price: 8.00, quantity: 2 }, { name: 'Batata Frita - 500g', imagePath: Item2, price: 18.00, quantity: 1 }, { name: 'Magnífico Burguer', imagePath: Item3, price: 29.99, quantity: 2 }], orderTime: "2023-09-08T18:30:00", table: '010', status: 'inProgress' },
        { id: '3', title: 'Pedido - #00123', waiterName: 'William Kim', waiterAvatar: WaiterWilliam, itens: [{ name: 'Suco de Laranaja', imagePath: Item1, price: 8.00, quantity: 2 }, { name: 'Batata Frita - 500g', imagePath: Item2, price: 18.00, quantity: 1 }, { name: 'Magnífico Burguer', imagePath: Item3, price: 29.99, quantity: 2 }], orderTime: "2023-09-08T18:30:00", table: '012', status: 'done' },
        { id: '4', title: 'Pedido - #00122', waiterName: 'Olivia Martin', waiterAvatar: WaiterOlivia, itens: [{ name: 'Suco de Laranaja', imagePath: Item1, price: 8.00, quantity: 2 }, { name: 'Batata Frita - 500g', imagePath: Item2, price: 18.00, quantity: 1 }, { name: 'Magnífico Burguer', imagePath: Item3, price: 29.99, quantity: 2 }], orderTime: "2023-09-08T18:30:00", table: '021', status: 'done' },
        { id: '5', title: 'Pedido - #00121', waiterName: 'Jackson Lee', waiterAvatar: WaiterJackson, itens: [{ name: 'Suco de Laranaja', imagePath: Item1, price: 8.00, quantity: 2 }, { name: 'Batata Frita - 500g', imagePath: Item2, price: 18.00, quantity: 1 }, { name: 'Magnífico Burguer', imagePath: Item3, price: 29.99, quantity: 2 }], orderTime: "2023-09-08T18:30:00", table: '020', status: 'done' },
        { id: '6', title: 'Pedido - #00126', waiterName: 'William Kim', waiterAvatar: WaiterWilliam, itens: [{ name: 'Suco de Laranaja', imagePath: Item1, price: 8.00, quantity: 2 }, { name: 'Batata Frita - 500g', imagePath: Item2, price: 18.00, quantity: 1 }, { name: 'Magnífico Burguer', imagePath: Item3, price: 29.99, quantity: 2 }], orderTime: "2023-09-08T18:30:00", table: '015', status: 'done' },
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

    const onMoveOrderToNextColumn = (orderId: string) => {
        setState((prevState) => {
            const { columns, orders } = prevState;

            const orderToMove = orders.find((order) => order.id === orderId);

            if (!orderToMove) {
                console.error('Pedido não encontrado');
                return prevState;
            }

            const currentColumn = columns.find((column) => column.id === orderToMove.status);

            if (!currentColumn) {
                console.error('Coluna não encontrada');
                return prevState;
            }

            const currentIndex = columns.findIndex((column) => column.id === currentColumn.id);
            const nextColumn = columns[currentIndex + 1];

            if (!nextColumn) {
                console.error('Não há próxima coluna');
                return prevState;
            }

            const updatedOrder = {
                ...orderToMove,
                status: nextColumn.id,
            };

            const updatedOrders = orders.map((order) =>
                order.id === updatedOrder.id ? updatedOrder : order
            );

            return {
                ...prevState,
                orders: updatedOrders,
            };
        });
    };

    const onRemoveOrderToColumn = (orderId: string) => {
        setState((prevState) => {
            const { orders } = prevState;

            const orderToRemove = orders.find((order) => order.id === orderId);

            if (!orderToRemove) {
                console.error('Pedido não encontrado');
                return prevState;
            }

            const updatedOrders = orders.filter((order) => order.id !== orderId);

            return {
                ...prevState,
                orders: updatedOrders,
            };
        });
    }

    return (
        <main className="text-white">
            <div className="flex-col flex justify-center items-center gap-y-4">
                <div className="flex flex-1 w-full text-3xl font-semibold">
                    Pedidos
                </div>
            </div>
            <DragDropContext onDragEnd={onDragEnd}>
                <OrderList
                    column={state.columns.map((column) => (
                        <Column
                            key={column.id}
                            id={column.id}
                            title={column.title}
                            orders={state.orders.filter((order) => order.status === column.id)}
                            onMoveOrder={onMoveOrderToNextColumn}
                            onRemoveOrder={onRemoveOrderToColumn}
                        />
                    ))}
                />
            </DragDropContext>
        </main >
    )
}