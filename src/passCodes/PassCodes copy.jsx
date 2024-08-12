import React, { useState } from 'react'
import "./passCodes.css"


const PassCodes = () => {

    const [code, setCode] = useState(1234)
    const [userCode, setUserCode] = useState("")
    const [msg, setMsg] = useState("")
    const [display, setDisplay] = useState("") // for our * * *

    const [color, setColor] = useState("white")


    const handleClick = (input) => {
        console.log(userCode, input)
        setUserCode(prev => {
            return prev += input;
        })
        setDisplay(prev => {
            return prev += "*"
        })
    }

    const isValid = () => {
        if (code == userCode) {
            console.log("match")
            setColor("green")

        } else {
            console.log("fail")
            setColor('red')


        }
    }

    const handleReset = () => {

        setUserCode("")
        setColor("white")
        setDisplay("")

    }


    return (

        <>
            <div id="passCodeContainer">

                {console.log("code", code)}
                {console.log("userCode", userCode)}
                {console.log("msg", msg)}
                {console.log("color", color)}
                <div>PassCodes</div>
                <div id="display">

                    {/* <p id="input"> {userCode}</p> */}
                    <p id="input" style={{ color: color }}>
                        {display}
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