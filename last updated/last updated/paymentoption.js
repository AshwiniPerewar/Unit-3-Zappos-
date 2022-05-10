import footer from "./components/footer.js"

document.getElementById("footer").innerHTML = footer()


document.getElementById("place-order-btn").addEventListener("click",checkDetails)
document.getElementById("place-order-btn-right").addEventListener("click",checkDetails)

let userAddressList = JSON.parse(localStorage.getItem("userAddressData")) || []

let cartData = JSON.parse(localStorage.getItem("CartData")) || []

let cartTotal = cartData.reduce(function(sum,element){
    return sum + (element.price);
},0)
let length = cartData.length;


if(length==1){
    document.getElementById("order-summary-value").append(" "+"("+length+"item"+")")
}
else{
    document.getElementById("order-summary-value").append(" "+"("+length+"items"+")")
}

document.getElementById("subtotal-price-value").innerText = "$"+cartTotal

document.getElementById("total-price-value").innerText = "$"+ cartTotal

document.getElementById("order-total-value").innerText = "$"+ cartTotal

document.getElementById("order-total-value-left").innerText = "Order Total:"+" "+"$"+cartTotal


function displayAddress(data){
    document.getElementById("shipping-info-box").innerHTML = null
    data.forEach((element)=>{
        
        let name = document.createElement("h3")
        name.innerText = element.name

        let address = document.createElement("p")
        address.innerText = element.address
        address.setAttribute("id","city-info-user")

        let city = document.createElement("p")
        city.innerText = element.city + ","

        let state = document.createElement("p")
        state.innerText = element.state
        state.style.marginRight = "5px"
        state.style.marginLeft = "2px"

        let mobile = document.createElement("p")
        mobile.innerText = element.mobile

        let div = document.createElement("div")
        div.append(city,state,mobile)
        div.setAttribute("id","set-user-info")

        document.getElementById("shipping-info-box").append(name,address,div)
    })
}
displayAddress(userAddressList) 

function checkDetails(){

    let userName = document.getElementById("card-name-user").value
    let cardNumber = document.getElementById("card-number-user").value
    let month = document.getElementById("month-card").value
    let year = document.getElementById("year-card").value

    if(userName ==null|| cardNumber==null|| month==null||year==null){
        alert("Enter all details")
        return
    }
    if(year<2022 || year==2022 && month<6){
        alert("Enter correct Month/Year")
        return
    }
    if(cardNumber.length<8){ 
        alert("Enter 8 digits Card Number")
        return
    }
    else{
        window.location.href = "otp.html"
    }
}



function displayCartProducts(data){

    data.forEach((element,index)=>{

        let div = document.createElement("div")
        div.style.display = "flex"


        let divImage = document.createElement("div")
        let divButton = document.createElement("div")
        let divInfo = document.createElement("div")


        let productImage = document.createElement("img")
        productImage.src = element.image;
        productImage.setAttribute("id", "productsettings")


        let brandName = document.createElement("p")
        brandName.innerText = element.brand;

        let productName = document.createElement("h4")
        productName.innerText = element.title

        let color = document.createElement("p")
        color.innerText = "Color:"+element.color

        let size = document.createElement("p")
        size.innerText = "Size:"+element.size

        let price = document.createElement("p")
        price.innerText = "$"+element.price

        let remove = document.createElement("button")
        remove.innerText = "Remove"
        remove.addEventListener("click",function(){

            removeItem(element,index)
        })

        divInfo.append(brandName,productName,color,size,price)
        divImage.append(productImage)
        divButton.append(remove)
        div.append(divImage,divInfo,divButton)
        document.getElementById("items-to-review").append(div)

    })
    
}
displayCartProducts(cartData)



function removeItem(element,index){
    cartData.splice(index,1);

    localStorage.setItem("CartData",JSON.stringify(cartData))
    window.location.reload("OTP.html")
}