fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Ctether%2Cethereum%2Clitecoin%2Ccardano%2Cdogecoin%2Cbinancecoin%2Cpolkadot&vs_currencies=usd&include_24hr_change=true') //gets the data from coin gecko and stores it into a json file
    .then(res => res.json())
    .then(json =>{
        //Reads the json file

        const container = document.querySelector('.crypto-container');
        const coins = Object.getOwnPropertyNames(json);
        //Gets all the coins that are stored in the json file

        for(let coin of coins) //filters through each coin and adds them to the html file
        {
            const coinInfo = json[`${coin}`];
            const price = coinInfo.usd;
            const change = coinInfo.usd_24h_change.toFixed(5);

            container.innerHTML += `
                <div class = "coin ${change <0 ? 'falling' : 'rising'}">
                    <div class = "coin-logo">
                        <img src = images/${coin}.png>
                    </div>

                    <div class = "coin-name">
                        <h3>${coin}</h3>
                        <span>/USD</span>
                    </div>

                    <div class = "coin-price">
                        <span class="price">$${price}</span>
                        <span class="change">${change}</span>
                    </div>
                </div>
            `;
        }
})
