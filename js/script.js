// GET DATA AND DECLARATION

const oneKmPrice = 0.21;
let finalPrice;
let discount;

// LOGICAL BLOCK


//Function to calculate price conditions

const sendBtn = document.getElementById("sendButton");

sendBtn.addEventListener("click", function () {
  const userKilometres = parseFloat(document.getElementById("kilometres").value);

  finalPrice = userKilometres * oneKmPrice;
  discount = 0;

  //Select checked radio
  const userAge = parseInt(document.getElementById("age").value);

  //Discount conditions
  if (userAge < 18 ) {
    discount = finalPrice * 0.2;

    //debug
    console.log("Minorenne: " + finalPrice);
  } else if (userAge > 65) {
    discount = finalPrice * 0.4;

    //debug
    console.log("Over 65: " + finalPrice);
  }

  finalPrice -= discount;

  // OUTPUT
  return (document.getElementById("finalPrice").innerHTML =
    "Prezzo: € " + finalPrice.toFixed(2));
});

