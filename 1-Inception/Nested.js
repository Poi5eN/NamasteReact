// React Element is a plain JavaScript object that describes a DOM node.
// It is not a real DOM node, but a lightweight representation of it.
// React uses this object to create the actual DOM node when rendering.

// ReactElement(Object) => HTML(Browser Understandable) => DOM(Node in Browser)

const parent = React.createElement(
    "div",
    {
        id: "parent",
        className: "parent",
    },

    // For a single child
    // React.createElement(
    //     "h1",
    //     {
    //         id: "heading",
    //         className: "heading",
    //     },
    //     "Hello World from Nested React!"
    // )

    // For multiple children
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
// This will render the parent div with the heading inside it.