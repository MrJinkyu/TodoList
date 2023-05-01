import React, { useEffect, useState } from 'react';
import styles from './Greeting.module.css';

export default function Greeting() {
    const [name, setName] = useState('');
    const handleChange = (e) => {
        setName(e.target.value);
    }
    // useEffect(()=>{

    // },[]);
    return (
        <div className={styles.greeting}>
            <h2>Welcome,</h2>
            <input
                type='text'
                className={styles.text}
                value={name}
                onChange={handleChange}
            />
        </div>
    );
}

