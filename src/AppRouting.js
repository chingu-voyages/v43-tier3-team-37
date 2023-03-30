import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./components/User/SignIn";
import Register from './components/User/Register';  
import Menu from './components/Order/MenuComponent';
import Layout from './pages/Layout';
export default function AppRouting() {
  return (
    <Routes>
    <Route path='/' element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path='menu' element={<Menu/>}/>
    </Route>
    <Route path='login' element={<SignIn/>}/>
    <Route path='register' element={<Register/>}/>
</Routes>
  )
}
