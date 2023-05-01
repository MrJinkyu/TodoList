import React, { useEffect, useState } from 'react';
import styles from './Greeting.module.css';

export default function Greeting() {
    const [name, setName] = useState(readName);
    const handleChange = (e) => {
        setName(e.target.value);
    }
    useEffect(()=>{
        localStorage.setItem('name',JSON.stringify(name));
    },[name]);
    return (
        <div className={styles.greeting}>
            <h2>Welcome,</h2>
            <input
                placeholder='Please your name'
                type='text'
                className={styles.text}
                value={name}
                onChange={handleChange}
            />
        </div>
    );
}

function readName(){
    const name = localStorage.getItem('name');
    return name ? JSON.parse(name) : '';
}

