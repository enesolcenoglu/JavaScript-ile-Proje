const submitButton = document.getElementById('submit-button');
const number=document.getElementById('number');
const romanNumber=document.getElementById('roman-number');

submitButton.addEventListener('click', function (e) {
    e.preventDefault();
    console.log("fonksiyon başladı: ",number.value)
    if(number.value === "1"){
        romanNumber.value="I";
    }
    if(number.value === "2"){
        romanNumber.value="II";
    }
    if(number.value === "3"){
        romanNumber.value="III";
    }
    if(number.value === "4"){
        romanNumber.value="IV";
    }
    if(number.value === "5"){
        romanNumber.value="V";
    }
    if(number.value === "6"){
        romanNumber.value="VI";
    }
    if(number.value === "7"){
        romanNumber.value="VII";
    }
    if(number.value === "8"){
        romanNumber.value="VIII";
    }
    if(number.value === "9"){
        romanNumber.value="IX";
    }
    if(number.value === "10"){
        romanNumber.value="X";
    }
    console.log("fonksiyon bitti: ",number.value)

})