import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Navbar from "./Navbar";

const Layout = (props) => {
  const { children, headerStatus, footerStatus } = props;
  return (
    <>
      <div className="container-fluid">
        {/* {true ? (
            <div>
              {!headerStatus && <Header />}
              {children}
              {!footerStatus && <Footer />}
            </div>
          ) : (
            <div>
              {!headerStatus && <Header />}
              {children}
              {!footerStatus && <Footer />}
            </div>
          )} */}
        {!headerStatus && <Header />}
        {children}
        {!footerStatus && <Footer />}
      </div>
    </>
  );
};

export default Layout;
