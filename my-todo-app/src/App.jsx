import { useState } from 'react'
import TodoList from './components/todoList'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App(){
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const addTodo = () => {
    if(input.trim()){
      setTodos([...todos,{id:Date.now(),text:input,completed:false}]);
      setInput('');
    }
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const toggleTodo = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? {...todo,completed: !todo.completed} : todo
    ));
  }

  return (
    <div className='app'>
      <h1>TO-Do-List</h1>
      <div className='input-container'>
        <input type="text"
        placeholder='add a task'
        value={input}
        onChange={(e)=> setInput(e.target.value)} />
        <button onClick={addTodo}>Add</button>
      </div>
      <TodoList todos={todos} deleteTodo={deleteTodo} toggleTodo={toggleTodo}/>
    </div>
  )
}

export default App
