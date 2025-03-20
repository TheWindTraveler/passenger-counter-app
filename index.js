// Change the ID in the HTML element which is called count-el to countEl
let countEl = document.getElementById("count-el");

// Let the initial count be 0 at first
let count = 0;

// The button function (INCREMENT) that will be clicked
function increment (){
// For every single time a user clicks the button (INCREMENT) add (1) to it
    count = count + 1;
    // Now once the (INCREMENT) button is clicked change it to the addition in (COUNT)
    countEl.innerText = count;
    // Display it in the console incase there is any error
    console.log(count);
}