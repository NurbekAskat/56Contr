import React from 'react';
import AddItemButton from '../AddItemButton/AddItemButton';
import {MenuItem} from '../../types';


interface MenuProps {
  menuItems: MenuItem[];
  addItemToOrder: (item: MenuItem) => void;
}

const Menu: React.FC<MenuProps> = ({ menuItems, addItemToOrder }) => {
  return (
    <div className="menu">
      <h2>Add Items</h2>
      {menuItems.map(item => (
        <AddItemButton key={item.id} item={item} addItemToOrder={addItemToOrder} />
      ))}
    </div>
  );
};

export default Menu;
