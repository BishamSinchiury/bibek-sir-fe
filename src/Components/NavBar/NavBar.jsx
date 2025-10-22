import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import styles from './NavBar.module.css'
import {
  Boxes,
  CreditCard,
  Receipt,
  Truck,
  Users,
  Settings,
  Menu,
} from 'lucide-react'

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  const menuItems = [
    { path: 'inventory', label: 'Inventory', icon: <Boxes size={18} /> },
    { path: 'billing', label: 'Billing', icon: <CreditCard size={18} /> },
    { path: 'transaction', label: 'Transaction', icon: <Receipt size={18} /> },
    { path: 'vendor', label: 'Vendor', icon: <Truck size={18} /> },
    { path: 'customers', label: 'Customers', icon: <Users size={18} /> },
    { path: 'settings', label: 'Settings', icon: <Settings size={18} /> },
  ]

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>Dashboard</div>

      <button className={styles.menuToggle} onClick={toggleMenu}>
        <Menu size={24} />
      </button>

      <ul className={`${styles.navLinks} ${isOpen ? styles.active : ''}`}>
        {menuItems.map((item) => (
          <li key={item.path}>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                `${styles.navButton} ${isActive ? styles.activeLink : ''}`
              }
            >
              {item.icon}
              <span>{item.label}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default NavBar
