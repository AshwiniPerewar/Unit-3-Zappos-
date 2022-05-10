function changepage(img){
    console.log(img)

    let div = document.getElementById("sidedbar");
    div.innerHTML=null
    let img1 = document.createElement("img")
    img1.src= `${img}`
    div.append(img1)

}

const productArray=JSON.parse(localStorage.getItem("product")) ||[];

console.log(productArray);

function append(ele){
    let sidedbar=document.getElementById("sidedbar");
        let img=document.createElement("img");
        img.src=ele.image;
    sidedbar.append(img);    
    let sideone=document.getElementById("sideone");

        let div=document.createElement("div");

            let brand=document.createElement("h3");
            brand.innerText=ele.brand;
            let price=document.createElement("h3");
            price.innerText=`$ ${ele.price}`;
            price.id="price";
            let title=document.createElement("p");
            title.innerText=ele.title;

            let p=document.createElement("p");
            p.innerText="or 4 interest-free payments of $21.24 with ";
            p.style.color="grey";

            let color=document.createElement("p");
            color.innerText=`Color: ${ele.color}`;

            let p2=document.createElement("p");
            p2.innerText="Women's Sizes: US Sizing Standard"
            let div1=document.createElement("div");
            div1.id="size";
            ele.size.map(function (e){
                let size=document.createElement("p");
                size.innerText=e;

                div1.append(size);
            })

            let cart={
            image:ele.image,
            brand:ele.brand,
            title:ele.title,
            color:ele.color,
                size:ele.size,
                price:ele.price,

            }

            let button=document.createElement("button");
            button.innerText="Add To Cart";
            button.addEventListener("click", function(){
                alert("Product Added To Cart");
                let data=JSON.parse(localStorage.getItem("CartData"))||[];
                data.push(cart);
                localStorage.setItem("CartData",JSON.stringify(data));
            })

        div.append(brand,title, price, p, color,p2, div1, button)  ;
        
        sideone.append(div);
}

append(productArray);

// function addCart(ele){

//     alert("Product Added To Cart");
//     let data=JSON.parse(localStorage.getItem("CartData"))||[];
//     data.append(ele);
//     localStorage.setItem("CartData",JSON.stringify(data));

//     // localStorage.setItem("product", JSON.stringify(element))
    

// }
