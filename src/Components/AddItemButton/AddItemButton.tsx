import React from 'react';
import {MenuItem} from '../../types';


interface AddItemButtonProps {
  item: MenuItem;
  addItemToOrder: (item: MenuItem) => void;
}

const AddItemButton: React.FC<AddItemButtonProps> = ({ item, addItemToOrder }) => {
  return (
    <button onClick={() => addItemToOrder(item)}>
      {item.name} - {item.price} KGS
    </button>
  );
};

export default AddItemButton;
