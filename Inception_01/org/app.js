const heading = React.createElement(
    "h1",                   // tag to be created
     {id: "heading", class: "firstCss"},       // we can pass the attributes (object)
      "hello from react"    // content to be pass to the tag (children)
    );
const root = ReactDOM.createRoot(document.getElementById("root"));  // creating the root in the react
root.render(heading);       // rendering the heading object into the created root