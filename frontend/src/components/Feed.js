import React, { useState, useEffect } from 'react';
import '../style/Feed.css';
import QuickActions from './QuickActions';

const Feed = ({ searchTerm }) => {
    const [allOrders, setAllOrders] = useState([]);
    const [displayOrders, setDisplayOrders] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:8081/api/orders/getAll');
                if (!response.ok) {
                    throw new Error(`Request failed with status: ${response.status}`);
                }

                const data = await response.json();
                setAllOrders(data);
                setDisplayOrders(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        if (searchTerm) {
            setDisplayOrders(allOrders.filter(order =>
                order.customer.username.toLowerCase().includes(searchTerm.toLowerCase())
            ));
        } else {
            setDisplayOrders(allOrders);
        }
    }, [searchTerm, allOrders]);

    const deleteOrder = async (orderId) => {
        try {
            const response = await fetch(`http://localhost:8081/api/orders/delete/${orderId}`, {
                method: 'DELETE',
            });

            if (!response.ok) {
                throw new Error(`Failed to delete order with ID: ${orderId}`);
            }

            setAllOrders((prevOrders) => prevOrders.filter(order => order.id !== orderId));
            setDisplayOrders((prevOrders) => prevOrders.filter(order => order.id !== orderId));
        } catch (error) {
            console.error('Error deleting order:', error);
        }
    };

    // Refresh feed when a new order is added
    const refreshFeed = () => {
        fetch('http://localhost:8081/api/orders/getAll')
            .then((response) => response.json())
            .then((data) => {
                setAllOrders(data);
                setDisplayOrders(data);
            })
            .catch((error) => console.error('Error refreshing feed:', error));
    };

    return (
        <div className="feed">
            <QuickActions refreshFeed={refreshFeed} /> {/* Pass refreshFeed as a prop */}
            {displayOrders.map((order, index) => (
                <div className="feed-item" key={index}>
                    <h2>Order ID: {order.id}</h2>
                    <p>Customer: {order.customer.username}</p>
                    <p>Status: {order.orderStatus.orderStatus}</p>
                    <p>Date: {new Date(order.orderDate).toLocaleString()}</p>
                    <p>Total Price: ${order.totalPrice.toFixed(2)}</p>
                    <button onClick={() => deleteOrder(order.id)} className="delete-button">Delete</button>
                </div>
            ))}
        </div>
    );
};

export default Feed;
