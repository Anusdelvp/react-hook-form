
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import AdmissionForm from './Pages/admissionForm.jsx';


import AdmissionVerification from './AdmissionVerification.jsx';
import App from './App.jsx';
import Layout from '../Layout.jsx';

const router = createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    children:[
      {
        path:'/',
        element:<AdmissionForm/>
      },
      {
        path:'AdmissionVerify',
        element:<AdmissionVerification/>
      }
    ]

  }

])










createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}>
  <App/>
    </RouterProvider>
)
