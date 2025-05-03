import React, { useState } from 'react'
import "./App.css"

function App() {
  const [todos, setTodos] = useState([])
  const [todo, setTodo] = useState('')

  const deleteTodo = (indexToDelete) => {
    setTodos(todos.filter((_, index) => index !== indexToDelete));
  };

  const getQuoteByDay = () => {
    const day = new Date().getDay();
    const quotes = {
      0: "Sunday vibes: reset, recharge, and pretend Monday doesn't exist ☕😴",
      1: "Monday? More like Moan-day 😩📅",
      2: "Tuesday: Still nowhere near the weekend 🫠📉",
      3: "Wednesday: Halfway to freedom 🐪🚀",
      4: "Thursday: So close, yet so far 😤✨",
      5: "It’s Friday? Wow, time really flies when you're spiraling 💅🫠✨",
      6: "Saturday is for sleep-ins and bad decisions 🍕🎉",
    };
    return quotes[day];
  };

  
  

  return (
    <section className="home">
      <div className="container text-center">
        <div className="home-content mx-auto">
          <h1 className="display-4 fw-bold">ToDoApP</h1>
          <p className="lead mt-3">{getQuoteByDay()}</p>
          <div className="mb-3 input">
            <input value={todo} onChange={(e) => setTodo(e.target.value)} type="text" className="form-control" id="exampleInput" placeholder="Add your Text" />
            <i onClick={() => setTodos([...todos, todo])} className="fa-solid fa-plus" ></i>
          </div>

          {todos.map((value, index) => {
            return (
              <div className="form-check mb-3" key={index}>
                <p>{value}<i  onClick={() => deleteTodo(index)} className="fa-solid fa-trash ms-2"></i></p>
              </div>);
          })}

        </div>
      </div>
    </section>
  )
}

export default App
