import React from 'react'
import { Routes, Route } from 'react-router-dom'
import {
  Home,
  Dashboard,
  Login,
  Secret,
  Signup
} from '@/pages'

const RouterIndex = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/login' element={<Login />} />
      <Route path='/secret' element={<Secret />} />
      <Route path='/Signup' element={<Signup />} />
    </Routes>
  )
}

export default RouterIndex
