import React, { useEffect, useState } from 'react';
import {v4 as uuidv4} from 'uuid';
import AddTodo from './AddTodo';
import Todo from './Todo';
import styles from './TodoList.module.css';

export default function TodoList({filter}) {
    const [todos, setTodos] = useState(readTodo);
    const handleAdd = (todo) => {
        setTodos([...todos, todo]);
    }
    const handleUpdate = (updated) => {
        setTodos(todos.map((todo) => todo.id === updated.id ? updated : todo));
    }
    const handleDelete = (deleted) => {
        setTodos(todos.filter((todo) => todo.id !== deleted.id));
    }
    const filtered = getFilteredItems(todos, filter);

    useEffect(()=>{
        localStorage.setItem('todos',JSON.stringify(todos));
    },[todos]);
    return (
        <section className={styles.container}>
            <ul className={styles.list}>
                {filtered.map((item) => (
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

function getFilteredItems(todos, filter){
    if(filter === 'all'){
        return todos;
    }
    return todos.filter((todo) => todo.status === filter);
}

function readTodo(){
    const todos = localStorage.getItem('todos');
    return todos ? JSON.parse(todos) : [];
}