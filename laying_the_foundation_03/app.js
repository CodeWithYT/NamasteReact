import React from "react";
import ReactDOM from 'react-dom/client';

// the below is creating a dom element with react core:
        /* const heading = React.createElement("h1", {}, "Namaste React");
        const root = ReactDOM.createRoot(document.getElementById("root"));
        root.render(heading);
        */

// but the above code is not much readable couz of that facebook developers intoduced JSX
// JSX is not part of react it's different
// JSX is not HTML inside JS it's "HTML like syntax", below is the syntax to create a react element
// JS engine can't understand the below code as it is not a valid JS syntax but it will be executed how?
    /* before the code goes to the browser the JSX code is transpiled into valid JS code which can be  
    understand by the JS engine then it will be executed and this whole job is done by the "BABEL"; */
/*    
const heading = <h1>Namaste JSX</h1>
const root = ReactDOM.createRoot(document.getElementById("root"));
*/

/*                     Components
we have two types of components:
1. Class component  - old way of writing code
2. functional component - new
*/

/*
functional component: 
- it is just a normal JS function which returns JSX code
- remember when we create a functional component name it with a capital letter
*/

// ways:
// const Heading = () => <h1>React Functional Component</h1>;       // if we want to return only one element

const Heading = () => {
    return (
        <h1>React Functional Component</h1>   // if we want to return multiple element or want to write JSX in mulitple lines for convinence
        );
        };
        
// rendering component
root.render(<Heading />);

/* to call one component inside another we can call it by:
        - <Heading />
        - <Heading ><Heading />
        - {Heading()}
*/

// to write JS inside our JSX we can it using "{}"
/*
const container = () => {
    <p> {heading} </p>
}
*/