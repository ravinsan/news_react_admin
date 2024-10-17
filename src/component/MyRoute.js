import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './Login'
import Dashboard from './Dashboard'
import Users from '../admin/user/Users'
import CreatUser from '../admin/user/CreatUser'
import EditUser from '../admin/user/EditUser'

const MyRoute = () => {
  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/users" element={<Users />} />
      <Route path="/users/create" element={<CreatUser />} />
      <Route path="/users/:id" element={<EditUser />} />
    </Routes>
  )
}

export default MyRoute