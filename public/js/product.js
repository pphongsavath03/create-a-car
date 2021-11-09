const orderButtonHandler = document.getElementById("place-order");
const exteriorColorChoice = document.querySelector("#ext-color-choice");
const interiorColorChoice = document.querySelector("#int-color-choice");
const wheelChoice = document.querySelector("#wheel-choice");
const carPrice = document.querySelector(".carPrice")
const carModel = document.querySelector(".carSpec")
const carImg = document.querySelector("#productImg")
const carObj = {};
const carOrdersArray = JSON.parse(localStorage.getItem("carOrdersArray")) || [];

function carOption(){
   carObj.exteriorColor = exteriorColorChoice.value;
   carObj.interiorColor = interiorColorChoice.value;
   carObj.wheel = wheelChoice.value;
   carObj.price = carPrice.textContent.trim();
   carObj.model = carModel.textContent.trim();
   carObj.img = carImg.getAttribute("src")
   carOrdersArray.push(carObj)
   localStorage.setItem("carOrdersArray", JSON.stringify(carOrdersArray))
   console.log(carObj)
   location.assign('/cart')

}

orderButtonHandler.addEventListener("click", carOption)