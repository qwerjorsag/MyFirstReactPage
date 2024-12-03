import React, { useState } from 'react';
import NewsItem from '../Components/NewsItem'; // Adjust path as necessary
import newsData from '../Data/newsData.json'; // JSON file with news data
import './NewsPage.css';

const NewsPage: React.FC = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(5); // State for items per page

    // Calculate total number of pages
    const totalPages = Math.ceil(newsData.length / itemsPerPage);

    // Get the current page's news items
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentNews = newsData.slice(startIndex, startIndex + itemsPerPage);

    // Handle page change
    const handlePageChange = (page: number) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    // Handle items per page change
    const handleItemsPerPageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const newItemsPerPage = parseInt(event.target.value, 10);
        setItemsPerPage(newItemsPerPage);
        setCurrentPage(1); // Reset to the first page
    };

    return (
        <div className="news-page">
            <h1>novinky</h1>
            <div className="news-list">
                {currentNews.map((news) => (
                    <NewsItem
                        key={news.id}
                        title={news.title}
                        text={news.text}
                        date={news.date}
                        author={news.author}
                    />
                ))}
            </div>
            <div className="pagination-container">
                <div className="pagination">
                    <button
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="pagination-button"
                    >
                        Previous
                    </button>
                    {Array.from({length: totalPages}, (_, index) => (
                        <button
                            key={index}
                            onClick={() => handlePageChange(index + 1)}
                            className={`pagination-button ${
                                currentPage === index + 1 ? 'active' : ''
                            }`}
                        >
                            {index + 1}
                        </button>
                    ))}
                    <button
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className="pagination-button"
                    >
                        Next
                    </button>
                </div>

            </div>
            <div className="items-per-page">
                <label htmlFor="items-per-page">Items per page:</label>
                <select
                    id="items-per-page"
                    value={itemsPerPage}
                    onChange={handleItemsPerPageChange}
                >
                    <option value={5}>5</option>
                    <option value={10}>10</option>
                    <option value={20}>20</option>
                </select>
            </div>
        </div>
    );
};

export default NewsPage;
