import React from 'react'
import { useState } from 'react'
const Assignment1 = () => {

    let myStyle = {
        width:"50%",
        backgroundColor:"red",
        padding:"1em",
        margin:"1em"
    }
    const [myNumber, setmyNumber] = useState("")
    const [inpNumber, setinpNumber] = useState("")
    const checkNumber = ()=>{
     setmyNumber(inpNumber)
    }

    return (
        <>
            <h1>Level Virtual class assignment 1</h1>
            <div style={myStyle}>
                <input className='form-control' type="text" placeholder='enter number' onChange={(e)=>setinpNumber(e.target.value)}/>
                <button className='btn btn-success m-2' onClick={checkNumber}>Check Number</button>
            </div>
            {
                myNumber<5? <h1>{myNumber} is a small number </h1>:
                <h1>{myNumber} is a big number</h1>
            }
        </>
    )
}

export default Assignment1