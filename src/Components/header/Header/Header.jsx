import React from 'react';
import Logo from "../../Logos/Logo/Logo";
import styles from './Header.module.css';

function Header(props) {
    return (
        <div className={styles.root}>
            <Logo/>
            <div>
                <img src={'Vk.png'} width={70} height={50}/>
                <img src={'inst.png'} width={50} height={50}/>
            </div>
        </div>
    );
}

export default Header;