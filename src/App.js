import './App.module.css';
import styles from './App.module.css';
import Header from "./Components/header/Header/Header";
import Main from "./Components/Main/Main";
import Slider from "./Components/Slider/Slider";
import Pilots from "./Components/Pilots/Pilots";
import React from "react";
import Companies from "./Components/Companies/Companies";
import Input from "./Components/Input/Input";
import Contacts from "./Components/Contacts/Contacts";

function App() {

    const pilots = [
        {
            'name': 'Змеев Степан',
            'specialization': 'Старший пилот',
            'image': 'https://sun9-60.userapi.com/impg/zWIl18uJLHskCjhquTI1fh77B6lIa_S7Re5P_w/ZWn8ZBJxLI0.jpg?size=997x531&quality=95&sign=e090e823750f4bdb231996f994ae841c&type=album'
        },
        {
            'name': 'Жмыщенко Вячеслав',
            'specialization': 'Младший пилот',
            'image': 'https://sun9-38.userapi.com/impg/8B5zb4CGNXfyDCarS9jPGCK_AU8q6ZAP39_ltA/X0OLWkeG2tM.jpg?size=807x807&quality=95&sign=2746451cdc589499682f30ebb3b5be03&type=album'
        },
        {
            'name': 'Котов Михаил',
            'specialization': 'Пилот-Инжинер',
            'image': 'https://sun9-47.userapi.com/impg/gKm0yD9TslhUmjvGirA16mEVQiKm_xQYt1-ODQ/uroqfxKBd7I.jpg?size=807x605&quality=95&sign=62d1967a6405f32b9b518471f982252c&type=album'
        },
        {
            'name': 'Саня',
            'specialization': 'К нему ко всем проблемам',
            'image': 'https://sun9-47.userapi.com/impg/gwTIIj0MVsrBn_el25iGEhc8DFlW_NFmpsBZSQ/C6x04PAbCDE.jpg?size=900x900&quality=95&sign=037f9122f164ff9d90cb0ea2de787918&type=album'
        }
    ]

    const images =  [
        {
            'image': 'https://sun9-54.userapi.com/impg/eGwaSNqNEZDZ7ZuRb2aDlVz3nd8KZVtR5bVinA/inzmSJTf6Lc.jpg?size=94x100&quality=95&sign=114f2e94ddc847f1a0d52221298ae6ca&type=album',
            'text' : 'Emirates Airlines',
            'text2' : 'Авиакомпания-сотрудник'
        },
        {
            'image': 'https://sun9-43.userapi.com/impg/leAGs2RgXNbU0ZiJ2ECmZoSCsABoPoiM5pguyg/iqHbJ34sMTA.jpg?size=2272x857&quality=95&sign=db068347550fee1458d0ece34db31c51&type=album',
            'text' : 'The Boeing Company',
            'text2' : 'Поставщик пассажирских самолетов'
        },
        {
            'image': 'https://sun9-66.userapi.com/impg/VNfAAQtKTBbHlSMdfSG1sYAht_NtbpE-9Ap3vA/XWtXn55N_eM.jpg?size=2400x2400&quality=95&sign=1a7c5d093414b73d58a541cef2cd6848&type=album',
            'text' : 'Airbus SE',
            'text2' : 'Поставщик грузовых самолетов'
        },
        {
            'image': 'https://sun9-6.userapi.com/impg/kD6vBH5CgK5wIpo8Tu4sbB3w1mu-8wdvlkitjg/dBNRNeDO3DI.jpg?size=200x185&quality=95&sign=99b879328eaaca06b9d0e483ef85653e&type=album',
            'text' : 'Royal Dutch Shell',
            'text2' : 'Поставщик авиационного топлива'
        },
        {
            'image': 'https://sun9-71.userapi.com/impg/8jBEfH_KAUIPr3uYo72KESDlgpMxE26GMsBbRA/wijWqlZDhvE.jpg?size=1600x1600&quality=95&sign=813f5e99a7f22a7d08e5ec2b7ab9f88d&type=album',
            'text' : 'Lamborghini',
            'text2' : 'Основной потребитель авиагрузовых перевозок'
        },
        {
            'image': 'https://sun9-4.userapi.com/impg/DriFyjkNWA1MHMET-45q6dZA6ENk43rKu6yUeA/zMRLxbbhI5c.jpg?size=95x79&quality=95&sign=501d954c4b82ee1d70c7601f03c5da0b&type=album',
            'text' : 'Иркутский авиационный завод',
            'text2' : 'Ремонт и обслуживание самолетов'
        }
    ]

    return (
        <div className={styles.app}>
            <div className={styles.container}>
                <Header/>
                <Main/>
                <Slider/>
                <div>
                    <h2 className={styles.pilots}>Наши пилоты</h2>
                    {pilots.map(function (pilot) {
                        return <Pilots name={pilot.name} specialization={pilot.specialization} image={pilot.image}/>
                    })}
                </div>
                <div>
                    <h2 className={styles.pilots}>Наши партнеры</h2>
                    <div className={styles.companiesContainer}>
                        {images.map(function (company) {
                            return <Companies image={company.image} text={company.text} textTwo={company.text2}/>
                        })}
                    </div>
                </div>
                <Input/>
                <Contacts/>
                <div className={styles.allRights} >© 2023 Все права ЖМЫХ Эирлейнс не защищены</div>
            </div>
        </div>
    );
}

export default App;
