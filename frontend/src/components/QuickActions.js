import React, { useState, useEffect } from 'react';
import '../style/QuickActions.css';

const QuickActions = ({ refreshFeed }) => { // Receive the refreshFeed callback from parent component
    const [showModal, setShowModal] = useState(false);
    const [orderStatuses, setOrderStatuses] = useState([]);
    const [users, setUsers] = useState([]);
    const [selectedStatus, setSelectedStatus] = useState("");
    const [selectedUser, setSelectedUser] = useState("");
    const [totalPrice, setTotalPrice] = useState("");
    const [loading, setLoading] = useState(false);
    const [confirmationMessage, setConfirmationMessage] = useState("");

    // Fetch order statuses and users
    useEffect(() => {
        const fetchOrderStatuses = async () => {
            try {
                const response = await fetch('http://localhost:8081/api/order-status/getAll');
                const data = await response.json();
                setOrderStatuses(data);
            } catch (error) {
                console.error("Failed to fetch order statuses", error);
            }
        };

        const fetchUsers = async () => {
            try {
                const response = await fetch('http://localhost:8081/api/users/getAll');
                const data = await response.json();
                setUsers(data);
            } catch (error) {
                console.error("Failed to fetch users", error);
            }
        };

        fetchOrderStatuses();
        fetchUsers();
    }, []);

    const handleAddOrder = () => {
        const newOrder = {
            customerId: selectedUser,
            orderStatusId: selectedStatus,
            totalPrice: parseFloat(totalPrice),
        };

        setLoading(true);
        setConfirmationMessage(""); // Clear any previous message
    
        fetch("http://localhost:8081/api/orders/add", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newOrder),
        })
        .then((res) => {
            if (!res.ok) {
                return res.text().then((errorText) => {
                    throw new Error(`Failed to add order: ${errorText}`);
                });
            }
            return res.text();
        })
        .then(() => {
            setConfirmationMessage("Order added successfully!");
            setLoading(false);
            setShowModal(false);
            setTotalPrice("");
            setSelectedUser("");
            setSelectedStatus("");
            refreshFeed(); // Call the refreshFeed function to refresh the orders in Feed
        })
        .catch((err) => {
            console.error("Error adding order:", err);
            setLoading(false);
            setConfirmationMessage("Failed to add order. Please try again.");
        });
    };

    return (
        <div className="quick-actions">
            <button onClick={() => setShowModal(true)}>Quick Actions</button>

            {showModal && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <h2>Add New Order</h2>

                        {/* Customer Dropdown */}
                        <label>Customer:</label>
                        <select value={selectedUser} onChange={(e) => setSelectedUser(e.target.value)}>
                            <option value="">Select Customer</option>
                            {users.map((user) => (
                                <option key={user.id} value={user.id}>
                                    {user.username}
                                </option>
                            ))}
                        </select>

                        {/* Status Dropdown */}
                        <label>Status:</label>
                        <select value={selectedStatus} onChange={(e) => setSelectedStatus(e.target.value)}>
                            <option value="">Select Status</option>
                            {orderStatuses.map((status) => (
                                <option key={status.id} value={status.id}>
                                    {status.orderStatus}
                                </option>
                            ))}
                        </select>

                        {/* Price Input */}
                        <label>Total Price:</label>
                        <input
                            type="number"
                            value={totalPrice}
                            onChange={(e) => setTotalPrice(e.target.value)}
                            placeholder="Enter total price"
                        />

                        {/* Confirmation Message */}
                        {confirmationMessage && <p className="confirmation-message">{confirmationMessage}</p>}

                        {/* Modal Actions */}
                        <div className="modal-actions">
                            <button onClick={handleAddOrder} disabled={loading}>
                                {loading ? "Adding Order..." : "Add Order"}
                            </button>
                            <button onClick={() => setShowModal(false)}>Cancel</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default QuickActions;
