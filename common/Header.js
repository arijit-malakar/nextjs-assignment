import React from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "./Navbar";

const Header = () => {
    return (
        <div className="row navbar navbar-expand navbar-dark bg-primary px-2">
            <div className="col-2">
                <Link className="navbar-brand" href="/">
                    <Image src="/next-js.svg" alt="App logo" width={30} height={30} />
                </Link>
            </div>
            <div className="col-5">
                <Navbar />
            </div>
            <div className="col-3">
                <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-light" type="submit">Search</button>
                </form>
            </div>
            <div className="col-2" style={{textAlign: "right"}}>
                {/* <i className="bi bi-linkedin me-2"></i>
                <i class="bi bi-github me-2"></i>
                <i class="bi bi-facebook me-2"></i> */}
                <Link href="/register">
                    <i className="bi bi-person-add me-2" title="Register" style={{color: "#ffffff"}}></i>
                </Link>
                <Link href="/login">
                    <i className="bi bi-person me-2" title="Login" style={{color: "#ffffff"}}></i>
                </Link>
            </div>    
        </div>
    );
}

export default Header;