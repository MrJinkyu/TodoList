import React, { useState } from 'react';
import {v4 as uuidv4} from 'uuid';

export default function TodoList() {
    const [todos, setTodos] = useState([
        { id: uuidv4(), text: '장보기', status: 'active' },
        { id: uuidv4(), text: '공부하기', status: 'active' }
    ]);

    return (
        <section>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>{todo.text}</li>
                ))}
            </ul>
        </section>
    );
}

