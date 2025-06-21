
        const heading = React.createElement("h1", {
            id: "heading",
            className: "heading",
        }, "Hello World from React!");
        // {} in this case is an empty object which is used for attributes/props i.e. id, className, etc.



        console.log(heading);
        // This will log the React element object to the console. As the React element is an object.

        const root = ReactDOM.createRoot(document.getElementById('root'));

        root.render(heading);