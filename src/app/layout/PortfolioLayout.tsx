import {Outlet} from "react-router-dom";
import Header from "../header/Header.tsx";
import Footer from "../footer/Footer.tsx";

const PortfolioLayout = (): JSX.Element => {
    return (
        <>
            <Header/>
            <main className="bg-amber-300">
                <Outlet/>
            </main>
            <Footer/>
        </>
    );
};

export default PortfolioLayout;
