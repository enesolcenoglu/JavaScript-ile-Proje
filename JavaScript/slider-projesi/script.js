let models = [
    {
        name: "TOGG TX10",
        image: "img/tog-suv-1.jpg",
    },
    {
        name: "RENAULT CLİO",
        image: "img/clio.jpg",
    },
    {
        name: "BUGATTİ CHİRON",
        image: "img/bugatti.jpg"
    },
    {
        name: "PEUGEOT 208",
        image: "img/208.jpg"
    },
    {
        name: "PEUGEOT 408",
        image: "img/408.jpg"
    },
    {
        name: "RENAULT CLİO",
        image: "img/2503_b.jpg",
    },
    {
        name: "BUGATTİ CHİRON",
        image: "img/23084.jpg"
    }
];

let index = 0;
let slaytCount = models.length;
let index2 = 0;
let slaytCount2 = models.length;

function showSlide(i, className1, className2) {
    console.log(document.querySelector(className1).innerText);
    document.querySelector(className1).innerText = models[i].name;
    document.querySelector(className2).setAttribute("src", models[i].image);
}

document.querySelector(".first-left").addEventListener("click", function () {
    index--;
    if (index < 0) {
        index = slaytCount - 1;
    }
    showSlide(index, '.card-title', '.card-img-top');
    console.log(index);
});

document.querySelector(".first-right").addEventListener("click", function () {
    index++;
    if (index >= slaytCount) {
        index = 0;
    }
    showSlide(index, '.card-title', '.card-img-top');
    console.log(index);
});

document.querySelector(".secondary-left").addEventListener("click", function () {
    index2--;
    if (index2 < 0) {
        index2 = slaytCount2 - 1;
    }
    showSlide(index2, '.title-2', '.img-top-2');
    console.log(index2);
});

document.querySelector(".secondary-right").addEventListener("click", function () {
    index2++;
    if (index2 >= slaytCount2) {
        index2 = 0;
    }
    showSlide(index2, '.title-2', '.img-top-2');
    console.log(index2);
});
