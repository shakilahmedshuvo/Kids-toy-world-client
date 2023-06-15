import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Layout/Main.jsx';
import Blog from './Components/Blog/Blog';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Registration from './Components/Registration/Registration';
import AuthProvider from './Components/Providers/AuthProvider';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import AddToy from './Components/AddToy/AddToy';
import AllToys from './Components/AllToys/AllToys';
import MyToys from './Components/MyToys/MyToys';
import UpdateToys from './Components/UpdateToys/UpdateToys';
import ViewToy from './Components/ViewToy/ViewToy';
import PrivetRoute from './Components/PrivetRoute/PrivetRoute';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/blog',
        element: <Blog />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/registration',
        element: <Registration />
      },
      {
        path: '/addToy',
        element: <AddToy />
      },
      {
        path: '/allToys',
        element: <AllToys />,
        loader: () => fetch('https://kids-toy-world-server.vercel.app/allToys')
      },
      {
        path: '/myToys',
        element: <PrivetRoute><MyToys /></PrivetRoute>
      },
      {
        path: '/update/:id',
        element: <UpdateToys />,
        loader: ({ params }) => fetch(`https://kids-toy-world-server.vercel.app/allToys/${params.id}`)
      },
      {
        path: '/viewToys/:id',
        element: <PrivetRoute><ViewToy /></PrivetRoute>,
        loader: ({ params }) => fetch(`https://kids-toy-world-server.vercel.app/allToys/${params.id}`)
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='overflow-hidden'>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </div>
  </React.StrictMode>,
)
