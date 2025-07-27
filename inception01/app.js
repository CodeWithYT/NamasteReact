const heading = React.createElement(
    "h1",                   // tag to be created
     {id: "heading", class: "firstCss"},       // we can pass the attributes
      "hello from react"    // content to be pass to the tag
    );
const root = ReactDOM.createRoot(document.getElementById("root"));  // creating the root in the react
root.render(heading);       // rendering the heading object into the created root