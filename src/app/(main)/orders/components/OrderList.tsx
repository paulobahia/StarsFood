import React from 'react';
import Column from './Column';

interface OrderListProps {
  columns: ColumnData[];
  orders: Order[];
}

const OrderList: React.FC<OrderListProps> = ({ columns, orders }) => {
  return (
    <div className="flex-col gap-y-5 md:gap-y-0 flex md:flex md:flex-row gap-x-5 mt-5 justify-between">
      {columns.map((column) => (
        <Column
          key={column.id}
          id={column.id}
          title={column.title}
          orders={orders.filter((order) => order.status === column.id)}
        />
      ))}
    </div>
  );
};

export default OrderList;
