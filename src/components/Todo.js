import React from 'react';

function Todo({ text, todos, todo, setTodos }) {
    const completeBtnHandler = () => {
        console.log('tarea completada');
    };
    const TrashBtnHandler = () => {
        setTodos(todos.filter((element) => element.id !== todo.id));
    };

    return (
        <div className="todo">
            <li className="todo-item">{text}</li>
            <button className="complete-btn" onClick={completeBtnHandler}>
                <i className="fas fa-check"></i>
            </button>
            <button className="trash-btn" onClick={TrashBtnHandler}>
                <i className="fas fa-trash"></i>
            </button>
        </div>
    );
}

export default Todo;
