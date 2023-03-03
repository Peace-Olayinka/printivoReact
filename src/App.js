import React from 'react'
import Assignment1 from './components/Assignment1'
import Fish from './components/Fish'
import HeaderNav from './components/HeaderNav'
import Home from './components/Home'
import Nav from './components/Nav'
import Test from './components/Test'
import myStyling from "./Test.module.css"
const App = () => {
  return (
    <>
      <HeaderNav/>
      <Nav/>
      <Home/>
     
      {/* <Assignment1/> */}
      {/* <Test/> */}
      {/* <Fish/> */}
      {/* <h2 style={{backgroundColor:"blue", color:'white',textAlign:"center"}}>Welcome to class</h2> */}
      {/* below  scoped styling imported from Test.module.css file */}
      {/* <h2 className={myStyling.fish}>Testing scoped styling</h2> */}
      {/* <h2 className='bg-warning'>hello world</h2> */}

    </>
  )
}
export default App