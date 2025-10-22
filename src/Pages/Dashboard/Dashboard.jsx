import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '@/Components/NavBar/NavBar'
import styles from './Dashboard.module.css'

const Dashboard = () => {
  return (
    <div className={styles.dashboard}>
      <NavBar />
      <main className={styles.content}>
        <Outlet /> {/* Renders Inventory, Billing, etc. based on route */}
      </main>
    </div>
  )
}

export default Dashboard
