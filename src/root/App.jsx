import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Details from "../pages/Details";
import Register from "../pages/Register";
import Login from "../pages/Login";
import MainLayout from "../layout/MainLayout";
import Profile from "../pages/Profile";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/details" element={<Details />} />
        </Route>

        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
};

export default App;
