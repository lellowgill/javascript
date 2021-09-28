//AJAX = Asynchronous JavaScript And XML 9/27/2021

/**
 * Objective is to:
 *      make an AJAX request
 *          -XMLHttpRequest
 *          -fetch 
 *      Understand server status codes
 *      Handle AJAX responses
 * 
 */

//XHR for short aka XMLHttpRequest()
/** const request = new XMLHttpRequest();

request.onreadystatechange = function () {
    console.log(this);
};

request.open("GET", "http://placekitten.com/400/400");

const requestButton = document.getElementsById("request-button");

requestButton.addEventListener("click", function() {
    request.send();
})

/**
 * REQUESTS METHODS
 *  -Get grabbing information i want
 *  -Post is sending data to 
 *  -Patch  
 *  -Delete
 * You can go to FN F12 TO inspect page and to go console to network throttling
 *  to change the loading times and network 
 */

/**
 * STATUS CODES
 * 100s Info
 * 200s Success
 * 300s Redirects
 * 400s Client Error error code 404
 * 500s Server Errors 
 * A Client is a browser for example if you see an error in the 400s may be a human typo error
 * The Browser is the Client
 * 
 */

//Fetch command 
//API | Application Programming Interface

fetch ("http://placekitten.com/400/400")
.then(function(response) {
    console.log(response);
})

.catch(function(error) {
    console.log(error);
})


