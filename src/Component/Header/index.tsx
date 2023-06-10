import './index.css'
import {Link} from 'react-router-dom'

export const Header = () => {
   return <nav>
        <Link to='/Pages/Home'>Home</Link>
        <Link to = '/Pages/Dashboard'>Dashboard</Link>
        <Link to = '/Pages/Login'>Login</Link>
        <Link to = '/Pages/Profile'>Profile</Link>
        <Link to = '/Pages/My order'>Myorder</Link>
        <Link to = '/Pages/Blogs'>Blogs</Link>
    </nav>
}