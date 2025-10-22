import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import AppRoutes from '@/Routes/Routes'
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}

export default App
