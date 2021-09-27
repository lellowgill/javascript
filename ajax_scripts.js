//AJAX

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
const request = new XMLHttpRequest();

request.onreadystatechange = function () {
    console.log(this);
};

request.open("GET", "http://pladcekitten.com/400/400");

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