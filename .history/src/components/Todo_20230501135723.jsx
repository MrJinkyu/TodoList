import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';

export default function Todo({todo, onUpdate, onDelete}) {
    const { id, text, status } = todo;
    const handleChange = (e) => {
        const status = e.target.checked ? 'completed' : 'active';
        onUpdate({...todo, status});
    }
    return (
        <li>
            <input
                type="checkbox"
                name="checkbox"
                id={id}
                checked={status === 'completed'}
                onChange={handleChange}
            />
            <label htmlFor={id}>{text}</label>
            <span>
                <button onClick={() => onDelete(todo)}>
                    <FaTrashAlt/>
                </button>
            </span>
        </li>
    );
}

