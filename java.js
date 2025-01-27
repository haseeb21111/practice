// Function that will be called when the button is clicked
let doIt = () => {
    // Get the baggage weight entered by the user
    let weight = document.getElementById("bw").value;
    
    // Check if the weight is greater than 15kg
    if (weight > 15) {
        // Show an alert if the bag is overweight
        alert("Your baggage is overweight! Please reduce the weight.");
    } else {
        // Show an alert if the weight is within the limit
        alert("Your baggage is within the weight limit.");
    }
}

