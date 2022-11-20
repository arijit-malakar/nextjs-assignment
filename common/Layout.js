import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Navbar from "./Navbar";

const Layout = (props) => {
    const {children, footerStatus} = props;
    console.log(footerStatus);
    return (
        <>
            <div className="container-fluid">
                <Header />
                {children}
                {! footerStatus && (<Footer />)}
            </div>
        </>
    );
}

export default Layout;