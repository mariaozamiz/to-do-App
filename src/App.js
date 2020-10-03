import React, { useState, useEffect } from 'react';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
    const [inputText, setInputText] = useState('');
    const [todos, setTodos] = useState([]);
    const [status, setStatus] = useState('all');
    const [filteredTodos, setFilteredTodos] = useState([]);

    useEffect(() => {
        filterHandler();
    }, [todos, status]);

    const filterHandler = () => {
        switch (status) {
            case 'completed':
                setFilteredTodos(
                    todos.filter((item) => item.completed === true)
                );
                break;
            case 'uncompleted':
                setFilteredTodos(
                    todos.filter((item) => item.completed === false)
                );
                break;
            default:
                setFilteredTodos(todos);
                break;
        }
    };

    return (
        <div className="App">
            <header>
                <h1>TO-DO LIST</h1>
            </header>
            <Form
                setInputText={setInputText}
                inputText={inputText}
                todos={todos}
                setTodos={setTodos}
                setStatus={setStatus}
            />
            <TodoList
                todos={todos}
                setTodos={setTodos}
                filteredTodos={filteredTodos}
            />
        </div>
    );
}

export default App;
