//secound attempt




function getShopping(product, isIncrease, price){
  let productNumber = document.getElementById(product +"-quantity");
  let productNumberAmount = productNumber.value;

    if(isIncrease == true){
      productNumberAmount = parseInt(productNumberAmount) + 1;
    } else if(productNumberAmount > 0){
      productNumberAmount = parseInt(productNumberAmount) - 1;
    }
  productNumber.value = productNumberAmount;
  let phonePrice = document.getElementById(product+"-price");
  let productPrice = parseInt(productNumberAmount) * price;
  phonePrice.innerText = productPrice;
  shoppingTotalCost()

}

document.getElementById("phone-plus").addEventListener("click",function(){
  getShopping("phone", true, 1219);
})

document.getElementById("phone-minus").addEventListener("click",function(){
  getShopping("phone", false, 1219);
})

document.getElementById("casing-plus").addEventListener("click",function(){
  getShopping("casing", true,59);
})

document.getElementById("casing-minus").addEventListener("click",function(){
  getShopping("casing", false,59);
})


function getTotalBlance (product) {
  let productQuantity = document.getElementById(product +"-quantity");
  let productQuantityInNumber = productQuantity.value;
  return productQuantityInNumber;
}

function shoppingTotalCost(){
  const phoneTotalPrice = getTotalBlance("phone") * 1219;
  const casingTotalPrice = getTotalBlance("casing") * 59;
  const totalshippingWithoutTax = phoneTotalPrice + casingTotalPrice;
  const taxCount = totalshippingWithoutTax * .05;
  const totalshippingWithTax = totalshippingWithoutTax + parseInt(taxCount);
  document.getElementById("sub-total").innerText = totalshippingWithoutTax;
  document.getElementById("tax-count").innerText = parseInt(taxCount);
  document.getElementById("total-price").innerText = totalshippingWithTax;

}





























/*
//////////////first attempt

// phone price calclution
function getTotal (product){
  let productQuantity = document.getElementById(product +"-quantity");
  let productNumber =productQuantity.value;
  // console.log(productNumber);
   return productNumber;
}

function totalCalclution(){
  const phoneTotalPrice = getTotal("phone") * 1290;
  console.log(phoneTotalPrice);
  const casingTotalPrice = getTotal("casing") * 59;
  const totalShoppingWithoutTax = phoneTotalPrice + casingTotalPrice;
  const taxCount = totalShoppingWithoutTax * .05;
  const totalShoppingWithTax = totalShoppingWithoutTax + taxCount;
  document.getElementById("sub-total").innerText = totalShoppingWithoutTax;
  document.getElementById("tax-count").innerText = parseInt(taxCount);
  document.getElementById("total-price").innerText = totalShoppingWithTax;
}


function shopingBoard (product,isIncrease,price){
  let productQuantity = document.getElementById(product+"-quantity");
  let productQuantityValue = productQuantity.value 

  let productPriceInText = document.getElementById(product +"-price");

  if(isIncrease == true){
  productQuantityValue = parseInt(productQuantityValue) + 1;
  }
  else if(isIncrease == false && productQuantityValue > 0){
    productQuantityValue = parseInt(productQuantityValue) - 1;

  }
  productQuantity.value = productQuantityValue;
  productPriceInText.innerText = parseInt(productQuantityValue) * price;
  totalCalclution();
}





document.getElementById("phone-plus").addEventListener("click", function(){
  shopingBoard ("phone",true,1219); 

})

document.getElementById("phone-minus").addEventListener("click", function(){
  shopingBoard ("phone",false,1219);

})
// phone casing-price calclution

document.getElementById("casing-plus").addEventListener("click", function(){
  shopingBoard ("casing",true,59); 
 })
 
 document.getElementById("casing-minus").addEventListener("click", function(){
  shopingBoard ("casing",false,59);

 })

*/