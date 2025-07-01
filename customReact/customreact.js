function customRender(element, container) {
    /*
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;
    domElement.setAttribute('href', reactElement.props.href);
    domElement.setAttribute('target', reactElement.props.target);

    container.appendChild(domElement);
    */

    const domElement = document.createElement(element.type);
    domElement.innerHTML = element.children;
    for (const prop in element.props) {
        if(prop === 'children') continue;
        domElement.setAttribute(prop, element.props[prop]);
    }
    container.appendChild(domElement);
}


const reactElement = {
    type: 'a',
    props: {
        href: "https://google.com",
        target: "_blank"
    },
    children: "Click me to visit"
};

const maincontainer = document.querySelector('#root');

customRender(reactElement, maincontainer);