import { useState } from 'react';
import TodoList from './components/todoList';

import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  const [editId, setEditId] = useState(null);

  const addTodo = () => {
    if (input.trim()) {
      const isDuplicate = todos.some(todo => todo.text.toLowerCase() === input.trim().toLowerCase());
      if (isDuplicate) {
        alert('This task already exists!');
        return;
      }

      if (editId) {

        setTodos(
          todos.map(todo =>
            todo.id === editId ? { ...todo, text: input } : todo
          )
        );
        setEditId(null);
      } else {

        setTodos([...todos, { id: Date.now(), text: input, completed: false }]);
      }
      setInput('');
    }
  };

  const deleteTodo = id => {
    const toBeDeleted = todos.find(todo => todo.id === id);
    const confirmUndo = window.confirm(
      `Do you want to delete the task: "${toBeDeleted.text}"?`
    );
    if (confirmUndo) {
      setTodos(todos.filter(todo => todo.id !== id));
    }
  };

  const toggleTodo = id => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const startEditTodo = id => {
    const todoToEdit = todos.find(todo => todo.id === id);
    setInput(todoToEdit.text);
    setEditId(id);
  };
  

  return (
    <div className='app'>
      <h1>TO-Do-List</h1>
      <div className='input-container'>
        <input
          type='text'
          placeholder='Add a task'
          value={input}
          onChange={e => setInput(e.target.value)}
        />
        <button onClick={addTodo}>{editId ? 'Update' : 'Add'}</button>
      </div>
      <TodoList
        todos={todos}
        deleteTodo={deleteTodo}
        toggleTodo={toggleTodo}
        editTodo={startEditTodo}
      />
    </div>
  );
}

export default App;
