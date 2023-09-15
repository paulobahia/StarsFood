import React, { useState } from 'react';
import { Droppable } from 'react-beautiful-dnd';
import Order from './Order';
import OrderDialog from './OrderDialog';

import {
    Dialog,
    DialogTrigger,
} from "@/app/components/ui/dialog"

interface ColumnProps {
    id: string;
    title: string;
    orders: Order[];
    onMoveOrder: (orderId: string) => void
    onRemoveOrder: (orderId: string) => void
}

const Column: React.FC<ColumnProps> = ({ id, title, orders, onMoveOrder, onRemoveOrder }) => {
    const [order, setOrder] = useState<Order | null>(null);

    const headerCard = (type: string) => {
        switch (type) {
            case 'Novos Pedidos':
                return 'bg-danger-base'
            case 'Em Preparo':
                return 'bg-warning-base'
            case 'Pedidos Prontos':
                return 'bg-success-base'
        }
    }

    const showOrder = (Order: Order) => {
        setOrder(Order)
    }

    return (
        <Dialog>
            <div className='w-full'>
                <span>
                    <div className={`p-2 rounded-t-md ${headerCard(title)}`} />
                    <div className="bg-toast-background p-6">
                        <p className="text-white font-semibold text-lg">
                            {title}
                        </p>
                    </div>
                </span>
                <Droppable droppableId={id}>
                    {(provided) => (
                        <div className="w-full overflow-auto h-screen flex flex-col gap-y-3 px-3 bg-backgrounds-secondary rounded-b-md" ref={provided.innerRef} {...provided.droppableProps}>
                            <div className='mt-6 flex flex-col gap-x-3 gap-y-3'>
                                {orders.map((order, index) => (
                                    <DialogTrigger onClick={() => showOrder(order)} key={order.id}>
                                        <div className='shadow-md'>
                                            <Order order={order} index={index} type={title} />
                                        </div>
                                    </DialogTrigger>
                                ))}
                            </div>
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </div>
            <OrderDialog order={order} onMoveOrder={onMoveOrder} onRemoveOrder={onRemoveOrder} />
        </Dialog>
    );
};

export default Column;
