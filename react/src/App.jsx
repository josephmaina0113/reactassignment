import React, { useState } from 'react';
import './App.css';

function App() {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const addItem = () => {
    if (!inputValue.trim()) {
      return;
    }   
    const updateList = [...items, inputValue]         
    setItems(updateList)
    setInputValue('');
  };

  return (
    <div className="container">
      <h2>Dynamic list manager</h2>
      
      <div className="input">
        <input
          type="text"
          placeholder="Enter an item"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={addItem}>Add Item</button>
      
      </div>

      <div className="list">
        {items.length === 0 ? (
          <p className="empty">empty</p>
        ) : (
          <ul>
            {items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default App;




