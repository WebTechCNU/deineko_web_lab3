
function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');
    if (productNumbers) {
        document.querySelector('.cart span').textContent = productNumbers;
    }
}

function cartNumbers(product, action) {
    console.log("ososos");
    let productNumbers = localStorage.getItem('cartNumbers');

    productNumbers = parseInt(productNumbers);

    let cartItems = localStorage.getItem('productsInCart');

    cartItems = JSON.parse(cartItems);

    if (action == "decrease") {
        localStorage.setItem('cartNumbers', productNumbers - 1);
        document.querySelector('.cart span').textContent = productNumbers - 1;
    }
    else if (productNumbers) {
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('.cart span').textContent = productNumbers + 1;
    } else {
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.cart span').textContent = 1;
    }

    //if (productNumbers) {
    //    localStorage.setItem('cartNumbers', productNumbers + 1);
    //    document.querySelector('.cart span').textContent = productNumbers + 1;
    //}
    //else {
    //    localStorage.setItem('cartNumbers', 1);
    //    document.querySelector('.cart span').textContent = 1;
    //}

    setItems(product);
}

function setItems(products2) {
    let cartItems = localStorage.getItem('productsInCart');

    cartItems = JSON.parse(cartItems);
    console.log('TYT ', blac);

    if (cartItems != null) {
        if (cartItems[products2.tag] == undefined) {
            cartItems = {
                ...cartItems,
                [products2.tag]: products2
            }
        }
        cartItems[products2.tag].inCart += 1;
    }
    else {
        products2.inCart = 1;
        cartItems = {
            [products2.tag]: products2
        }
    }

    localStorage.setItem('productsInCart', JSON.stringify(cartItems));
}

function totalCost(product, action) {

    let cartCost = localStorage.getItem('totalCost');

    if (action == 'decrease') {
        cartCost = parseInt(cartCost);

        localStorage.setItem('totalCost', cartCost - product.price);
    }
    else if (cartCost != null) {
        cartCost = parseInt(cartCost);
        localStorage.setItem('totalCost', cartCost + product.price);
    }
    else {
        localStorage.setItem('totalCost', product.price);
    }
}

function displayCart() {
    let cartItems = localStorage.getItem('productsInCart');

    cartItems = JSON.parse(cartItems);
    let productContainer = document.querySelector('.products');
    let cartCost = localStorage.getItem('totalCost');

    if (cartItems && productContainer) {
        productContainer.innerHTML = '';
        Object.values(cartItems).map(item => {
            productContainer.innerHTML += `
               <div class="product">
                  <ion-icon name="close-circle-outline" class="close-circle-outline"></ion-icon>
                  <img src=" ./img/${item.tag}.png">
                  <span>${item.name}</span>
               </div>
               <div class="price">₴${item.price},00</div>
               <div class="quantity">
               <ion-icon class="caret-back-outline" name="caret-back-outline"></ion-icon>
               <span>${item.inCart}</span>
               <ion-icon class="caret-forward-outline" name="caret-forward-outline"></ion-icon>
               </div>
               <div class="total">
               ₴${item.inCart * item.price},00
               </div>
             `;
        });

        productContainer.innerHTML += `
               <div class = " basketTotalContainer">
                 <h4 class= "basketTotalTitle">Загальна Сума</h4>
                 <h4 class= "basketTotal">₴${cartCost},00</h4>
               </div>
            `
    }
    deleteButtons();
    manageQuantity();
}




function deleteButtons() {
    let deleteButtons = document.querySelectorAll('.product ion-icon');

    let productName;
    let productNumbers = localStorage.getItem('cartNumbers');
    let cartItems = localStorage.getItem('productsInCart');

    cartItems = JSON.parse(cartItems);
    console.log(cartItems);
    let cartCost = localStorage.getItem('totalCost');


    for (let i = 0; i < deleteButtons.length; i++) {
        deleteButtons[i].addEventListener('click', () => {
            productName = deleteButtons[i].parentElement.textContent.trim().toLowerCase().replace(/ /g, '');
            console.log(productName);

            localStorage.setItem('cartNumbers', productNumbers - cartItems[productName].inCart);

            localStorage.setItem('totalCost', cartCost - (cartItems[productName].price * cartItems[productName].inCart));

            delete cartItems[productName];
            localStorage.setItem('productsInCart', JSON.stringify(cartItems));

            displayCart();
            onLoadCartNumbers();
        })
    }
}

function manageQuantity() {
    let decreaseButtons = document.querySelectorAll('.caret-back-outline');
    let increaseButtons = document.querySelectorAll('.caret-forward-outline');
    let cartItems = localStorage.getItem('productsInCart');
    let currentQuantity = 0;
    let currentProduct = "";

    cartItems = JSON.parse(cartItems);

    for (let i = 0; i < decreaseButtons.length; i++) {
        decreaseButtons[i].addEventListener('click', () => {
            currentQuantity = decreaseButtons[i].parentElement.querySelector('span').textContent;
            console.log(currentQuantity);
            currentProduct = decreaseButtons[i].parentElement.previousElementSibling.previousElementSibling.querySelector('span').textContent.toLowerCase().replace(/ /g, '').trim();
            console.log(currentProduct);
            if (cartItems[currentProduct].inCart > 1) {
                cartItems[currentProduct].inCart -= 1;
                cartNumbers(cartItems[currentProduct], "decrease");
                totalCost(cartItems[currentProduct], "decrease");
                localStorage.setItem('productsInCart', JSON.stringify(cartItems));

                displayCart();
            }

        });
    }

    for (let i = 0; i < increaseButtons.length; i++) {
        increaseButtons[i].addEventListener('click', () => {
            currentQuantity = increaseButtons[i].parentElement.querySelector('span').textContent;
            console.log(currentQuantity);
            currentProduct = increaseButtons[i].parentElement.previousElementSibling.previousElementSibling.querySelector('span').textContent.toLowerCase().replace(/ /g, '').trim();
            console.log(currentProduct);


            cartItems[currentProduct].inCart += 1;
            cartNumbers(cartItems[currentProduct]);
            totalCost(cartItems[currentProduct]);
            localStorage.setItem('productsInCart', JSON.stringify(cartItems));
            displayCart();

        });
    }
    onLoadCartNumbers();
    displayCart();
};


$(document).on("change", ".price-sorting", function () {

    var sortingMethod = $(this).val();

    if (sortingMethod == 'l2h') {
        UpCart();
    }
    else if (sortingMethod == 'h2l') {
        DpCard();
    }
    else if (sortingMethod == 'h1') {
        console.log("classic")
        ClassicCard();
    }

});



let products2;


function addclickcart() {
    let carts = document.querySelectorAll('.add-cart');
    for (let i = 0; i < carts.length; i++) {
        carts[i].addEventListener('click', () => {
            cartNumbers(products2[i]);
            totalCost(products2[i])
        })
    }
}

function DpCard() {
    CleanElem();
    let elem = document.getElementById("container");
    products2 = products1.slice().sort((a, b) => b.price - a.price)
    for (let i = 0; i < products2.length; i++) {
        let det = document.createElement("div");
        det.className = 'image';
        det.innerHTML = `<img src=" ./img/${products2[i].tag}.png">`;
        det.innerHTML += `<h3>${products2[i].name}</h3>`;
        det.innerHTML += `<h3>${products2[i].price}</h3>`;
        det.innerHTML += `<a class='add-cart cart${[i]}'>Додати в корзину</a>`;
        elem.append(det);
    };
    addclickcart();
}

function UpCart() {
    CleanElem();
    let elem = document.getElementById("container");
    products2 = products1.slice().sort((a, b) => a.price - b.price)
    for (let i = 0; i < products2.length; i++) {
        let det = document.createElement("div");
        det.className = 'image';
        det.innerHTML = `<img src=" ./img/${products2[i].tag}.png">`;
        det.innerHTML += `<h3>${products2[i].name}</h3>`;
        det.innerHTML += `<h3>${products2[i].price}</h3>`;
        det.innerHTML += `<a class='add-cart cart${[i]}'>Додати в корзину</a>`;
        elem.append(det);
    };
    addclickcart();
}

function ClassicCard() {
    CleanElem();
    let elem = document.getElementById("container");
    products2 = products1.slice();
    for (let i = 0; i < products2.length; i++) {
        let det = document.createElement("div");
        det.className = 'image';
        det.innerHTML = `<img src=" ./img/${products2[i].tag}.png">`;
        det.innerHTML += `<h3>${products2[i].name}</h3>`;
        det.innerHTML += `<h3>${products2[i].price}</h3>`;
        det.innerHTML += `<a class='add-cart cart${[i]}'>Додати в корзину</a>`;
        elem.append(det);
    };
    addclickcart();
}

function CleanElem() {
    let elem = document.getElementById("container");
    while (elem.firstChild) {
        elem.removeChild(elem.firstChild);
    }
}
function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');
    if (productNumbers) {
        document.querySelector('.cart span').textContent = productNumbers;
    }
}
window.onload = ClassicCard();
window.onload = onLoadCartNumbers();