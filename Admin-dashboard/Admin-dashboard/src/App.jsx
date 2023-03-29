import React, { useState } from 'react'
import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home/Home';
import UserList from './pages/userList/UserList';
import User from './pages/user/User';
import NewUser from './pages/newUser/NewUser';
import ProductList from './pages/productList/ProductList';
import Product from './pages/product/Product';
import NewProduct from './pages/newProduct/NewProduct';
import Login from './pages/login/Login';

function App() {

  return (

    <BrowserRouter>
      <Routes>
        <Route exact path="/login"
          element={<Login />}
        />

        <Route exact path="/"
          element={<Home />}
        />

        <Route exact path="/users"
          element={<UserList />}
        />

        <Route exact path="/user/:id"
          element={<User />}
        />

        <Route exact path="/newUser"
          element={<NewUser />}
        />

        <Route exact path="/products"
          element={<ProductList />}
        />
        <Route exact path="/product/:productId"
          element={<Product />}
        />
        <Route exact path="/newProduct"
          element={<NewProduct />}
        />




      </Routes>
    </BrowserRouter>

  )
}

export default App
