import React, { useState } from 'react';

// Sample data
const initialItems = [
  { id: '1', content: 'Item 1' },
  { id: '2', content: 'Item 2' },
  { id: '3', content: 'Item 3' },
  { id: '4', content: 'Item 4' },
  { id: '5', content: 'Item 5' }
];

const DraggableList = () => {
  const [items, setItems] = useState(initialItems);
  const [draggingItemIndex, setDraggingItemIndex] = useState(null);

  const handleDragStart = (index) => {
    setDraggingItemIndex(index);
  };

  const handleDragEnter = (index) => {
    const draggedItem = items[draggingItemIndex];
    const remainingItems = items.filter((item, i) => i !== draggingItemIndex);
    const newItems = [
      ...remainingItems.slice(0, index),
      draggedItem,
      ...remainingItems.slice(index)
    ];
    setDraggingItemIndex(index);
    setItems(newItems);
  };

  const handleDragEnd = () => {
    setDraggingItemIndex(null);
  };

  return (
    <ul>
      {items.map((item, index) => (
        <li
          key={item.id}
          draggable
          onDragStart={() => handleDragStart(index)}
          onDragEnter={() => handleDragEnter(index)}
          onDragEnd={handleDragEnd}
          style={{
            backgroundColor: draggingItemIndex === index ? '#f0f0f0' : '#fff',
            padding: '8px',
            margin: '4px 0',
            border: '1px solid #ccc',
            borderRadius: '4px',
            boxShadow: draggingItemIndex === index ? '0 2px 4px rgba(0,0,0,0.2)' : 'none',
            cursor: 'move'
          }}
        >
          {item.content}
        </li>
      ))}
    </ul>
  );
};

export default DraggableList;
