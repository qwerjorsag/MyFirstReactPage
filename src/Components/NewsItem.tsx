import React, { useEffect, useRef, useState } from 'react';
import './NewsItem.css';

interface NewsItemProps {
    title: string;
    text: string;
    date: string;
    author: string;
}

const NewsItem: React.FC<NewsItemProps> = ({ title, text, date, author }) => {
    const newsItemRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            {
                root: null, // Uses the viewport as the container
                threshold: 0.2, // Trigger when 20% of the element is visible
            }
        );

        if (newsItemRef.current) {
            observer.observe(newsItemRef.current);
        }

        return () => {
            if (newsItemRef.current) {
                observer.unobserve(newsItemRef.current);
            }
        };
    }, []);

    return (
        <div
            ref={newsItemRef}
            className={`news-item ${isVisible ? 'visible' : ''}`}
        >
            <h2 className="news-title">{title}</h2>
            <p className="news-text">{text}</p>
            <p className="news-date">Date: {date}</p>
            <p className="news-author">Author: {author}</p>
        </div>
    );
};

export default NewsItem;
