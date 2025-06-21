import React from 'react';
import ReactDOM from 'react-dom/client';

const parent = React.createElement(
    "div",
    {
        id: "parent",
        className: "parent",
    },

    [
        React.createElement(
            "h1",
            {
                id: "heading",
                className: "heading",
            },
            "Hello World from Nested React!"
        ),
        React.createElement(
            "h2",
            {
                id: "sub-heading",
                className: "sub-heading",
            },
            "This is a sub-heading"
        ),
        React.createElement(
            "p",
            {
                id: "paragraph",
                className: "paragraph",
            },
            "This is a paragraph inside the parent div."
        )
    ]   
)


console.log(parent);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);