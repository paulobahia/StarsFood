import React from 'react';
import Column from './Column';

interface OrderListProps {
  column: React.ReactNode
}

const OrderList: React.FC<OrderListProps> = ({ column }) => {
  return (
    <div className="flex-col gap-y-5 md:gap-y-0 flex md:flex md:flex-row gap-x-5 mt-5 justify-between">
      {column}
    </div>
  );
};

export default OrderList;
