import React from "react";
import { createRoot } from "react-dom/client";

const heading = React.createElement(
    "h1",                   // tag to be created
     {id: "heading", className: "firstCss"},       // we can pass the attributes (object)
      "hello from react"    // content to be pass to the tag (children)
    );
const root = createRoot(document.getElementById("root"));  // creating the root in the react
root.render(heading);       // rendering the heading object into the created root