import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './layouts/Main.jsx';
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import AuthProvider from './providers/AuthProvider.jsx';
import PrivateRoute from './providers/PrivateRoute.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children:[{
      path:'/',
      element:<Home/>
    },
    {
      path:'/dashboard',
      element:<PrivateRoute><App/></PrivateRoute>
    },
    {
      path:'/login',
      element:<Login/>
    },
    {
      path:'/register',
      element:<Register/>
    },
  ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='mx-auto max-w-6xl'>
    <AuthProvider>
    <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>
    </AuthProvider>
  </div>
)
