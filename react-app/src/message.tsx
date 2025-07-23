//PascalCasing is used for React components
// You should capitalise every letter of the first word
function Message() {
    //Might look wierd writing html inside a javascript file
    //but this is called JSX, a syntax extension for JavaScript
    // JSX: JavaScript XML
    // WIth JSX you can easily describe the user interface with html + js
    // Allows on to create dynamic content and interactive UIs
    const name = 'Lewis';
    // You can replase 'World with name dynamicly'
    // BY adding curly braces{} and adding a javascript expression
    // An expression is a piece of code that produces a value
    if (name)
        return <h1>Hello, {name}</h1>;
    return <h1>Hello, World</h1>;
}

// To use it first you need to export it
export default Message;