import { Outlet} from "react-router-dom";
import Navbar from "../components/NavBar/Navbar.js";

const Layout = () => {
    return (
        <>
            <Navbar/>
            <Outlet />
        </>
    )
};

export default Layout;