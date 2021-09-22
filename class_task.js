//javascript solve small exercise 
//select the h1 tag and set "Toppings" as the text of the heading. 
//select the list item 'burger'. Add a class of 'list-itme'
//Create and append a new li element and append it to the list. 


document.getElementById("Toppings").innerHTML = "Toppings";
document.getElementById("burger").className = "list-item";
let onionsOne = document.createElement('li');

document.getElementById('list').appendChild(onionsOne);

onionsOne.innerHTML = 'onions';
