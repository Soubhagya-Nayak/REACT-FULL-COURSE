// import "./components/EV.css";

export const EventHandling = () => {

    const handleButtonClick = (event) => {
        console.log(event);
        console.log(event.target);
        console.log(event.type);
        alert("Hey I am onClick Event.");
    }

    const wecomeGreet = (user) => {
        console.log(`Hey, ${user} Welcome`);
    }

    return (
        <>
            <button onClick={handleButtonClick}>Click Me 1</button>
            <br />
            <button onClick={(event) => handleButtonClick(event)}>Click Me 2</button>
            {/* inline event handler */}
            <br />
            <button onClick={(event) => console.log(event)}>Click Me 3</button>
            {/* Function components with inline arrow function */}
            <br />
            <button onClick={() => {alert("Hey I am in alert")}}>Click Me 4</button>
            {/* passing Argument on event handler */}
            <br />
            <button onClick={() => wecomeGreet("Soubhagya")}>Click Me 5</button>
        </>
    )
}