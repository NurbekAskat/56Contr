import React from 'react';
import {MenuItem} from '../../types';

interface Props {
  order: MenuItem[];
  removeItemFromOrder: (itemName: string) => void;
}

const OrderDetails: React.FC<Props> = ({order, removeItemFromOrder}) => {
  const getTotalPrice = () => {
    let total = 0;
    order.map(item => (
      total += item.count * item.price
    ));
    return total;
  };

  return (
    <div className="order-details">
      <h2>Order Details</h2>
      {order.filter(item => item.count > 0).length === 0 ? (
        <p>No items in order.</p>
      ) : (
        <ul>
          {order.filter(item => item.count > 0).map(item => (
            <li key={item.id}>
              {item.name} x {item.count} - {item.price * item.count} KGS
              <button onClick={() => removeItemFromOrder(item.name)}></button>
            </li>
          ))}
        </ul>
      )}
      <p>Total price: {getTotalPrice()} KGS</p>
    </div>
  );
};

export default OrderDetails;