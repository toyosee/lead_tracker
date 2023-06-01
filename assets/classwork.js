// Class Work 1
// Assume a front end developer missed out a BUY NOW button
// On an ecommerce site. Add the button from Javascript
// Have the button print out "THANK YOU FOR YOUR PURCHASE"
// When clicked. message should be displayed under the button
// In green color. HINT: when assigning to innerHTML, use +=
// Instead of = 
const Lost = document.getElementById("lost");
let message = "THANK YOU FOR YOUR PURCHASE"

Lost.innerHTML = `
<button onclick="thanks()" class="button btn">BUY NOW </button>
<br>                    
`;

function goodbye(){
    Lost.innerHTML += `<ol>What you bought
        <li> yam</li>
        <li> egg</li>
        <li> rice</li>
    </ol>`
}

function thanks(){
    Lost.innerHTML += `<span> ${message} <span>`;
    goodbye();
}


// Class work 2
// Write a function that will count the items in any array passed
// to it. Hint(Make your function dynamic)
// console
// let myArray = [1,2,3,4,5,6];
// let printIt = '';
// let sock = ["banana ", ' apple'];
// let cars = ['Bmw ', ' Mazda' , ' honda'];

// // Dynamic function
// function output(incoming){
//     for(i=0; i < incoming.length; i++){
//         printIt += incoming[i];
//     }
//     console.log(printIt);
    
// }

// output(cars);

// let num1 = 6;
// let num2 = 7;

// function addition(incoming1, incoming2){
//     console.log(incoming1 + incoming2)
// }

// function subtraction(incoming1, incoming2){
//     console.log(incoming1 - incoming2)
// }

// function multiply(incoming1, incoming2){
//     console.log(incoming1 * incoming2)
// }

// multiply(num1,num2);