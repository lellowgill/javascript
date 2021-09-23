//event handlers is an action that happens in the browser.
//the browser produces a signal when an evenrt occurs and provides a 'listener' 
//to execute some code when the event occurs
//an event is a reaction to the action taken by the user in the interface.

document.querySelector('button')

let myButton = document.getElementsById('button2');

myButton.addEventlistener('click', function() {
    console.log('hello button 2')

})

window.addEventListener('resize', function() {
    console.log(window.innerWidth);
}) 

document.addEventListener('click',function(event) {
    console.log(event.target)
})
 //listen for an event on the document specifically a click event 
 //run a function i provide whe the event i'm targeting
 //the event object is passed into the function i created automatically
 //log out the target property on the event   