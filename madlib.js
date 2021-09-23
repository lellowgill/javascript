//madlib exercise in practice
//a name and a subject, It will return(not print)
//a new string: (name)'s favorite subject in school is (subject)

function madLib(myName, subject) {
    const message = `My name is ${myName}, my favorite subject is ${subject}.`

    return message;

}

let student = madLib("Deboriums","science")

console.log(student)

/**
 * how to create a function
 * how to return a value from a function 
 * hwo to interpolate data in a string
 * 
 * funtion madLib(name, subject) {
 *      return `${name}'s favorite subject in school is ${subject};
 * }
 * const newMadlibString = "madLIb('Deborium", "history");
 *+ "'s favorite subject in school is" + subject + "."
 * 
 * console.log(newMadLibString); 
 * */ 





 