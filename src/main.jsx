import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Layout } from './components/Layout.jsx'
import { PAGE_ROUTES } from './constants/page_routes.js'
import { Dashboard } from './pages/Dashboard.jsx'
import { Login } from './pages/Login.jsx'
import { Home } from './pages/Home/Home.jsx'


const router = createBrowserRouter([

  {
    path:"/",
    element:<Layout/>,
    children: [
      {
        index:true,
        element: <App/>
      },
      {
        path: PAGE_ROUTES.LOGIN,
        element : <Login></Login>
      },
       {
        path: PAGE_ROUTES.HOME,
        element : <Home></Home>
      },
    {
      path: PAGE_ROUTES.DASHBOARD,
      element : <Dashboard></Dashboard>
    }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider  router={router}>
      <App />
    </RouterProvider>

  </React.StrictMode>,
)
