import React, { useState } from 'react';
import ToDoLists from './ToDoLists';

export default function App() {
  const [inputList, setInputList] = useState();
  const [Items, setItems] = useState([]);
  const itemEvent = event => {
    setInputList(event.target.value);
  };
  const listofItems = () => {
    setItems(oldItems => {
      return [...oldItems, inputList];
    });
    setInputList('');
  };
  const deleteItem = id => {
    setItems(oldItems => {
      return oldItems.filter((arrElem, index) => {
        return index !== id;
      });
    });
  };
  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>To-Do List</h1>
          <h4>- The Vector Virus</h4>
          <br />
          <input
            type="text"
            placeholder="Add items"
            onChange={itemEvent}
            value={inputList}
          />
          <button onClick={listofItems}>+</button>
          <ol>
            {Items.map((itemval, index) => {
              return (
                <ToDoLists
                  text={itemval}
                  id={index}
                  key={index}
                  onSelect={deleteItem}
                />
              );
            })}
          </ol>
        </div>
      </div>
    </>
  );
}
