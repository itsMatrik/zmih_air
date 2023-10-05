import React, {useEffect, useState} from 'react';
import styles from './Slider.module.css';

function Slider(props) {

    const slides = [
        {
            url : 'https://sun9-76.userapi.com/impg/2vcqFxPziLnD80V1d3HhyjF_g69xKt9mOkhYwA/_B5HDFSlBxA.jpg?size=1500x1000&quality=95&sign=932193f82da7b83b23b93dce9e6160ee&type=album'
        },
        {
            url : 'https://sun9-45.userapi.com/impg/QD3k9qv86DxNkJZPWGuAbQuJkpm0h-CysgGWLQ/rKV5uA4P5fk.jpg?size=1024x658&quality=95&sign=2ac86e8184c347dd2b4c2517ad28e439&type=album'
        },
        {
            url : 'https://sun9-45.userapi.com/impg/2-ybrzOBbwbQfrSQLvMAco0af-fUhYaSPV4t5g/RoMGmjV4wjo.jpg?size=1600x1065&quality=95&sign=a57e6543aad96df471583342c422f5aa&type=album'
        },
        {
            url : 'https://sun9-77.userapi.com/impg/nvDSLn_ucS5EFroK3eE1zUjBsN-iRbLhXOpNlg/p9bXGKH2m60.jpg?size=1500x1000&quality=95&sign=9cc001aa2a9d59676357ae18ea0e026e&type=album'
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0)

    const prevHandler = function () {
        const isFirstSlide = currentIndex === 0
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex)
    }

    const nextHandler = function () {
         const isLastSlide = currentIndex === slides.length - 1;
         const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex)
    }

    return (
        <div>
            <div className={styles.h1}>Наши самолеты</div>
            <div className={styles.container}>
                <div style={{backgroundImage: `url(${slides[currentIndex].url})`}} className={styles.image}/>
                <img className={styles.arrowL} src={'arrowL.png'} onClick={prevHandler}/>
                <img className={styles.arrowR} src={'arrowR.png'} onClick={nextHandler}/>
            </div>
        </div>
    );
}

export default Slider;