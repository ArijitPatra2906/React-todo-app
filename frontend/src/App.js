import React, { useState, useEffect } from 'react';
import './App.css';
import Form from './component/Form';
import Header from './component/Header';
import TodoList from './component/TodoList';


function App() {
  
  const initialState = JSON.parse(localStorage.getItem("todos")) || []
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState(initialState);
  const [editTodo, setEditTodo] = useState(null);
  
  
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos]);
  
  
  // const [newItem, setNewItem] = useState("");
  // const [items, setItems] = useState(initialState);

  
  // const addToto = () => {
  //   if (!newItem) {
  //     alert("Enter a item")
  //     return
  //   }
  //   const item = {
  //     id: Math.floor(Math.random() * 1000),
  //     value: newItem
  //   }
  //   setItems(oldList => [...oldList, item])
  //   setNewItem("")
  // }

  // const deleteTodo = (id) => {
  //   const newArray = items.filter(item => item.id !== id);
  //   setItems(newArray)
  // }
  return (
    <>
    <div className='container'>
      <div className="app-wrapper">
        <div>
          <Header />
        </div>
        <div>
          <Form input={input} setInput={setInput} todos={todos} setTodos={setTodos} editTodo={editTodo} setEditTodo={setEditTodo} />
        </div>
        <div>
          <TodoList todos={todos} setTodos={setTodos} setEditTodo={setEditTodo} />
        </div>
      </div>
    </div>
    {/* <div>
      <h1>Todo list app</h1>
      <input type="text" placeholder='add a todo...' value={newItem} onChange={(e) => setNewItem(e.target.value)} />
      <button onClick={addToto}>Add</button>
      <ul>
        {items.map((item) => {
          return (
            <li key={item.id}>{item.value} <button onClick={() => deleteTodo(item.id)}>
              <i className='fa fa-trash'></i>
            </button></li>
          )
        })}
      </ul>
    </div> */}
    </>
  );
}

export default App;
