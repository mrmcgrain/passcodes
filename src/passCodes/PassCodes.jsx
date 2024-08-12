import React, { useState } from 'react'
import "./passCodes.css"


const PassCodes = () => {

    const [code, setCode] = useState(1234)  // default code to compare against
    const [userCode, setUserCode] = useState("") // collect keypresses for current attempt
    const [msg, setMsg] = useState("") // if displaying a msg, hold it here
    const [display, setDisplay] = useState("") // for our * * *   instead of numbers
    const [color, setColor] = useState("white")  // error / success color after compare
    const [render, setRender] = useState(false)

    const handleClick = (input) => {  //(input) is the handleClick("value") from html
        console.log(userCode, input)

        setUserCode(prev => {  // take the original code (prev) and concatenate prev += input
            return prev += input;
        })

        setDisplay(prev => {   // renders the ** instead of 1234
            return prev += "*"
        })
    }

    const isValid = () => { // function to determine if values match
        if (code == userCode) {
            console.log("match")
            setColor("green") // if they do, setColor to green
            setRender(true)

        } else {
            console.log("fail")
            setColor('red') // if not setColor to red
        }
    }

    const handleReset = () => {  //resets all stateful values

        setUserCode("")
        setColor("white")
        setDisplay("")
        setRender(false)


    }


    return (

        <>
            <div id="passCodeContainer">

                {console.log("code", code)}
                {console.log("userCode", userCode)}
                {console.log("msg", msg)}
                {console.log("color", color)}
                {console.warn("display", display)}
                <div>PassCodes</div>

                <div id="display">

                    {/* <p id="input"> {userCode}</p> */}
                    <p id="input" style={{ color: color }}>

                        {render ? userCode : display}

                    </p>
                </div>

                <div>

                    <button onClick={() => handleClick("0")}>0</button>
                    <button onClick={() => handleClick("1")}>1</button>
                    <button onClick={() => handleClick("2")}>2</button>

                </div>
                <div>

                    <button onClick={() => handleClick("3")}>3</button>
                    <button onClick={() => handleClick("4")}>4</button>
                    <button onClick={() => handleClick("5")}>5</button>

                </div>
                <div>

                    <button onClick={() => handleClick("6")}>6</button>
                    <button onClick={() => handleClick("7")}>7</button>
                    <button onClick={() => handleClick("8")}>8</button>
                </div>
                <div>

                    <button onClick={() => handleClick("9")}>9</button>

                </div>
                <div>

                    <br />

                    <button onClick={() => handleReset()}>Reset</button>
                    <button onClick={() => isValid()}>Submit</button>

                    <p style={{ color: color }}>
                        {userCode}
                    </p>
                    {msg}
                </div>
            </div>

        </>
    )
}

export default PassCodes