import React, { useState, useEffect } from 'react';
import '../style/Feed.css';
import QuickActions from './QuickActions';

const Feed = ({ searchTerm }) => {
  const [allOrders, setAllOrders] = useState([]);
  const [displayOrders, setDisplayOrders] = useState([]);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editingOrder, setEditingOrder] = useState(null);
  const [updatedOrderStatus, setUpdatedOrderStatus] = useState("");
  const [updatedTotalPrice, setUpdatedTotalPrice] = useState("");
  const [orderStatuses, setOrderStatuses] = useState([]);

  // Fetch all orders
  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:8081/api/orders/getAll');
      if (!response.ok) {
        throw new Error(`Request failed with status: ${response.status}`);
      }
      const data = await response.json();
  
      // Sort by order ID descending
      const sortedData = data.sort((a, b) => b.id - a.id);
  
      setAllOrders(sortedData);
      setDisplayOrders(sortedData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  

  // Fetch all order statuses
  const fetchOrderStatuses = async () => {
    try {
      const response = await fetch('http://localhost:8081/api/order-status/getAll');
      if (!response.ok) {
        throw new Error('Failed to fetch order statuses');
      }
      const data = await response.json();
      setOrderStatuses(data);
    } catch (error) {
      console.error('Error fetching order statuses:', error);
    }
  };

  // Run on component mount
  useEffect(() => {
    fetchData();
    fetchOrderStatuses();
  }, []);

  // Search filtering
  useEffect(() => {
    if (searchTerm) {
      setDisplayOrders(
        allOrders.filter(order =>
          order.customer.username.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
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

      // Remove order from state
      setAllOrders((prevOrders) => prevOrders.filter(order => order.id !== orderId));
      setDisplayOrders((prevOrders) => prevOrders.filter(order => order.id !== orderId));
    } catch (error) {
      console.error('Error deleting order:', error);
    }
  };

  const handleEditClick = (order) => {
    setEditingOrder(order);
    setUpdatedOrderStatus(order.orderStatus.id);
    setUpdatedTotalPrice(order.totalPrice);
    setShowEditModal(true);
  };

  const handleEditOrder = () => {
    const updatedOrder = {
      orderStatusId: updatedOrderStatus,
      totalPrice: parseFloat(updatedTotalPrice),
    };

    fetch(`http://localhost:8081/api/orders/update/${editingOrder.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedOrder),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to update the order');
        }
        return response.json();
      })
      .then(() => {
        fetchData(); // Refresh data after successful update
        setShowEditModal(false); // Close modal
      })
      .catch((error) => {
        console.error('Error updating order:', error);
      });
  };

  return (
    <div className="feed">
      <QuickActions />

      {displayOrders.map((order, index) => (
        <div className="feed-item" key={index}>
          <h2>Order ID: {order.id}</h2>
          <p>Customer: {order.customer.username}</p>
          <p>Status: {order.orderStatus.orderStatus}</p>
          <p>Date: {new Date(order.orderDate).toLocaleString()}</p>
          <p>Total Price: ${order.totalPrice.toFixed(2)}</p>
          <div className="buttons">
            <button onClick={() => handleEditClick(order)} className="edit-button">Edit</button>
            <button onClick={() => deleteOrder(order.id)} className="delete-button">Delete</button>
          </div>
        </div>
      ))}

      {showEditModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Edit Order</h2>
            <p>Customer: {editingOrder.customer.username}</p>

            <label>Status:</label>
            <select
              value={updatedOrderStatus}
              onChange={(e) => setUpdatedOrderStatus(e.target.value)}
            >
              <option value="">Select Status</option>
              {orderStatuses.length > 0 ? (
                orderStatuses.map((status) => (
                  <option key={status.id} value={status.id}>
                    {status.orderStatus}
                  </option>
                ))
              ) : (
                <option>No statuses available</option>
              )}
            </select>

            <label>Total Price:</label>
            <input
              type="number"
              value={updatedTotalPrice}
              onChange={(e) => setUpdatedTotalPrice(e.target.value)}
              placeholder="Enter total price"
            />

            <div className="modal-actions">
              <button onClick={handleEditOrder}>Save Changes</button>
              <button onClick={() => setShowEditModal(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Feed;
