import React, { useState, useEffect } from 'react';
import '../style/Feed.css';

const Feed = ({ searchTerm }) => {
    const [allOrders, setAllOrders] = useState([]); // State to hold all fetched orders
    const [displayOrders, setDisplayOrders] = useState([]); // State to hold orders to display

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:8081/api/orders/getAll');

                if (!response.ok) {
                    throw new Error(`Request failed with status: ${response.status}`);
                }

                const data = await response.json();
                setAllOrders(data);
                setDisplayOrders(data); // Initially display all orders
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        if (searchTerm) {
            // Filter orders based on search term
            setDisplayOrders(allOrders.filter(order => 
                order.customer.username.toLowerCase().includes(searchTerm.toLowerCase())
            ));
        } else {
            // Show all orders when search term is empty
            setDisplayOrders(allOrders);
        }
    }, [searchTerm, allOrders]);

    return (
        <div className="feed">
            {displayOrders.map((order, index) => (
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
