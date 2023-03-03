import React from 'react'
import externalStyle from "../Styles/externalStlyes"
const HeaderNav = () => {
  return (
    <>
        <nav  className="navbar navbar-expand-lg bg-light fw-bold ps-5">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="#" style={externalStyle.Headernav}>Corporate Pricing</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link ms-3" href="#" style={externalStyle.Headernav}>Discover Stores</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link  ms-3 me-5" href="#" style={externalStyle.Headernav}>Track Orders</a>
                        </li>
                        <li  className=" nav-item ms-5 ps-5">
                            <a className=" nav-link text-decoration-none ms-5 ps-5" href="#" style={externalStyle.Headernav}>Need help? Call: <span className='text-primary'>+2349033394403, +2348109721617</span></a>
                        </li>
                        <li className=" nav-item ms-3">
                             <img src="./project/whatsapplogo.svg" alt="" />
                        </li>

                        <li className=" nav-item  ms-3" ><button className="btn btn-sm border border-secondary rounded-5 fw-bold  py-2" type="submit" style={externalStyle.Headernav}><svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M16 2.667H0v10.666h16V2.666z' fill='#F0F0F0'/><path d='M5.333 2.667H0v10.666h5.333V2.666zM16 2.667h-5.333v10.666H16V2.666z' fill='#4A945A'/></svg> &nbsp; Nigeria</button></li>
                    </ul>
                    
                </div>
            </div>
        </nav>
    </>
  )
}

export default HeaderNav