import React from 'react';
import styles from './Main.module.css';
import BigLogo from "../Logos/BigLogo/BigLogo";

function Main(props) {
    return (
        <div className={styles.root}>
            <div className={styles.container}>
                <div className={styles.ramka}>
                    <div className={styles.firstText}>Авиакомпания</div>
                    <div className={styles.secondText}>ЖМЫХ AIRLINES</div>
                    <div className={styles.thirdText}>Не важно как, не важно где.Главное - вместе!</div>
                </div>
                <button className={styles.button}>ЗАКАЗАТЬ БИЛЕТ</button>
            </div>
            <BigLogo/>
        </div>
    );
}

export default Main;