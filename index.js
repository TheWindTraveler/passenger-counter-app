// Change the ID in the HTML element which is called count-el to countEl
let countEl = document.getElementById("count__el");
let saveEl = document.getElementById("save__el")

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

// SAVE
function save(){
    // If the (COUNT) is greater than 0 then save it - this is because the user keeps saving 0 to the previous entries
    if (count > 0) {
        let saveStr = count + " - ";
        // This saves the (COUNT)
        saveEl.textContent += saveStr;
        // This returns the (COUNT) back to 0
        count = 0;
        countEl.textContent = count;
    }
}