import React from 'react';
import Todo from './Todo';

function TodoList({ todos, setTodos }) {
    return (
        <div className="todo-container">
            <ul className="todo-list">
                {todos.map((todo) => (
                    <Todo
                        todos={todos}
                        todo={todo}
                        setTodos={setTodos}
                        key={todo.id}
                        text={todo.text}
                        completed={todo.completed}
                    />
                ))}
            </ul>
        </div>
    );
}

export default TodoList;
