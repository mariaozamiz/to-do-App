import React from 'react';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
    return (
        <div className="App">
            <header>
                <h1>TO-DO LIST</h1>
            </header>
            <Form />
            <TodoList />
        </div>
    );
}

export default App;
