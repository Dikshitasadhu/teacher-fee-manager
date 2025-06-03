import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from 'react-router-dom';
import Sidebar from './layout/Sidebar.jsx';
import Dashboard from './pages/Dashboard.jsx';
import Courses from './pages/Courses.jsx';
import Feedback from './pages/Feedback.jsx';
import Student from './pages/Students.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Sidebar />,  // Sidebar wraps the routes
    children: [
      { index: true, element: <Dashboard /> },     // default route "/"
      { path: 'students', element: <Student /> },
      { path: 'courses', element: <Courses /> },
      { path: 'feedback', element: <Feedback /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
