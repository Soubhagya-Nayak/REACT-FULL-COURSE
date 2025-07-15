import { useState } from "react"

export const States = () => {
    // let count = 0;
    // let handleButtonClick = () => {
    //     count++;
    //     console.log(count);
    // }

    const [count, setCount] = useState(0);
    const handleButtonClick = () => {
        setCount(() => count + 1)
    }
    return (
        <>
            <h1>{count}</h1>
            <button onClick={handleButtonClick}>Increment</button>
        </>
    )
}