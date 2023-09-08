import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import Order from './Order';

interface ColumnProps {
    id: string;
    title: string;
    orders: Order[];
}

const Column: React.FC<ColumnProps> = ({ id, title, orders }) => {

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

    return (
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
                                <Order key={order.id} order={order} index={index} type={title}/>
                            ))}
                        </div>
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </div>
    );
};

export default Column;
