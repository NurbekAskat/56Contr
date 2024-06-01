import {useState} from 'react';
import './App.css';
import {MenuItem} from './types';
import Menu from './Components/Menu/Menu';
import OrderDetails from './Components/OrderDetails/OrderDetails';

const menuItems: MenuItem[] = [
  {id: 1, name: 'Hamburger', price: 160, count: 0},
  {id: 2, name: 'Fries', price: 110, count: 0},
  {id: 3, name: 'Tea', price: 30, count: 0},
  {id: 4, name: 'Pizza', price: 400, count: 0},
  {id: 5, name: 'Ice Cream', price: 60, count: 0},
  {id: 6, name: 'Coffee', price: 50, count: 0},
  {id: 7, name: 'Pepsi', price: 90, count: 0},
  {id: 8, name: 'Water', price: 20, count: 0}
];

const App = () => {
  const [order, setOrder] = useState<MenuItem[]>(menuItems);

  const addItem = (item: MenuItem) => {
    setOrder(prevOrder =>
      prevOrder.map(orderItem => {
        if (orderItem.name === item.name) {
          return { ...orderItem, count: orderItem.count + 1 };
        }
        return orderItem;
      })
    );
  };

  const removeItem = (itemName: string) => {
    setOrder(prevOrder =>
      prevOrder.map(orderItem => {
        if (orderItem.name === itemName && orderItem.count > 0) {
          return { ...orderItem, count: orderItem.count - 1 };
        }
        return orderItem;
      })
    );
  };

  return (
    <div className="app">
      <OrderDetails order={order} removeItemFromOrder={removeItem}/>
      <Menu menuItems={order} addItemToOrder={addItem}/>
    </div>
  );
};

export default App;
