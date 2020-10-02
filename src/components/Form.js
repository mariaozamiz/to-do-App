import React from 'react';

function Form({ setInputText, inputText, todos, setTodos }) {
    const inputTextHandler = (ev) => {
        setInputText(ev.target.value);
    };
    const submitTodoHandler = (ev) => {
        ev.preventDefault();
        setTodos([
            ...todos,
            {
                text: inputText,
                completed: false,
                id: Math.floor(Math.random() * 1000),
            },
        ]);
        setInputText('');
    };
    return (
        <form>
            <input
                type="text"
                className="todo-input"
                onChange={inputTextHandler}
                value={inputText}
            />
            <button
                className="todo-button"
                type="submit"
                onClick={submitTodoHandler}
            >
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select name="todos" className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    );
}

export default Form;
