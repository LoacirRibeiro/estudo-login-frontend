import React from "react";
import './App.css'


//importação react router dom
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";

//vamos criar as rotas
const router = createBrowserRouter([
 {
  path: '/' ,
  element: <div><Login /></div>
 },

 {
  path: '/register' ,
  element: <div><Register /></div>
 },

 {
  path: '/dashboard' ,
  element: <div><Dashboard /></div>
 },
])

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
