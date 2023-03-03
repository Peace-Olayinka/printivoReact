import React from 'react'
import myStyling from "../Test.module.css"

const HeroSection = () => {
  return (
    <>
      <div className={myStyling.hero1}>
        <div className={myStyling.hero}>
          <h1 className={myStyling.herotext}> Quality Prints</h1>
          <h3 className={myStyling.herotext2}> Shipped to your doorstep</h3>
          <form action="" className="mt-5">
            <label for="" className="fw-bold ">What would you like to print today?</label><br/>
            <input type="text" placeholder="Search for Business cards, T-shirts, Mugs, etc" className="p-4 w-75 border border-none"/>
            <span className={myStyling.search}>
              <a  href="#" className="bg-white py-3 px-2 border border-white text-decoration-none text-dark">
                <i class="fa fa-search" aria-hidden="true"></i>
              </a>
            </span>
          </form>
        </div>
      </div>
    </>
  )
}

export default HeroSection