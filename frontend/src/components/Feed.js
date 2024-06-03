import React, { useState, useEffect } from 'react';
import '../style/Feed.css';

const Feed = () => {
    const [feedData, setFeedData] = useState([]); // State to hold the fetched data

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:8081/api/orders/getAll');

                // Check if the response status is in the 200 range (i.e., successful)
                if (!response.ok) {
                    throw new Error(`Request failed with status: ${response.status}`);
                }

                // Parse the response body as JSON
                const data = await response.json();

                // Update the feed data state with the fetched data
                setFeedData(data);
            } catch (error) {
                // Handle any errors that occur during the fetch operation
                console.error('Error fetching data:', error);
            }
        };

        fetchData(); // Call the fetch data function
    }, []); // Empty dependency array ensures useEffect only runs once, on component mount

    return (
        <div className="feed">
            {feedData.map((order, index) => (
                <div className="feed-item" key={index}>
                    <h2>Order ID: {order.id}</h2>
                    <p>Customer: {order.customer.username}</p>
                    <p>Status: {order.orderStatus.orderStatus}</p>
                    <p>Date: {new Date(order.orderDate).toLocaleString()}</p>
                    <p>Total Price: ${order.totalPrice.toFixed(2)}</p>
                </div>
            ))}
        </div>
    );
};

export default Feed;
