// In the ‘js-basics’ folder you created above, create a file and name it ‘index.js’. Inside the file, Write a function that multiples two numbers. Call that function to multiply any two numbers of your choice and log the answer in your console

function multiply(num1,num2) {
    return num1*num2;
};
multiply(5,7);


//  In the same index.js file, create variables for your first name, last name, Stutern track, skills, favorite color, year of your country’s independence. Use these variables to form a sentence and log the sentence in the console.

let firstName = "Joyce";
let lastName = "Mbaka";
let sturternTrack = "FrontEnd";
let skills = "HTML, CSS and JS";
let favoriteColor = "Red";
let countryIndependence = 1960;
let sentence = "I am " + firstName +" "+ lastName +","+ "I am a " + sturternTrack + " Web developer. My skills are " + skills + "," + " I love the color " + favoriteColor + "." + " Nigeria gained her independence in the year " + countryIndependence + ".";

console.log(sentence);