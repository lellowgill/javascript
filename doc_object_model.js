//keyword D.O.M. document object Model
//KEYWORD B.O.M. Browser Object Model
//in Javascript you can do any data type
//window.location will put up your current location 


/**let userObjectModel = {
    firstName: "Debbie"
}*/
//an object have (curly) braces key value pairs

//console.log('BOM accessed through window object:')
//console.log(window)

/**let userObjectModel = {
    firstName: 'Debbie',
    age: 33
} */
//if you want to access the browser elements you use the keyword window
//if you want to access the html  use the keyword document 
console.log('DOM accessed through window object:')
console.log(document)

let userObject = {
    sayHello: function() {
        console.log('hello');
    },
    firstName: 'Debbie'
}

console.log('hello')

let element = document.getElementsByTagName('h1')

console.log(elements)