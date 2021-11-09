const carOrdersArray = JSON.parse(localStorage.getItem("carOrdersArray")) || [];
const cartDisplay =document.getElementById("cartDisplay");
console.log(carOrdersArray)

const displayCart = function() {
    if(carOrdersArray.length === 0){
        let div = document.createElement("div")
        div.classList.add("text-xl","m-2", "flex", "flex-col")
        div.innerHTML = `<h4 class="mb-4">You have no items in your cart.</h4> <a href="/" class="self-center hover:bg-yellow-300 rounded w-6/12 text-center p-2"> <button> Continue shopping.</button></a?`
        cartDisplay.append(div)
    }else{
        addToCart();
    }
}

function addToCart (){
    for(let i = 0; i < carOrdersArray.length; i++){
        let carObj = carOrdersArray[i];
       let cartItem = document.createElement("div")
       cartItem.classList.add("flex")
         cartItem.innerHTML = `
            <div class="flex"><img class="w-6/12 mb-2" src=${carObj.img}>
            <ul class="text-xs md:text-lg self-center">
            <li>${carObj.model}</li>
            <li id="color">Color: ${carObj.exteriorColor}</li>
             <li id="interiorColor">Interior: ${carObj.interiorColor}</li>
             <li id="wheels">Wheels: ${carObj.wheel}</li>
         </ul>
 </div>
    <div class="self-center mr-8"><label class="flex">Qty: <input id="qtyNumber" type="number" value="1" min="1" max="5" class="ml-2" ></label></div>
    <div class="self-center mr-4">${carObj.price}</div>  
`   

   cartDisplay.appendChild(cartItem)
    }
}
displayCart()
// const carDesc = document.querySelector(".car-desc")
// let cartRow = document.createElement("table");
//     cartRow.classList.add("table-auto,m-2")
//     cartRow.innerHTML =`<thead class="text-sm md:text-xl">
//     <tr>
//     <th class="text-left text-lg p-2">Product</th>
//      <th></th>
//  </tr>
// </thead>
// <tbody class="tBody"></tbody>`


// function addToCart(exteriorColorChoice, interiorColorChoice, wheelChoice){
//     location.assign("/cart")
//     let cartItem = ` <tr>
//     <td class="flex"><img class="w-6/12 mb-2" src="/images/black-car.jpg">
//          <ul class="text-xs md:text-lg self-center car-desc">
//          <li>Color: ${exteriorColorChoice}</li>
//          <li>Interior: ${interiorColorChoice}</li>
//          <li>Wheels:${wheelChoice}</li>
//      </ul>
//  </td>
//     <td><label class="flex">Qty: <input type="number" value="1" min="1" max="5" class="ml-2" ></label></td>
//     <td>$100000</td>  
// </tr>`
// cartRow.append(cartItem)
// }


