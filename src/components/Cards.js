import React from 'react'
import externalStyle from "../Styles/externalStlyes"
import myStyling from "../Test.module.css"

const Cards = (props) => {
  return (
    <>
        <div className=" col-xs-10 col-sm-6  col-md-4 col-lg-3 my-3" style={{height:"70vh"}}>
            <a href="#" className='text-decoration-none'>
                <div className="card rounded-0 h-100">
                    <img src={props.src} className={myStyling.myImages + "card-img-top rounded-0 h-50"} alt="..."/>
                    <div className="card-body">
                        <h6 className="card-title fw-bold my-2" style={externalStyle.cardtext}>{props.title} </h6>
                        <small className="card-title fw-bold" style={externalStyle.cardtextlight}>STARTING AT</small>
                        <p className="card-text fw-bold my-2" style={externalStyle.cardtext}>{props.price}
                            <small style={externalStyle.cardtextlight} className="fw-bold"> per 100</small>
                        </p>
                        <a href="#" className="btn btn-danger rounded-1 w-100 mt-3 ">Browse Two-sided Bu... &nbsp;</a>
                    </div>
                </div>            
            </a>
        </div>
    
    </>
  )
}

export default Cards