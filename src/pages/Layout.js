import {Outlet, Link} from "react-router-dom";
// Import Bootstrap components...



let Layout = () => {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/blogs'>Blogs</Link>
                    </li>
                    <li>
                        <Link to='/contact'>Contact</Link>
                    </li>
                    {/* <li>
                        <Link to='/products'>Products</Link>
                    </li> */}
                </ul>
            </nav>

            <Outlet/>
        </>
    )
}

export default Layout;