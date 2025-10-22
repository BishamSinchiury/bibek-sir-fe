import React from 'react'
import styles from './ItemCard.module.css'

const Card = ({ photo, name, description, price, expDate, onViewDetails }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={photo} alt={name} className={styles.image} />
      </div>
      <div className={styles.content}>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.description}>{description}</p>
        <div className={styles.info}>
          <span className={styles.price}>${price}</span>
          <span className={styles.exp}>Exp: {expDate}</span>
        </div>
        <button className={styles.button} onClick={onViewDetails}>
          View Details
        </button>
      </div>
    </div>
  )
}

export default Card
