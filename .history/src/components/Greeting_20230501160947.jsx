import React, { useEffect } from 'react';
import styles from './Greeting.module.css';

export default function Greeting() {
    const [name, setName] = ('');
    useEffect(()=>{

    },[]);
    return (
        <>
        <h2 className={styles.greeting}>
            Welcome, <input type='text'></input>
        </h2>
        </>
    );
}

