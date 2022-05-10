var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("hmb2");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}




var cartData=(JSON.parse(localStorage.getItem("CartData")) || []);

var len=cartData.length

let total=cartData.reduce(function(sum,el,index,arr){
  return sum + Number(el.price);
  }, 0);

  console.log(total);


  document.querySelector("#ap_total").innerText=`Cart Subtotal (${len} Items) $${total}`;

  append(cartData);


// append function 

  function append(cartData)
  {
console.log(cartData);
  document.querySelector("#ap_cart").innerHTML=null;
  cartData.map(function(ele,index,arr){
  box=document.createElement("div");

  image=document.createElement("img");

  box2=document.createElement("div");
  box2.setAttribute("id","box2")
  box3=document.createElement("div");
  box3.setAttribute("id","box3");
  brand=document.createElement("p");
  name1=document.createElement("p");
  color=document.createElement("p");
  size=document.createElement("p");

  price=document.createElement("p");
  btn=document.createElement("button");
  
 
  image.src=ele.image;

  brand.innerText=ele.brand;
  name1.innerText=ele.title;
  color.innerText="Color: "+ele.color;
  size.innerText="Size:"+ele.size;
  box2.append(brand,name1,color,size);
  

 price.innerText="$"+ele.price;
  btn.innerText="Remove";
  

  box3.append(price,btn);
  
  
  box.append(image,box2,box3)

  document.querySelector("#ap_cart").append(box);

  btn.addEventListener("click",function()
  {
    alert("Item Removed");
    cartData.splice(index,1);
    localStorage.setItem("CartData",JSON.stringify(cartData));
    let Data=(JSON.parse(localStorage.getItem("CartData")) || []);
    let len=Data.length

    let total=Data.reduce(function(sum,el,index,arr){
  return sum + Number(el.price);
  }, 0);

  console.log(total);


  document.querySelector("#ap_total").innerText=`Cart Subtotal (${len} Items)  $${total}`;
  append(Data);
    
  });

});
}

document.querySelector("#ap_checkout").addEventListener("click",function()
{
  window.location.href="./checkout.html";
})