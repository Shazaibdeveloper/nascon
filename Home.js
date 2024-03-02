import React from "react";
import Dashboard from "./Dashboard";
import AddProducts from "../Components/AddProducts";
import Login from "../Components/Login";
import Register from "../Components/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Update from "../Components/Update";
import UserActivity from "../Components/UserActivity";

const Home = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route index element={<Dashboard />} />
          <Route path="/addproducts" element={<AddProducts />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/update" element={<Update />} />
          <Route path="/useractivity" element={<UserActivity />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Home;
