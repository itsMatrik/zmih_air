import React from 'react';
import styles from './Companies.module.css';

function Companies({image, text, textTwo}) {
    return (
        <div className={styles.root}>
            <img className={styles.image} src={image}/>
            <div className={styles.text}>{text}</div>
            <div className={styles.text2}>{textTwo}</div>
        </div>
    );
}

export default Companies;