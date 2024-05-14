// Create the HTML structure dynamically using JavaScript

// Create a new HTML document
const doc = document.implementation.createHTMLDocument('Welcome');

// Create <head> element and set its content
const head = doc.createElement('head');
head.innerHTML = `
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome</title>
    <style>
        .btn {
            display: inline-block;
            padding: 10px 20px;
            font-size: 16px;
            text-align: center;
            cursor: pointer;
            border: none;
            border-radius: 5px;
            margin: 10px;
        }
        .btn-small {
            background-color: red;
            color: white;
        }
        .btn-large {
            background-color: green;
            color: white;
        }
    </style>
`;

// Create <body> element and set its content
const body = doc.createElement('body');
body.innerHTML = `
    <h1>Welcome</h1>
    <button class="btn btn-small">Small Button</button>
    <button class="btn btn-large">Large Button</button>
`;

// Append <head> and <body> elements to the document
doc.documentElement.appendChild(head);
doc.documentElement.appendChild(body);

// Convert the HTML document to a string
const htmlString = new XMLSerializer().serializeToString(doc);

// Output the HTML string
console.log(htmlString);


