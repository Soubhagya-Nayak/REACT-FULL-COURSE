export const EventPropagation = () => {
    const handleGrandPraent = () => {
        console.log("GrandParent Clicked");
    }

    const handleParentClick = () => {
        console.log("Parent Clicked");
    }

    const handleChildClick = (event) => {
        console.log(event);
        console.log("Child Clicked");
    }

    return (
        <section className="main-div">
            <div className="g-div" onClickCapture={handleGrandPraent}> // Root to Target
                <div className="p-div" onClickCapture={handleParentClick}> // Target to Root
                    <div className="c-div" onClickCapture={handleChildClick}>
                        Child Div
                    </div>
                </div>
            </div>
        </section>
    )
}