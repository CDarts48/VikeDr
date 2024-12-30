import React from 'react';
import './code.css';

const Reviews = () => {
    const reviews = [
        {
            title: 'Efficient/Professional',
            content: '"Christopher was super professional. He showed up on time and completed all the jobs efficiently. I’d hire him again!"',
            author: 'Mary Beth D. - 9/18/2024'
        },
        {
            title: 'Expert Support',
            content: '"Christopher was great. Helped me solve the issue quickly and made everything work again. Highly recommended."',
            author: 'Ryan C. - 9/14/2024'
        },
        {
            title: 'Excellent Service',
            content: '“On time, super helpful, and appreciated that he consulted with me prior to setting the appointment to make sure we were clear on exactly what work I needed and what parts would be required."',
            author: 'Julia K. - 8/16/2024'
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