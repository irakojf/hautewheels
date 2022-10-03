async function submitPromoCode(purchaseID) {
    console.log(purchaseID); 
    var purchaseInputField = document.getElementById("promo");
    purchaseInputField.classList.remove("invalid");
    const regex = /\D/g;
    let regexPurchaseID = purchaseID.toString().replaceAll(regex, '');
    console.log(regexPurchaseID); 
    let api = "https://8vc8x8ak9k.execute-api.us-east-1.amazonaws.com/v1/cars?id=" + regexPurchaseID;

    fetch(api)
    .then( 
        async (response) => {
            // get json response here            
            let data = await response.json();
            if (response.status === 200) {
                console.log(response.status);
                location.assign("." + data + regexPurchaseID + ".html"); // location assign 
            } else {
                console.log(response.status);
                console.log("Incorrect purchase ID");
                shake(); // call the shake function
            }
        })
        .catch((err) => {
            console.log(err);
        })
    }
    

function listenFormSubmit() {
    // use regex to filter out for numbers only
    var numberPattern = /\d+/g;
    var purchase_id = document.getElementById('promo').value;
    purchase_id = purchase_id.match(numberPattern);
    submitPromoCode(purchase_id);
}


// Event listener for when the user hits enter on mobile
document.getElementById('promo').addEventListener('keydown', function(event) { 
    if (event.code === 'Enter') {
        console.log('listening');
        listenFormSubmit();     
    }
})

// Event listener for when the text input enters blur mode / keyboard closes on mobile
document.getElementById('promo').addEventListener('blur', function() {
    console.log('listening');
    listenFormSubmit();     
})


function shake() { 
    // console.log('calling shake')
    var purchaseInputField = document.getElementById("promo");
    purchaseInputField.classList.add("invalid");
}