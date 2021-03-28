import React from 'react';
import { useParams } from 'react-router-dom';
import BirthdayReminder from './BirthdayReminder/BirthdayReminder';
import Tours from './Tours/Tours';
import Reviews from './Review/Reviews';
import Accordion from './Accordion/Accordion';
import Menu from './Menu/Menu';
import Menu from './Tab/Tabs';

const BasicDetail = () => {
    const { id } = useParams();
    return (
        <>
            <h1>Basic Detail</h1>
            <div>
                {getMarkup(id)}
            </div>
        </>
    )
}

const getMarkup = (id) => {
    let markup = ''
    switch (id) {
        case '0':
            markup = <BirthdayReminder />
            break;
        case '1':
            markup = <Tours />
            break;
        case '2':
            markup = <Reviews />
            break;
        case '3':
            markup = <Accordion />
            break;
        case '4':
            markup = <Menu />
            break;
        case '5':
            markup = <Tabs />
            break;
        default:
            <p>No project exists</p>
    }
    return markup;
}
export default BasicDetail; 