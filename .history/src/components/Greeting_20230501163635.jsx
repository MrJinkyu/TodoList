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
    const handleShow = () => {
        setTimeout(()=>{
            const greeting = document.querySelector('.greeting');
            greeting.style.opacity = 1;
        },1000);
    }
    return (
        <div className={styles.greeting} onLoad={() => handleShow()}>
            <h2>Welcome,</h2>
            <input
                placeholder='your name'
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

