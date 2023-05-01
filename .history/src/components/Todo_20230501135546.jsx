import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';

export default function Todo({todo, onUpdate, onDelete}) {
    const { id, text, status } = todo;
    return (
        <li>
            <input
                type="checkbox"
                name="checkbox"
                id={id}
                checked={status === 'completed'}
            />
            <label htmlFor={id}>{text}</label>
            <span>
                <button>
                    <FaTrashAlt/>
                </button>
            </span>
        </li>
    );
}

