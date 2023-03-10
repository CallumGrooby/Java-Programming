const body = document.querySelector('.list');

fetch('http://localhost:3000/')
    .then(response => response.json())
    .then(data => {
        
        data.forEach(element => {
            console.log(element.product_name);
            var text = `<li><h1>${element.product_name} $ ${element.price}
            <img src = "images/${element.image_path}.png"      width="400" 
            height="500"/>
            </h1></li>`;
            body.innerHTML += text;
        });
    });