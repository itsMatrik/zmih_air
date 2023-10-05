import React from 'react';
import styles from './Contacts.module.css';

function Contacts(props) {
    return (
        <div className={styles.root}>
            <div className={styles.container}>
                <div className={styles.first}>Контактный телефон</div>
                <div className={styles.second}>+375299900448</div>
            </div>
            <div className={styles.container}>
                <div className={styles.first}>Почта</div>
                <div className={styles.second} >itsmatrik@gmail.com</div>
            </div>
        </div>
    );
}

export default Contacts;