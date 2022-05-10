
import footer from "./components/footer.js"

document.getElementById("footer").innerHTML = footer()

let cartData = JSON.parse(localStorage.getItem("CartData")) || []

let cartTotal = cartData.reduce(function(sum,element){
    return sum + Number(element.price);
},0)
let length = cartData.length;

document.getElementById("order-total-value").innerText = "$"+cartTotal

if(length==1){
    document.getElementById("order-summary-value").append(" "+"("+length+"item"+")")
}
else{
    document.getElementById("order-summary-value").append(" "+"("+length+"items"+")")
}

document.getElementById("subtotal-price-value").innerText = "$"+cartTotal

document.getElementById("total-price-value").innerText = "$"+ cartTotal

document.getElementById("order-total-value-left").innerText =  "Order Total:"+"$"+ cartTotal



function createObj(country,nameuser,address,city,state,zipcode,mobile){
    this.country = country
    this.name = nameuser
    this.address = address
    this.city = city
    this.state = state
    this.zipcode = zipcode
    this.mobile = mobile
}

document.getElementById("address-form").addEventListener("submit",addAddress)

let userAddressList = JSON.parse(localStorage.getItem("userAddressData")) || []

function addAddress(event){
    console.log("inside")
    event.preventDefault()
    
    let country = document.getElementById("country-select").value
    let userName = document.getElementById("full-name").value
    let address = document.getElementById("address-user").value
    let city = document.getElementById("city-user").value
    let state = document.getElementById("state-user").value
    let zip = document.getElementById("zip-code-user").value
    let mobile = document.getElementById("mobile-user").value

    if(userName==null || address == null || city==null|| state==null|| zip ==null||mobile.length <10){
        alert("Enter Complete Information")
    }
    else{
        let userdata = new createObj(country,userName,address,city,state,zip,mobile)
        if(userAddressList.length == 0){
            userAddressList.push(userdata)
            localStorage.setItem("userAddressData",JSON.stringify(userAddressList))
            displayAddress(userAddressList)
            window.location.href = "paymentoption.html"
        }
        localStorage.setItem("userAddressData",JSON.stringify(userAddressList))
            displayAddress(userAddressList)
            window.location.href = "paymentoption.html"
    }
  
}

function displayAddress(data){
    document.getElementById("shipping-info-box").innerHTML = null
    data.forEach((element)=>{
        
        let name = document.createElement("h3")
        name.innerText = element.name

        let address = document.createElement("p")
        address.innerText = element.address

        let city = document.createElement("p")
        city.innerText = element.city

        let state = document.createElement("p")
        state.innerText = element.state

        let mobile = document.createElement("p")
        mobile.innerText = element.mobile

        let div = document.createElement("div")
        div.append(city,state,mobile)

        document.getElementById("shipping-info-box").append(name,address,div)
    })
}

function paymentDetails(){
    
    document.getElementById("payment-option").innerHTML = null
    let option = document.createElement("h3")
    option.innerText = "credit card"

    let div = document.createElement("div")

    let cardName = document.createElement("input")
    cardName.placeholder = "Name on Card"
    cardName.setAttribute("class","set-details-payment")

    let cardNumber = document.createElement("input")
    cardNumber.placeholder = "Card Number"
    cardName.setAttribute("class","set-details-payment")

    let month = document.createElement("input")
    month.placeholder = "Month"

    let Year = document.createElement("input")
    Year.placeholder = "Year"

    div.append(month,Year)
    document.getElementById("payment-option").append(option,cardName,cardNumber,div)

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
        productImage.setAttribute("id", "productsetting")

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
    window.location.reload()
}