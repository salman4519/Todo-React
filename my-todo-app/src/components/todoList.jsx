import React from 'react';
import TodoItem from './todoItem';

const TodoList = ({ todos, deleteTodo, toggleTodo, editTodo }) => {
    return (
        <ul className='todo-list'>
            {todos.map(todo => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    deleteTodo={deleteTodo}
                    toggleTodo={toggleTodo}
                    editTodo={editTodo} 
                />
            ))}
        </ul>
    );
};

export default TodoList;
