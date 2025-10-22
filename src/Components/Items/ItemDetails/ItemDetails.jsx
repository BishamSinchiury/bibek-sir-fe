// src/Components/Items/ItemDetails/ItemDetails.js
import React, { useState } from 'react';
import styles from '@/Pages/Inventory/Inventory.module.css';
import { FaArrowLeft, FaSave, FaTimes, FaEdit, FaTrash, FaShoppingCart, FaDollarSign, FaInfoCircle, FaCalendarAlt, FaPalette, FaRuler, FaWeightHanging } from 'react-icons/fa';

const ItemDetails = ({ item, onBack, onSave, onDelete, onViewPurchases, onViewSales }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedItem, setEditedItem] = useState({ ...item });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedItem((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    onSave(editedItem);
    setIsEditing(false);
  };

  return (
    <div className={styles.itemDetails}>
      <img src={item.photo} alt={item.name} />
      <h2>{item.name}</h2>

      {isEditing ? (
        <>
          <p>
            <FaInfoCircle />
            <strong>Description:</strong>
            <input
              type="text"
              name="description"
              value={editedItem.description}
              onChange={handleInputChange}
            />
          </p>
          <p>
            <FaShoppingCart />
            <strong>In-Stock Quantity:</strong>
            <input
              type="number"
              name="quantity"
              value={editedItem.quantity || ''}
              onChange={handleInputChange}
            />
          </p>
          <p>
            <FaDollarSign />
            <strong>Price:</strong>
            <input
              type="text"
              name="price"
              value={editedItem.price}
              onChange={handleInputChange}
            />
          </p>
          <p>
            <FaCalendarAlt />
            <strong>Expiration Date:</strong>
            <input
              type="text"
              name="expDate"
              value={editedItem.expDate}
              onChange={handleInputChange}
            />
          </p>
          <p>
            <FaPalette />
            <strong>Color:</strong>
            <input
              type="text"
              name="color"
              value={editedItem.color || ''}
              onChange={handleInputChange}
            />
          </p>
          <p>
            <FaRuler />
            <strong>Size:</strong>
            <input
              type="text"
              name="size"
              value={editedItem.size || ''}
              onChange={handleInputChange}
            />
          </p>
          <p>
            <FaWeightHanging />
            <strong>Weight:</strong>
            <input
              type="text"
              name="weight"
              value={editedItem.weight || ''}
              onChange={handleInputChange}
            />
          </p>
          <div className={styles.buttonContainer}>
            <button onClick={handleSave}>
              <FaSave /> Save
            </button>
            <button onClick={() => setIsEditing(false)}>
              <FaTimes /> Cancel
            </button>
          </div>
        </>
      ) : (
        <>
          <p><FaInfoCircle /><strong>Description:</strong> {item.description}</p>
          <p><FaShoppingCart /><strong>In-Stock Quantity:</strong> {item.quantity || 'N/A'}</p>
          <p><FaDollarSign /><strong>Price:</strong> ${item.price}</p>
          <p><FaCalendarAlt /><strong>Expiration Date:</strong> {item.expDate}</p>
          <p><FaPalette /><strong>Color:</strong> {item.color || 'N/A'}</p>
          <p><FaRuler /><strong>Size:</strong> {item.size || 'N/A'}</p>
          <p><FaWeightHanging /><strong>Weight:</strong> {item.weight || 'N/A'}</p>
          <div className={styles.buttonContainer}>
            <button onClick={onBack}>
              <FaArrowLeft /> Back to Inventory
            </button>
            <button onClick={onViewPurchases}>
              <FaShoppingCart /> View Purchases
            </button>
            <button onClick={onViewSales}>
              <FaDollarSign /> View Sales
            </button>
            <button onClick={() => setIsEditing(true)}>
              <FaEdit /> Edit
            </button>
            <button className={styles.delete} onClick={onDelete}>
              <FaTrash /> Delete
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default ItemDetails;