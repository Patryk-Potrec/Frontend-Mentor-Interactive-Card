const cardNumber = document.querySelector(".card-number");
const inputNumber = document.querySelector("#form-number");


inputNumber.addEventListener("input", e =>{
    const regex = /[^0-9]/g
    if(regex.test(e.target.value)){
        e.target.value = e.target.value.slice(0, e.target.value.length-1)
    }
    let newCardNumber = "";
    for(let i = 0; i < 16; i++){
        newCardNumber += e.target.value[i] || 0;
        if(i > 0 && i % 4 === 3) newCardNumber += " ";
    }
    cardNumber.textContent = newCardNumber;
})

