const btnHam = document.querySelector('.ham-btn');
const btnTimes = document.querySelector('.times-btn');
const navBar = document.getElementById('nav-bar');

btnHam.addEventListener('click', function () {
    if (btnHam.className !== "") {
        btnHam.style.display = "none";
        btnTimes.style.display = "block";
        navBar.classList.add("show-nav");
    }
})

btnTimes.addEventListener('click', function () {
    if (btnHam.className !== "") {
        this.style.display = "none";
        btnHam.style.display = "block";
        navBar.classList.remove("show-nav");
    }
})



let news = [
    { title: 'Чай чи кава?', url: "img/blog-1.jpeg", info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, repudiandae mollitia. Aspernatur architecto facilis obcaecati eum minus, natus quia dolores distinctio, nulla provident eveniet enim, similique corporis a vitae cupiditate.', date: new Date('2018-06-28') },
    { title: 'Кава в Парижі?', url: "img/blog-2.jpeg", info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, eveniet ab fuga corrupti consectetur facere aliquid recusandae praesentium beatae quasi soluta rem voluptate pariatur sint blanditiis ipsam sed ullam. Magnam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, eveniet ab fuga corrupti consectetur facere aliquid recusandae praesentium beatae quasi soluta rem voluptate pariatur sint blanditiis ipsam sed ullam. Magnam.', date: new Date('2022-02-10') },
    { title: 'Де найдорожча кава?', url: "img/blog-3.jpeg", info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, eveniet ab fuga corrupti consectetur facere aliquid recusandae praesentium beatae quasi soluta rem voluptate pariatur sint blanditiis ipsam sed ullam. Magnam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, eveniet ab fuga corrupti consectetur facere aliquid recusandae praesentium beatae quasi soluta rem voluptate pariatur sint blanditiis ipsam sed ullam. Magnam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, eveniet ab fuga corrupti consectetur facere aliquid recusandae praesentium beatae quasi soluta rem voluptate pariatur sint blanditiis ipsam sed ullam. Magnam.', date: new Date('2020-06-22') },
    { title: 'Пий тільки цю каву!', url: "img/about-img.jpeg", info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, eveniet ab fuga corrupti consectetur facere aliquid recusandae praesentium beatae quasi soluta rem voluptate pariatur sint blanditiis ipsam sed ullam. Magnam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, eveniet ab fuga corrupti consectetur facere aliquid recusandae praesentium beatae quasi soluta rem voluptate pariatur sint blanditiis ipsam sed ullam. Magnam.', date: new Date('2021-01-12') },
    { title: 'Бразильська кава', url: "img/home-img.jpeg", info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, eveniet ab fuga corrupti consectetur facere aliquid recusandae praesentium beatae quasi soluta rem voluptate pariatur sint blanditiis ipsam sed ullam. Magnam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, eveniet ab fuga corrupti consectetur facere aliquid recusandae praesentium beatae quasi soluta rem voluptate pariatur sint blanditiis ipsam sed ullam. Magnam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, eveniet ab fuga corrupti consectetur facere aliquid recusandae praesentium beatae quasi soluta rem voluptate pariatur sint blanditiis ipsam sed ullam. Magnam.', date: new Date('2017-03-27') },
    { title: 'Кавові боби з Нікарагуа?', url: "img/home-img.jpeg", info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, eveniet ab fuga corrupti consectetur facere aliquid recusandae praesentium beatae quasi soluta rem voluptate pariatur sint blanditiis ipsam sed ullam. Magnam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, eveniet ab fuga corrupti consectetur facere aliquid recusandae praesentium beatae quasi soluta rem voluptate pariatur sint blanditiis ipsam sed ullam. Magnam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, eveniet ab fuga corrupti consectetur facere aliquid recusandae praesentium beatae quasi soluta rem voluptate pariatur sint blanditiis ipsam sed ullam. Magnam.', date: new Date('2021-01-21') },
    { title: 'Які кавові апарати найкращі?', url: "img/home-img.jpeg", info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, eveniet ab fuga corrupti consectetur facere aliquid recusandae praesentium beatae quasi soluta rem voluptate pariatur sint blanditiis ipsam sed ullam. Magnam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, eveniet ab fuga corrupti consectetur facere aliquid recusandae praesentium beatae quasi soluta rem voluptate pariatur sint blanditiis ipsam sed ullam. Magnam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, eveniet ab fuga corrupti consectetur facere aliquid recusandae praesentium beatae quasi soluta rem voluptate pariatur sint blanditiis ipsam sed ullam. Magnam.', date: new Date('2019-06-27') },
]


const sortednews = news.slice().sort((a, b) => b.date - a.date);

ShowElem();

function ShowElem() {
    let elem = document.getElementById("newsid");
    for (var i = 0; i < news.length; i++) {
        let div = document.createElement("div");
        elem.style.display = "inline-block";
        div.className = `newss`;
        div.id = `${[i]}`;
        div.innerHTML = `<h1 id=${[i]}>${sortednews[i].title}</h1>`;
        div.innerHTML += `<p id=${[i]}>${sortednews[i].info}</p>`;
        div.innerHTML += `<h3 id=${[i]}>${sortednews[i].date.toLocaleDateString()}</h3>`;

        firstelem = elem.firstElementChild;
        elem.appendChild(div, firstelem);

    };
}
let col = document.querySelector(".col");
let divc = document.querySelector(".newslist");

function UpDat(event) {
    target = event.target;
    console.log(event.target.id)
    if (target) {
        document.getElementById("data1").innerHTML = `${sortednews[target.id].date.toLocaleDateString()}`;
        document.getElementById("h1").innerHTML = `${sortednews[target.id].title}`;
        document.getElementById("img1").src = `${sortednews[target.id].url}`;
        document.getElementById("p1").innerHTML = `${sortednews[target.id].info}`;
    }
}
divc.addEventListener('click', UpDat);

let news1 = [
    { title: 'Перу чи Індія', info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, repudiandae mollitia. Aspernatur architecto facilis obcaecati eum minus, natus quia dolores distinctio, nulla provident eveniet enim, similique corporis a vitae cupiditate.Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, eveniet ab fuga corrupti consectetur facere aliquid recusandae praesentium beatae quasi soluta rem voluptate pariatur sint blanditiis ipsam sed ullam. Magnam.', date: new Date('2019-06-28') },
    { title: 'Скандинавська Кава?', info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, eveniet ab fuga corrupti consectetur facere aliquid recusandae praesentium beatae quasi soluta rem voluptate pariatur sint blanditiis ipsam sed ullam. Magnam.Lorem ipsum dolor sit amet consectetur adipisicing elit. ', date: new Date('2021-06-19') },
    { title: 'Кава Італії', info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, eveniet ab fuga corrupti consectetur facere aliquid recusandae praesentium beatae quasi soluta rem voluptate pariatur sint blanditiis ipsam sed ullam. Magnam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, eveniet ab fuga corrupti consectetur facere aliquid recusandae praesentium beatae quasi soluta rem voluptate pariatur sint blanditiis ipsam sed ullam. Magnam.', date: new Date('2017-06-22') },
    { title: 'Як приготувати найсмачнішу каву', info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, eveniet ab fuga corrupti consectetur facere aliquid recusandae praesentium beatae quasi soluta rem voluptate pariatur sint blanditiis ipsam sed ullam. Magnam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, eveniet ab fuga corrupti consectetur facere aliquid recusandae praesentium beatae quasi soluta rem voluptate pariatur sint blanditiis ipsam sed ullam. Magnam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, eveniet ab fuga corrupti consectetur facere aliquid recusandae praesentium beatae quasi soluta rem voluptate pariatur sint blanditiis ipsam sed ullam. Magnam.', date: new Date('2020-04-12') },
    { title: 'Цікаві смаколики до кави', info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, eveniet ab fuga corrupti consectetur facere aliquid recusandae praesentium beatae quasi soluta rem voluptate pariatur sint blanditiis ipsam sed ullam. Magnam.', date: new Date('2016-03-27') },
    { title: 'Кава Бразилії', info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, eveniet ab fuga corrupti consectetur facere aliquid recusandae praesentium beatae quasi soluta rem voluptate pariatur sint blanditiis ipsam sed ullam. Magnam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, eveniet ab fuga corrupti consectetur facere aliquid recusandae praesentium beatae quasi soluta rem voluptate pariatur sint blanditiis ipsam sed ullam. Magnam.', date: new Date('2018-11-17') },
]
const sortednews1 = news1.slice().sort((a, b) => b.date - a.date);
ShowElem1();

function ShowElem1() {
    let elem = document.getElementById("newsid1");
    for (var i = 0; i < news1.length; i++) {
        let div = document.createElement("div");
        elem.style.display = "inline-block";
        div.className = `newsss`;
        div.id = `${[i]}`;
        div.innerHTML = `<h1 id=${[i]}>${sortednews1[i].title}</h1>`;
        div.innerHTML += `<p id=${[i]}>${sortednews1[i].info}</p>`;
        div.innerHTML += `<h3 id=${[i]}>${sortednews1[i].date.toLocaleDateString()}</h3>`;

        firstelem = elem.firstElementChild;
        elem.appendChild(div, firstelem);

    };
}

let col1 = document.querySelector(".col1");
let divc1 = document.querySelector(".newslist1");

function UpDat1(event) {
    target = event.target;
    console.log(event.target.id)
    if (target) {
        document.getElementById("data2").innerHTML = `${sortednews1[target.id].date.toLocaleDateString()}`;
        document.getElementById("h2").innerHTML = `${sortednews1[target.id].title}`;
        document.getElementById("p2").innerHTML = `${sortednews1[target.id].info}`;
    }
}
divc1.addEventListener('click', UpDat1);






