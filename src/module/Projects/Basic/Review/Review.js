import React, { useState } from 'react';
import people from '../../../../assets/data/review.data';
import { FaChevronRight, FaChevronLeft, FaQuoteRight } from 'react-icons/fa'

const Review = () => {
    const [index, setIndex] = useState(0);
    const { name, job, image, text } = people[index];

    const checkValidIndex = (newIndex) => {
        if (newIndex < 0) return people.length - 1;
        if (newIndex <= people.length - 1) return newIndex;
        if (newIndex > people.length - 1) return 0;
    }

    const prevPerson = () => {
        setIndex(index => {
            let newIndex = index - 1;
            newIndex = checkValidIndex(newIndex);
            return newIndex;
        })
    }

    const nextPerson = () => {
        setIndex(index => {
            let newIndex = index + 1;
            newIndex = checkValidIndex(newIndex);
            console.log(newIndex);
            return newIndex;
        })
    }

    const surpriseMe = () => {
        let randomNumber = Math.floor(Math.random() * people.length);
        console.log(randomNumber);
        if (randomNumber === index) {
            randomNumber = index + 1;
            setIndex(checkValidIndex(index));
        }
        setIndex(checkValidIndex(randomNumber));

    }

    return (
        <article className="review">
            <div className="img-container">
                <img src={image} alt={name} className="person-img" />
                <span className="quote-icon">
                    <FaQuoteRight />
                </span>
            </div>
            <h4 className='author'>{name}</h4>
            <p className='job'>{job}</p>
            <p className='info'>{text}</p>
            <div className="button-container">
                <button className='prev-btn' onClick={prevPerson}>
                    <FaChevronLeft />
                </button>
                <button className='next-btn' onClick={nextPerson}>
                    <FaChevronRight />
                </button>
            </div>
            <button className='btn' onClick={surpriseMe}>Surprise Me!</button>
        </article>
    );
}
export default Review;