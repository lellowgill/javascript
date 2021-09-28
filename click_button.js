//event handlers is an action that happens in the browser.
//the browser produces a signal when an evenrt occurs and provides a 'listener' 
//to execute some code when the event occurs
//an event is a reaction to the action taken by the user in the interface.
//the alert() function is the event handler. 
//To react to these different events we can assign an event handler. 

/**Event	Triggered when
 * 
'click'	     the pointing device is clicked
'resize'	 the size of the browser or window is changed
'scroll'	 the window has been scroll
'keydown'	 any key is pressed
'keyup'	     any key is released
'keypress'	 ANY key except Shift, Fn, CapsLock is in pressed position. (Fired continously.)
'fullscreenchange'	 when the window has entered or exited full screen mode
'dblclick'	the pointing device is double clicked
'play'  	media starts playing
'ended' 	media has finished playing
# */

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