import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
  import { Link, Route } from 'react-router-dom'
import { PAGE_ROUTES } from './constants/page_routes'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
     <Link to={PAGE_ROUTES.LOGIN}>
        <button>login</button>
     </Link>

     <Link to={PAGE_ROUTES.HOME}>
        <button>Home</button>
     </Link>

    </>
  )
}

export default App
