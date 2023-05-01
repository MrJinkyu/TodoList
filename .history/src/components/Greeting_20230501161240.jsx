import React, { useEffect } from 'react';
import styles from './Greeting.module.css';

export default function Greeting() {
    const [name, setName] = ('');
    const handleChange = (e) => {
        setName(e.target.value);
    }
    useEffect(()=>{

    },[]);
    return (
        <>
        <h2 className={styles.greeting}>Welcome,</h2>
        <input
                type='text'
                className={styles.text}
                value={name}
                onChange={handleChange}
            />
        </>
    );
}

