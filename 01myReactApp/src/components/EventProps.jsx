export const EventProps = () => {
    const HandleWelcomeUser = (user) => {
        alert(`Hey, ${user}`);
    }

    const handleHover = () => {
        alert(`Hey, Thanks For Hovering Me.`)
    }

    return (
        <>
            <WelcomeUser onButtonClick={() => HandleWelcomeUser("Soubhagya")} onMouseEnter={handleHover} />
        </>
    )
}

const WelcomeUser = (props) => {
    const { onButtonClick, onMouseEnter } = props;
    const handleGreetings = () => {
        console.log(`Hey User, Welcome`);
        onButtonClick;
    }
    return (
        <>
            <button onClick={onButtonClick}>Click Me</button>
            <button onMouseEnter={onMouseEnter}>Hover Me</button>
            <button onClick={handleGreetings}>Greeting</button>
        </>
    )
}