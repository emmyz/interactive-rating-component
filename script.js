const container = document.querySelector(".container");
const ratingState = document.querySelector(".rating-state");
const thankState = document.querySelector(".thank-state");

const ratings = ratingState.querySelector(".ratings");
const btn1 = ratings.querySelector("#btn1");
const btn2 = ratings.querySelector("#btn2");
const btn3 = ratings.querySelector("#btn3");
const btn4 = ratings.querySelector("#btn4");
const btn5 = ratings.querySelector("#btn5");
const submitBtn = document.querySelector(".submit-btn");

const ratingText = thankState.querySelector(".rating-text");

var ratingValue;

btn1.addEventListener("click",(e)=>{
    ratingValue = document.getElementById("btn1").value;
})
btn2.addEventListener("click",(e)=>{
    ratingValue = document.getElementById("btn2").value;
})
btn3.addEventListener("click",(e)=>{
    ratingValue = document.getElementById("btn3").value;
})
btn4.addEventListener("click",(e)=>{
    ratingValue = document.getElementById("btn4").value;
})
btn5.addEventListener("click",(e)=>{
    ratingValue = document.getElementById("btn5").value;
})

submitBtn.addEventListener("click",()=>{
    ratingState.classList.add("active");
    thankState.classList.add("active");

    ratingText.innerHTML = `You selected ${ratingValue} out of 5`;
})
