import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Dashboard from '@/Pages/Dashboard/Dashboard'
import Inventory from '@/Pages/Inventory/Inventory'
import Billing from '@/Pages/Billing/Billing'
import Transaction from '@/Pages/Transaction/Transaction'
import Vendor from '@/Pages/Vendor/Vendor'
import Customers from '@/Pages/Customers/Customers'
import Settings from '@/Pages/Settings/Settings'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />}>
        <Route path="inventory" element={<Inventory />} />
        <Route path="billing" element={<Billing />} />
        <Route path="transaction" element={<Transaction />} />
        <Route path="vendor" element={<Vendor />} />
        <Route path="customers" element={<Customers />} />
        <Route path="settings" element={<Settings />} />

        {/* Optional: redirect /dashboard to /dashboard/inventory */}
        <Route index element={<Navigate to="inventory" replace />} />
      </Route>

      {/* Fallback 404 */}
      <Route
        path="*"
        element={
          <h1 style={{ color: 'white', textAlign: 'center', marginTop: '2rem' }}>
            404 - Page Not Found
          </h1>
        }
      />
    </Routes>
  )
}

export default AppRoutes
