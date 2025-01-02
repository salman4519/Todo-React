import React from 'react';

const TodoItem = ({ todo, deleteTodo, toggleTodo, editTodo }) => {
    return (
        <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
            <span onClick={() => toggleTodo(todo.id)}>{todo.text}</span>
            <button onClick={() => editTodo(todo.id)}>Edit</button>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
        </li>
    );
};

export default TodoItem;
