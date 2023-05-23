
/*створення пошукового меню, гамбургер меню */

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
}

let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
}

window.onscroll = () => {
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
}

/*при натискані фотки збільшуються*/

let previewContainer = document.querySelector('.products-preview');
let previewBox = previewContainer.querySelectorAll('.preview');

document.querySelectorAll('.box-container .box').forEach(product => {
    product.onclick = () => {
        previewContainer.style.display = 'flex';
        let name = product.getAttribute('data-name');
        previewBox.forEach(preview => {
            let target = preview.getAttribute('data-target');
            if (name == target) {
                preview.classList.add('active');
            }
        });
    };
});

previewBox.forEach(close => {
    close.querySelector('.fa-times').onclick = () => {
        close.classList.remove('active');
        previewContainer.style.display = 'none';
    };
});

/*кнопка прокруту вгору при натискані*/

(function () {
    'use strict';

    function trackScroll() {
        let scrolled = window.pageYOffset;
        let coords = document.documentElement.clientHeight;

        if (scrolled > coords) {
            goTopBtn.classList.add('back_to_top-show');
        }
        if (scrolled < coords) {
            goTopBtn.classList.remove('back_to_top-show');
        }
    }

    function backToTop() {
        if (window.pageYOffset > 0) {
            window.scrollBy(0, -30);
            setTimeout(backToTop, 80);
        }
    }

    let goTopBtn = document.querySelector('.back_to_top');

    window.addEventListener('scroll', trackScroll);
    goTopBtn.addEventListener('click', backToTop);
})();

// попап при загрузці про рекламу
let dialog = document.querySelector('dialog');

let popUP = parseInt(localStorage.getItem('popu')) || 1;

function opDialog() {
    dialog.close();
    popUP = popUP + 1;
    localStorage.setItem('popu', popUP);
}

let closeDialog = document.getElementById("closeDialog");
let closeeDialog = document.getElementById("closeeDialog");

function showDialog() {
    dialog.show();
}
closeDialog.addEventListener('click', closDialog);

function closDialog() {
    dialog.close();
}

closeeDialog.addEventListener('click', opDialog);

if (popUP == 1) {
    window.onload = showDialog();
}
localStorage.clear();



/* вікно при запуску через вказаний час*/

let delay_popup = 10000;
let delay_popup1 = 15000;
setTimeout("document.getElementById('bg_popup').style.display='block'", delay_popup);
setTimeout("document.getElementById('close').style.display='block'", delay_popup1);


// поп ап на кнопці читати більше

//let popupBg = document.querySelector('.popup__bg');
//let popup = document.querySelector('.popupu');
//let openPopupButton = document.querySelector('.open-popup');
//let closePopupButton = document.querySelector('.close-popup');


//openPopupButton.addEventListener('click', (e) => {
//    e.preventDefault();
//    popupBg.classList.add('active');
//    popup.classList.add('active');
//});

//closePopupButton.addEventListener('click', () => {
//    popupBg.classList.remove('active');
//    popup.classList.remove('active');
//});

//document.addEventListener('click', (e) => {
//    if (e.target === popupBg) {
//        popupBg.classList.remove('active');
//        popup.classList.remove('active');
//    }
//});

// масив завантаження об'єктів

let coffees =
    [
        { name: 'Кава', information: 'rabitur ullamcorper. Magnis etiam dictumst curae facilisi id augue suspendisse, a magna integer viverra nunc po', photo: "img/blog-1.jpeg" },
        { name: 'Мокіято', information: 'Finibus suspendisse gravida mattis sociosqu phasellus eget porttitor duis at', photo: "img/blog-3.jpeg" },
        { name: 'Американо', information: 'Est ridiculus placerat turpis lectus potenti sociosqu inceptos fringilla ligula finibus', photo: "img/blog-2.jpeg" },
        { name: 'Еспресо', information: 'dignissim habitant consequat morbi per tempor vel cursus. Erat luctus montes integer ac viverra magnis magna', photo: "img/menu1.png" },
        { name: 'Капучино', information: 'per vehicula bibendum porttitor habitant sed ornare.', photo: "img/menu2.png" },
        { name: 'Латте', information: 'Est ridiculus placerat turpis lectus potenti sociosqu inceptos fringilla ligula finibus', photo: "img/menu3.png" },
        { name: 'Капучино', information: 'blandit, dignissim habitant consequat morbi per tempor vel cursus. Erat luctus montes integer ac viver', photo: "img/menu4.png" },
        { name: 'Шоколад', information: 'Nibh malesuada dignissim blandit id cursus ullamcorper sollicitudin egestas semper rutrum tristique', photo: "img/menu5.png" },
        { name: 'Американо', information: 'per vehicula bibendum porttitor habitant sed ornare.', photo: "img/menu6.png" },
        { name: 'Еспресо', information: 'dignissim habitant consequat morbi per tempor vel cursus. Erat luctus montes integer ac viverra magnis magna', photo: "img/about-img.jpeg" },
    ];

    let i = 0;
function emp() {
   
    let elem = document.getElementById("coffee");
    let n = Number(document.getElementById('number').value);
    console.log(n);
    if (n > i) {
        for (; i < n; i++) {
            let div = document.createElement("div");
            div.className = "coffee";
            div.innerHTML = `<img src=${coffees[i].photo}></img>`;
            div.innerHTML += `<h3 class="cof_name">${coffees[i].name}</h3>`;
            div.innerHTML += `<p class="additional">${coffees[i].information}</p`;
            elem.prepend(div);
        };
    }
    else if (n < i) {
        let b = i - n;
        i = n;
        console.log(i);
        for (; b > 0; b--) {
            var cof = document.querySelector('.coffee');
            cof.removeChild(cof.firstChild);
        };
      
    }
}

