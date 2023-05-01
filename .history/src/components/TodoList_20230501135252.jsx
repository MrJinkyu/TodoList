import React, { useState } from 'react';
import {v4 as uuidv4} from 'uuid';
import AddTodo from './AddTodo';
import Todo from './Todo';

export default function TodoList() {
    const [todos, setTodos] = useState([
        { id: uuidv4(), text: '장보기', status: 'active' },
        { id: uuidv4(), text: '공부하기', status: 'active' }
    ]);
    const handleAdd = (todo) => {
        setTodos([...todos, todo]);
    }
    const handleUpdate = (updated) => {
        setTodos(todos.map((todo) => todo.id === updated.id ? updated : todo));
    }
    const handleDelete = (deleted) => {
        setTodos(todos.filter((todo) => todo.id !== deleted.id));
    }
    return (
        <section>
            <ul>
                {todos.map((item) => (
                    <Todo
                        key={item.id}
                        todo={item}
                        onUpdate={handleUpdate}
                        onDelete={handleDelete}
                    />
                ))}
            </ul>
            <AddTodo onAdd={handleAdd}/>
        </section>
    );
}

