import React from 'react';
import './code.css';

const Reviews = () => {
    const reviews = [
        {
            title: 'Efficient/Professional',
            content: '"Christopher is amazing! Very knowledgeable, professional and on time. Will use him again! :)."',
            author: 'Tess H. - 5/22/2022'
        },
        {
            title: 'Expert Support',
            content: '"Christopher was great. Helped me solve the issue quickly and made everything work again. Highly recommended."',
            author: 'Ryan C. - 9/14/2024'
        },
        {
            title: 'Excellent Service',
            content: '“Christopher figured out the issue, figured out a way to fix it, and saved us time and money."',
            author: 'Zulfi W. - 1/7/2023'
        }
    ];

    return (
        <section className="reviews"> 
            <h1>Satisfied Clients</h1>
            {reviews.map((review, index) => (
                <div key={index}>
                    <h2>{review.title}</h2>
                    <div className="stars">
                        <span>★</span>
                        <span>★</span>
                        <span>★</span>
                        <span>★</span>
                        <span>★</span>
                    </div>
                    <p>{review.content}</p>
                    <p>{review.author}</p>
                </div>
            ))}
        </section>
    );
}

export default Reviews;