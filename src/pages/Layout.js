
import { Outlet,Link } from "react-router-dom"

{/* The Outlet returns the current route selected 
The Link serves in place of href and is used to set url and keep track of the browsing history 

*/}
const Layout=()=>{
    return(
        <>
            <nav className="flex space-x-4 p-4 bg-gray-200">
                <ul>
                    <li>
                        <Link to="/" className="text-blue-600 hover:underline">Home </Link> 
                    </li>
                    <li>
                        <Link to="/blogs" className="text-blue-600 hover:underline">Blogs </Link> 
                    </li>
                    <li>
                        <Link to="/contact" className="text-blue-600 hover:underline"> Contact </Link>
                    </li>

                </ul>
            </nav>
            <Outlet />
        </>
    )
}

export default Layout;