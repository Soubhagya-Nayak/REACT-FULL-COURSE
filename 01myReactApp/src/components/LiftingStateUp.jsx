import { useState } from "react"

export const LiftingState = () => {
    const [inputValue, setInputValue] = useState("")
    return (
        <>
            <InputComponenet inputValue={inputValue} setInputValue={setInputValue} />
            <DisplayComponent inputValue={inputValue} />
        </>
    )
}

const InputComponenet = ({inputValue, setInputValue}) => {
    return (
        <div className="main-div">
            <input type="text" placeholder="Enter Your Name" value={inputValue} onChange={(e) => {setInputValue(e.target.value)}}></input>
        </div>
    )
}

const DisplayComponent = ({inputValue}) => {
    return (
        <div className="main-div">
            <p>Current Input Content is: {inputValue}</p>
        </div>
    )
}