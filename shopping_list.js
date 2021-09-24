//input the value 
//why do we have [0] index? write code to pay attention  
//a specific area so it won't turn into an array

let input = document.getElementsByTagName("input")[0];
let submitButton = document.getElementsByTagName('button')[0];
let itemsList = document.createElement("ul");
let title = document.getElementsByTagName("h1")[0];
let removeButton =  null;

itemsList.setAttribute("id", "items-list");

title.insertAdjacentElement("afterend", itemsList);

submitButton.addEventListener("click", function(event) {
    //console.log(input.value);
    let item = document.createElement("li");
    item.innerHTML = input.value;

    removeButton = document.createElement("button");
    removeButton.setAttribute("class", "remove-button");
    removeButton.innerHTML = "remove";
    removeButton.addEventListener("click", function(event){
        event.target.parentElement.remove();
    })

    item.append(removeButton);

    itemsList.appendChild(item);
    //console.log(item);

    input.value = "";
})

