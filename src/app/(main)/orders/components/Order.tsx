import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

interface OrderProps {
    order: Order;
    index: number;
    type: string
}

const Order: React.FC<OrderProps> = ({ order, index, type }) => {

    const colorCard = (type: string) => {
        switch (type) {
            case 'Novos Pedidos':
                return 'bg-danger-base'
            case 'Em Preparo':
                return 'bg-warning-base'
            case 'Pedidos Prontos':
                return 'bg-success-base'
        }
    }

    return (
        <Draggable draggableId={order.id} index={index}>
            {(provided) => (
                <div className='flex w-full h-screen max-h-28'
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                >
                    <div className={`${colorCard(type)} p-2 rounded-l-md transition-colors ease-in-out delay-300`} />
                    <div className='bg-toast-background w-full rounded-r-md p-3'>
                        <p className='font-medium text-white text-sm'>
                            {order.title}
                        </p>
                    </div>
                </div>
            )}
        </Draggable>
    );
};

export default Order;
