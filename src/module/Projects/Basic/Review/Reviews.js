import React from 'react';
import { FaGithubSquare } from 'react-icons/fa'
import Review from './Review';

const Reviews = () => {
    return (
        <section>
            <div className="title">
                <h2>Our Reviews</h2>
                <div className="underlie"></div>
            </div>
            <Review/>
        </section>
    )
}
export default Reviews;