import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import ResetForm from './assets/components/ResetForm';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './App.css'
import PassReset from './assets/components/passReset';


const App = () => {
const router = createBrowserRouter([
  {
    path: "/",
    element: <ResetForm />,
  },
  {
    path: "/password-reset/:token",
    element: <PassReset/>,
  },
]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App