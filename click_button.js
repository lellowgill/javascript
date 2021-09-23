//event handlers 
//an event is a reaction to the action taken by the user in the interface.

//document.querySelector('button')

let myButton = document.getElementsById('button2');

myButton.addEventlistener('click', function() {
    console.log('hello button 2')

})
