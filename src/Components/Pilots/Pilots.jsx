import React from 'react';
import styles from './Pilots.module.css';

function Pilots({image, name, specialization}) {

    return (
        <div className={styles.root}>
            <img className={styles.image} src={image}/>
            <div className={styles.container}>
                <div className={styles.name}>{name}</div>
                <div className={styles.specialization}>{specialization}</div>
            </div>
        </div>
    );
}

export default Pilots;