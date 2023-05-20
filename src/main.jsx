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
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/registration',
        element: <Registration></Registration>
      },
      {
        path: '/addToy',
        element: <AddToy></AddToy>
      },
      {
        path: '/allToys',
        element: <AllToys></AllToys>,
        loader: () => fetch('https://kids-toy-world-server.vercel.app/allToys')
      },
      {
        path: '/myToys',
        element: <MyToys></MyToys>
      },
      {
        path: '/update/:id',
        element: <UpdateToys></UpdateToys>,
        loader: ({ params }) => fetch(`https://kids-toy-world-server.vercel.app/allToys/${params.id}`)
      },
      {
        path: '/viewToys/:id',
        element: <PrivetRoute><ViewToy></ViewToy></PrivetRoute>,
        loader: ({ params }) => fetch(`https://kids-toy-world-server.vercel.app/allToys/${params.id}`)
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
