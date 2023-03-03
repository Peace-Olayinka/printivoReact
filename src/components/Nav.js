import React from 'react'
 import externalStyle from "../Styles/externalStlyes"

const Nav = () => {
    return (
        <>
            <nav className="navbar  navbar-expand-lg px-5" style={externalStyle.nav}>
                <div className="container-fluid">
                    <a class="navbar-brand fw-bold fs-3" href="#">
                        <img src="./project/printivologo.svg" alt=""/>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="d-flex ms-auto " id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link fw-bold" aria-current="page" href="#" style={externalStyle.navlink}>Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link fw-bold" href="#"  style={externalStyle.navlink}>All Products</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link fw-bold" href="#"  style={externalStyle.navlink}>Become a Reseller</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link fw-bold" href="#"  style={externalStyle.navlink}>Cost Calculator</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link fw-bold text-danger" href="#"  style={externalStyle.navlink}>Sign in</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link fw-bold" href="#"  style={externalStyle.navlink}>Create Account</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link fw-bold" href="#"  style={externalStyle.navlink}></a>
                            </li>
                            <li>
                                <a class="nav-link fw-bold fw-bold" href="#"  style={externalStyle.navlink}><i class="fa fa-shopping-cart" aria-hidden="true"></i></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Nav