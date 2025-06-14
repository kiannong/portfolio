import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './css/index.css'
import App from './pages/App.jsx'
import Projects from "./pages/Projects.jsx";
import {createHashRouter, RouterProvider} from "react-router-dom";

const router = createHashRouter([
    { path: '/', element: <App /> },
    { path: '/projects', element: <Projects /> },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
