import React from 'react'
import myStyling from "../Test.module.css"
import externalStyle from "../Styles/externalStlyes"
const MoreInfo = () => {
  return (
    <>
        <div className={myStyling.product}>
            <h2 className={myStyling.popular}>Nigeria's No.1 Online Prints Shop</h2>
            <h4 className={myStyling.navytext}> Our print services and solutions are trusted by these brands and <br/> over 15,000 other businesses in Nigeria.</h4>
            <img src="" alt="" />
        </div>

        <div className="container-fluid" style={externalStyle.others}>
            <h2 className={myStyling.popular}>What Customers Say about Us</h2>
            <div className="row my-5">
                <div className=" col-xs-10 col-md-6 col-lg-4 " style={{height:"35vh"}}>
                    <div className="card rounded-0 h-100 border border-white">
                        <div className="card-body d-flex">
                            <i class="fa fa-twitter text-primary fs-5 border border-secondary rounded-circle px-2 pt-1  my-4 mx-2" aria-hidden="true" style={{height:"30px"}}></i>
                            <aside className='my-4'>
                                <h5 id="sec2txt2" class="fs-6 fw-bold">Amina Ebele <a href="" class="text-decoration-none">@aminaebele.com</a></h5>
                                <p id="sec2txt2"class="">I am now the unofficial <a href="" class="text-decoration-none"> @Printivo</a> ambassador. What these guys just pulled to ensure I got my menu cards today is stunning!</p>
                            </aside>
                        </div>
                    </div>            
                </div>
                <div className=" col-xs-10 col-md-6 col-lg-4 " style={{height:"35vh"}}>
                    <div className="card rounded-0 h-100 border border-white">
                        <div className="card-body d-flex">
                            <i class="fa fa-twitter text-primary fs-5 border border-secondary rounded-circle px-2 pt-1  my-4 mx-2" aria-hidden="true" style={{height:"30px"}}></i>
                            <aside className='my-4'>
                                <h5 id="sec2txt2" class="fs-6 fw-bold">Amina Ebele <a href="" class="text-decoration-none">@aminaebele.com</a></h5>
                                <p id="sec2txt2"class="">I am now the unofficial <a href="" class="text-decoration-none"> @Printivo</a> ambassador. What these guys just pulled to ensure I got my menu cards today is stunning!</p>
                            </aside>
                        </div>
                    </div>            
                </div>
                <div className=" col-xs-10 col-md-6 col-lg-4 " style={{height:"35vh"}}>
                    <div className="card rounded-0 h-100 border border-white">
                        <div className="card-body d-flex">
                            <i class="fa fa-twitter text-primary fs-5 border border-secondary rounded-circle px-2 pt-1  my-4 mx-2" aria-hidden="true" style={{height:"30px"}}></i>
                            <aside className='my-4'>
                                <h5 id="sec2txt2" class="fs-6 fw-bold">Amina Ebele <a href="" class="text-decoration-none">@aminaebele.com</a></h5>
                                <p id="sec2txt2"class="">I am now the unofficial <a href="" class="text-decoration-none"> @Printivo</a> ambassador. What these guys just pulled to ensure I got my menu cards today is stunning!</p>
                            </aside>
                        </div>
                    </div>            
                </div>

            </div>
        </div>

        <div className="container-fluid bg-white" style={externalStyle.others}>
            <h2 className={myStyling.popular}>You Can Count On Us For:</h2>
            <div className="row my-4">
                <div className=" col-xs-10 col-md-6 col-lg-4 " style={{height:"35vh"}}>
                    <div className="card rounded-0 h-100 border border-white">
                        <div className="card-body d-flex" style={externalStyle.cardtext}>
                            <img src="./project2/foot1.svg" alt="" class=" my-3 mx-2 h-50"/>
                            <aside className='my-4'>
                                <h5  class="fs-6 fw-bold">Fast Turnaround Within Days</h5>
                                <p class="">Your order gets to you within 3-7 working days via DHL or our very own Printivo Direct.</p>
                            </aside>
                        </div>
                    </div>            
                </div>
                <div className=" col-xs-10 col-md-6 col-lg-4 " style={{height:"35vh"}}>
                    <div className="card rounded-0 h-100 border border-white">
                        <div className="card-body d-flex" style={externalStyle.cardtext}>
                            <img src="./project2/foot2.svg" alt="" class=" my-3 mx-2 h-50"/>
                            <aside className='my-4'>
                                <h5  class="fs-6 fw-bold">100% Top Quality</h5>
                                <p  class="">Only the finest materials, machines and people will be involved in fulfilling your order.</p>
                            </aside>
                        </div>
                    </div>            
                </div>
                <div className=" col-xs-10 col-md-6 col-lg-4 " style={{height:"35vh"}}>
                    <div className="card rounded-0 h-100 border border-white">
                        <div className="card-body d-flex" style={externalStyle.cardtext}>
                            <img src="./project2/foot3.svg" alt="" class=" my-3 mx-2 h-50"/>
                            <aside className='my-4'>
                                <h5  class="fs-6 fw-bold">Affordable Services</h5>
                                <p  class="">All products are adequately priced to ensure you get value for your money at all times.</p>
                            </aside>
                        </div>
                    </div>            
                </div>

            </div>
        </div>

        <div className="container-fluid" style={externalStyle.otherslight}>
            <h2 className={myStyling.popular}>Our amazing work got noticed by:</h2>
            <div className="row gap-5 my-5">
                <div className='col-2'>
                    <img src="./project2/foot4.svg" alt=""/> <br/>
                    <a  href="#" className={myStyling.popular}>Read the article here</a>
                </div>

                <div className='col-2'>
                    <img src="./project2/foot5.svg" alt=""/><br/>
                    <a  href="#" className={myStyling.popular}>Read the article here</a>
                </div>

                <div className='col-2'>
                    <img src="./project2/foot6.png" alt=""/><br/>
                    <a  href="#" className={myStyling.popular}>Read the article here</a>
                </div>

                <div className='col-2'> 
                    <img src="./project2/foot7.svg" alt=""/><br/>
                    <a href="#" className={myStyling.popular}>Read the article here</a>
                </div>

                <div className='col-2'>
                    <img src="./project2/foot8.svg" alt=""/><br/>
                    <a  href="#" className={myStyling.popular}>Read the article here</a>
                </div>
            </div>
        </div>
    </>
  )
}

export default MoreInfo