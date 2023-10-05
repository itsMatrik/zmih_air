import React from 'react';
import styles from './BigLogo.module.css';

function BigLogo(props) {
    return (
        <img src={'logo.jpg'} className={styles.root}/>
    );
}

export default BigLogo;