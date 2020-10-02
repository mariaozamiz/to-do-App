import React, { useState } from 'react';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
    const [inputText, setInputText] = useState('');
    const [todos, setTodos] = useState([]);

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
            />
            <TodoList inputText={inputText} />
        </div>
    );
}

export default App;
