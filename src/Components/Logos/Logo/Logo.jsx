import React from 'react';
import styles from './Logo.module.css';

function Logo(props) {
    return (
        <img src={'logo.jpg'} className={styles.root}/>
    );
}

export default Logo;