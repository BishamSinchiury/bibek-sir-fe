// src/Components/Inventory/Inventory.js
import React, { useState } from 'react';
import ItemCard from '@/Components/Items/ItemsCard/ItemCard';
import ItemDetails from '@/Components/Items/ItemDetails/ItemDetails';
import styles from './Inventory.module.css';

const Inventory = () => {
  const [items, setItems] = useState(
    Array(7).fill({
      photo: 'https://i.pinimg.com/1200x/4c/28/e2/4c28e2420bf38c50120dba0cbaf42e8d.jpg',
      name: 'Premium Coffee',
      description: 'Rich and aromatic coffee beans from Colombia.',
      price: '12.99',
      expDate: '01/12/2025',
      quantity: 100, // Added for details view
      color: 'Brown', // Added for details view
      size: '1kg', // Added for details view
      weight: '1.2kg', // Added for details view
    })
  );
  const [selectedItem, setSelectedItem] = useState(null);

  const handleViewDetails = (item) => {
    setSelectedItem(item);
  };

  const handleBack = () => {
    setSelectedItem(null);
  };

  const handleSave = (updatedItem) => {
    setItems((prevItems) =>
      prevItems.map((item, index) =>
        index === items.indexOf(selectedItem) ? updatedItem : item
      )
    );
    setSelectedItem(updatedItem);
  };

  const handleDelete = () => {
    setItems((prevItems) => prevItems.filter((_, index) => index !== items.indexOf(selectedItem)));
    setSelectedItem(null);
  };

  const handleViewPurchases = () => {
    alert(`Viewing purchase history for ${selectedItem.name}`);
    // Implement actual purchase history logic here
  };

  const handleViewSales = () => {
    alert(`Viewing sales history for ${selectedItem.name}`);
    // Implement actual sales history logic here
  };

  return (
    <div className={styles.container}>
      {/* Left Sidebar */}
      <div className={styles.sidebar}>
        <h2 style={{ color: '#00bcd4', marginBottom: '1rem' }}>Filters</h2>
      </div>

      {/* Right Content */}
      {selectedItem ? (
        <ItemDetails
          item={selectedItem}
          onBack={handleBack}
          onSave={handleSave}
          onDelete={handleDelete}
          onViewPurchases={handleViewPurchases}
          onViewSales={handleViewSales}
        />
      ) : (
        <div className={styles.content}>
          {items.map((item, index) => (
            <ItemCard
              key={index}
              photo={item.photo}
              name={item.name}
              description={item.description}
              price={item.price}
              expDate={item.expDate}
              onViewDetails={() => handleViewDetails(item)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Inventory;