import React from 'react';
import styles from './Input.module.css';

function Input(props) {
    return (
        <div className={styles.root}>
            <div className={styles.h1}>ЗАКАЖИ БИЛЕТ ПРЯМО СЕЙЧАС!</div>
            <div className={styles.container}>
                <div className={styles.h2}>Введите свои данные</div>
                <input type={'text'} placeholder={"ФИО"} className={styles.input}/>
                <input type={'text'} placeholder={"Номер Телефона"} className={styles.input}/>
                <button className={styles.button}>ЗАКАЗАТЬ!</button>
            </div>
        </div>
    );
}

export default Input;