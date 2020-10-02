import React from 'react';

function Form({ setInputText, inputText, todos, setTodos }) {
    const inputTextHandler = (ev) => {
        setInputText(ev.target.value);
    };
    const submitTodoHandler = (ev) => {
        ev.preventDefault();
        if (inputText.length > 0) {
            setTodos([
                ...todos,
                { text: inputText, completed: false, id: Math.random() * 1000 },
            ]);
        }
    };
    return (
        <form>
            <input
                type="text"
                className="todo-input"
                onChange={inputTextHandler}
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
