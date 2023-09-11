import formatarData from '@/utils/methods';
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

    const OrderTime = formatarData(order.orderTime)

    return (
        <Draggable  draggableId={order.id} index={index}>
            {(provided) => (
                <div className='flex w-full h-screen max-h-28'
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                >
                    <div className={`${colorCard(type)} p-2 rounded-l-md transition-colors ease-in-out delay-300`} />
                    <div className='bg-toast-background w-full rounded-r-md p-3'>
                        <div className='flex-col flex flex-1 h-full'>
                            <div className='flex justify-between flex-1'>
                                <div>
                                    <p className='font-medium text-white text-sm'>
                                        {order.title}
                                    </p>
                                </div>
                                <div>
                                    <p className='text-primary-light font-medium text-sm'>
                                        {OrderTime}
                                    </p>
                                </div>
                            </div>
                            <div className='flex items-end flex-1 justify-between'>
                                <div className='flex items-center gap-x-2'>
                                    <div>
                                        <img className='w-9 h-9' src={order.waiterAvatar.src} alt="Imagem do Garçom" />
                                    </div>
                                    <p className='text-white font-medium text-sm'>
                                        {order.waiterName}
                                    </p>
                                </div>
                                <div className='flex text-primary-light font-medium text-sm'>
                                    <p>
                                        Mesa - &nbsp;
                                    </p>
                                    {order.table}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </Draggable>
    );
};

export default Order;
