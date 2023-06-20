import { Outlet, useLocation } from "react-router-dom";
import Footer from "../shared/Footer/Footer";
import Header from "../shared/Header/Header";


const Main = () => {
    const location =useLocation(null)
    const ignoreHEaderFooter=location.pathname.includes("login") || location.pathname.includes('signup')
    return (
        <>
            {
                ignoreHEaderFooter || <Header/>
            }
            <Outlet/>
            {
                ignoreHEaderFooter || <Footer/>
            }
        </>
    );
};

export default Main;