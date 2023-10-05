import React, {useEffect, useState} from 'react';
import styles from './Slider.module.css';

function Slider(props) {

    const slides = [
        {
            src : 'susem.jpg'
        },
        {
            src : 'tushka.jpg'
        },
        {
            src : 'mivosem.jpg'
        },
        {
            src : 'a380.jpg'
        }
    ];

    const prevHandler = function () {

    }

    const nextHandler = function () {
        console.log('next')
    }

    return (
        <div>
            <div className={styles.h1}>Наши самолеты</div>
            <div className={styles.container}>
                <div className={styles.slider}>
                    <div className={styles.sliderLine}>
                        <img className={styles.image} id={'image'} src={'susem.jpg'}/>
                        <img className={styles.image} id={'image'} src={'tushka.jpg'}/>
                        <img className={styles.image} id={'image'} src={'mivosem.jpg'}/>
                        <img className={styles.image} id={'image'} src={'a380.jpg'}/>
                    </div>
                    <img className={styles.arrowL} src={'arrowL.png'} onClick={prevHandler}/>
                    <img className={styles.arrowR} src={'arrowR.png'} onClick={nextHandler}/>
                </div>
            </div>
        </div>
    );
}

export default Slider;