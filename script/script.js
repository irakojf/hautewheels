document.getElementById("venmoNoti").addEventListener("click", venmoNotification);

function venmoNotification (url) { 
    let accountName = document.getElementById("accountName").textContent;
    let amount = document.getElementById("fiatValue").textContent;
    Email.send({
        SecureToken : "8606ec61-1080-4b9a-8b96-12a46d9c9b51",
        To : 'irakojf@gmail.com',
        From : "hautewheels@proton.me",
        Subject : "Hautewheels Venmo Request - " + accountName,
        Body : accountName + " has triggered a Venmo request for " + amount + " ."
    }).then(
    message => alert("Ira will text you shortly :x")
    );
    reload();
}

document.getElementById("cryptoNoti").addEventListener("click", cryptoNotification);

function cryptoNotification (url) { 
    let accountName = document.getElementById("accountName").textContent;
    let amount = document.getElementById("ethValue").textContent;
    Email.send({
        SecureToken : "8606ec61-1080-4b9a-8b96-12a46d9c9b51",
        To : 'irakojf@gmail.com',
        From : "hautewheels@proton.me",
        Subject : "Hautewheels Crypto Request - " + accountName,
        Body : accountName + " has triggered a Crypto request for " + amount + " ."
    }).then(
    message => alert("Ira will text you shortly :x")
    );
    reload();
}

async function cryptoPriceChecker () { 
    // grab the amount of ethereum
    let eth = document.getElementById("ethValue").textContent;

    let key = "b356bf0263af5f62f752053ff71c82deab00b48c17d7b7afcd65615968aa4a3a";
    let url = "https://min-api.cryptocompare.com/data/pricemulti?fsyms=ETH&tsyms=USD&api_key=" + key; 

    // fetch the price of ethereum in the form of a JSON object
    let response = await fetch(url); 
    const responseText = await response.json(); 

    // multiply ETH by ETH price in USD
    fiatValue = responseText['ETH']['USD'] * eth;

    // format in USD
    fiatValueFormatted = "$" + Intl.NumberFormat('en-US').format(fiatValue);

    // update the innertext 
    document.getElementById("fiatValue").innerText = fiatValueFormatted;

    reload();
}

cryptoPriceChecker();