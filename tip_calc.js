/**
 * Write a function totalAmount that takes the same arguments as tipAmount
 * 
 */

//create a function tipAmount that is given the bill amount

/**function tipAmount(billAmount, serviceLevel) {

//the level of service(one of good, fair, and poor)
    let serviceLevels = {
        good: 0.20,
        fair: 0.15,
        bad: 0.10,
    }

//returns the dollar amount for the tip.
    return billAmount * serviceLevels[serviceLevel];
}
//this will print in the console as the tip amount which is 20%
console.log(tipAmount(100, "good"))
*/

/**let good = .20;
let fair = .15;
let bad = .10;

if (serviceLevel) === 'good'
    return


    function cipher(string, offset) {

    }
    */
/**     
var goodS = .2
var fairS = .15
var badS = .1
//wirte a function for the tip amount

function tipCalc(bill, service) {
    if (service == "good") {
        return "your good tip is " + bill * goodS + ".";
    }
    else if (service == "fair") {
        return "your fair tip is " + bill * fairS + "."; 
    }
    else if (service == "bad") {
        return "your bad tip is " + bill * badS + "."; 
    }    
    else {
        return "You have decided not to tip.";
    }
}

    console.log(tipCalc(45, "fair"));
    console.log(tipCalc(20, "good"));*/

    var goodServ = .20
    var fairServ = .1q
    var poorServ = .05

//create another tip calculator 
    function tipCalc(price, service){
        if (service == "good"){ 
            total = "$" + price;
            tipAmount = price * .20;
            return("$" + tipAmount + "is your tip amount. The bill total is " + total)
        }else if (service == "fair"){
            total = "$" + price;
            tipAmount = price * .1;
//on this next line I used interpolation for the equation with back ticks and ${}
            return(`$${tipAmount} is your tip amount.The bill total is ${total}`)

        }else if (service == "poor"){
            total = "$" + price;
            tipAmount = price * .05;
            return("$" + tipAmount + "is your tip amount. The bill total is " + total)
        }else {
           return "I will not give tips to the pits service"
        }
    };

    let payOut = tipCalc(100, "good");
    let eatOut = tipCalc(60, "fair");
    let hungryOut = tipCalc(80, "poor")
    let pitService = tipCalc(45, "weak")

    console.log(payOut);
    console.log(eatOut);
    console.log(hungryOut);
    console.log(pitService);