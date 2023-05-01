import React, { useState } from 'react';

export default function AddTodo({onAdd}) {
    const [text, setText] = useState('');
    const handleChange = (e) => {
        setText(e.target.value);
    }
    return (
        <form>
            <input
                type="text"
                value={text}
                onChange={handleChange}
                placeholder='Add Todo'
            />
            <button>Add</button>
        </form>
    );
}

