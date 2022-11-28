import React from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
    return (
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <div className="navbar-nav me-auto mb-2 mb-lg-0">
                            <Link href="/" className="nav-link">Home</Link>
                            <Link href="/products" className="nav-link">Products</Link>
                            <Link href="/facilities" className="nav-link">Facilities</Link>
                            <Link href="/batches" className="nav-link">Batches</Link>
                            <Link href="/contact" className="nav-link">Contact Us</Link>
                        </div>
                    </div>
    );
}

export default Navbar;