async function submitPromoCode(purchase_id) {
    let api = "https://8vc8x8ak9k.execute-api.us-east-1.amazonaws.com/v1/cars?id=" + purchase_id;

    fetch(api)
    .then( 
        async (response) => {
            // get json response here            
            let data = await response.json();
            if (response.status === 200) {
                console.log(response.status);
                location.assign("." + data + purchase_id + ".html"); // location assign 
            } else {
                console.log(response.status);
                console.log("Incorrect purchase ID");
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

document.getElementById('promo').addEventListener('keydown', function(event) { 
    if (event.code === 'Enter') {
        console.log('listening');
        listenFormSubmit();     
    }
})