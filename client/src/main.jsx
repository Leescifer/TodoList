import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import SignUp from './pages/SignUp/signUp.jsx';
import Login from './pages/LogIn/logIn.jsx';
import NotFoundPage from './components/PageNotFound/notFound.jsx';
import { DashBoard, DashBoardItems } from './pages/DashBoard/dashBoard.jsx'; // Import both

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/signup", element: <SignUp /> },
  { path: "/login", element: <Login /> },
  { path: "/dashboard", element: <DashBoard /> },
  { path: "/dashboard/:id", element: <DashBoardItems /> },
  { path: "*", element: <NotFoundPage /> },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
