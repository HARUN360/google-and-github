import { Outlet } from "react-router-dom";
import Nav from "../componets/Nav";


const MainLayout = () => {
    return (
        <div>
            <Nav></Nav>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;