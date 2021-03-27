import React from 'react';
import { useParams } from 'react-router-dom';
import BirthdayReminder from './BirthdayReminder/BirthdayReminder';
import Tours from './Tours/Tours';

const BasicDetail = () => {
    const { id } = useParams();
    return (
        <>
            <h1>Basic Detail</h1>
            <div>            
            { getMarkup(id)}
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
        default:
            <p>No project exists</p>
    }
    return markup;
}
export default BasicDetail; 