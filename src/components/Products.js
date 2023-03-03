import React from 'react'
import myStyling from "../Test.module.css"
import Cards from './Cards'
const Products = () => {
    const zoomImg =()=>{  
       alert("I want to add animation effect to this image")
    }
  return (
    <>
        <div className={myStyling.product}>
            <h2 className={myStyling.popular}>Popular Products</h2>
            <span className={myStyling.see}>See All Products</span>
        </div>
        <div className='container-fluid'>
            <div className="row px-5 pb-3">
                <Cards src="./project/card1.png"  title="Two-sided Business Cards" price="#8,555" animate={zoomImg}/>
                <Cards src="./project/card2.png"  title="A5 flyers (Single Sided)" price="#15,000"/>
                <Cards src="./project/card14.png" title="Round Stickers (3.5 Diameter)" price="#9,900"/>
                <Cards src="./project/card3.png"  title="Simple Mugs" price="#2,750"/>
                <Cards src="./project/card4.jpg"  title="Postcards (A6)" price="#12,903"/>
                <Cards src="./project/card5.png"  title="Roll Up Banners (Big Base)" price="#32,000" />
                <Cards src="./project/card6.png"  title="A2 Posters" price="#41,400"/>
                <Cards src="./project/card7.png"  title="Trifold Brochures" price="#27,600"/>
                <Cards src="./project/card8.png"  title="Landscape ID Cards" price="#1,800"/>
                <Cards src="./project/card9.png"  title=" Off White T-Shirts" price="#3,499"/>
                <Cards src="./project/card10.png" title="A4 Branded Paper Bags" price="#60,950"/>
                <Cards src="./project/card11.jpeg" title="A4 Courier Bags" price="#16,000"/>
            </div>
        </div>
        <div className={myStyling.product}>
            <h2 className={myStyling.popular}>Popular Categories</h2>
            <span className={myStyling.see}>See All Products</span>
        </div>
        <div className='container-fluid'>
            <div className="row px-5 pb-3">
                <Cards src="./project/card12.png" title="Greeting Cards" price="#17,250"/>
                <Cards src="./project/card13.png" title="Stickers" price="#4,949"/>
            </div>
        </div>
    </>
  )
}

export default Products