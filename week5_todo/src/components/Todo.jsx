import React, { useState } from 'react';
import addIcon from '../assets/img/Vector.png';
import delIcon from '../assets/img/x.png';

const Todo = () => {
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState("");

    const handleAdd = () => {
        if (inputValue.trim() === "") {
            alert('내용을 입력해 주세요');
            return;
        }
        const newTodo = {
            id: Date.now(),
            text: inputValue,
            checked: false
        };
        setTodos([...todos, newTodo]);
        setInputValue("");
    };

    const handleToggle = (id) => {
        setTodos(todos.map(todo => 
            todo.id === id ? { ...todo, checked: !todo.checked } : todo
        ));
    };

    const handleDelete = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    return (
        <div className="wrap">
            <header>
                <h1>TO-DO LIST</h1>
                <div className="add">
                    <input 
                        type="text" 
                        placeholder="오늘 할 일을 입력해주세요!" 
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && handleAdd()}
                    />
                    <button onClick={handleAdd}>
                        <img src={addIcon} alt="add list" />
                    </button>
                </div>
            </header>

            <main>
                {todos.map(todo => (
                    <div className="list" key={todo.id}>
                        <div className="leftBox">
                            <input 
                                type="checkbox" 
                                className="checkBox"
                                checked={todo.checked}
                                onChange={() => handleToggle(todo.id)}
                            />
                            <p className="todoText" style={{ textDecoration: todo.checked ? 'line-through' : 'none' }}>
                                {todo.text}
                            </p>
                        </div>
                        <button className="removeBtn" onClick={() => handleDelete(todo.id)}>
                            <img src={delIcon} alt="deletebtn" />
                        </button>
                    </div>
                ))}
            </main>
        </div>
    );
};

export default Todo;