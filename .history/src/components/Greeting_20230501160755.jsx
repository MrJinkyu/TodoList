import React from 'react';
import styles from './Greeting.module.css';

export default function Greeting() {
    return (
        <h2 className={styles.greeting}>
            Welcome, <span className={styles.name}></span>
        </h2>
    );
}

