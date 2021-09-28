const request = new XMLHttpRequest();
request.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
        console.log(this);
    }
};
//this command is going to cause an error if i do not have file saved under sample.txt
//which I do not. 
request.open("GET", "./sample.txt");
request.send();


