// object for popular items
var data=[
    {url:"https://m.media-amazon.com/images/I/816yoL1mI4L._AC_SX255_.jpg",img:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Font_Awesome_5_regular_heart.svg/512px-Font_Awesome_5_regular_heart.svg.png?20180810175515",likes:3560,brand:"Crocs",name:"Classic clog",price:"$49.95",},
    {url:"https://m.media-amazon.com/images/I/81gSaz30MSL._AC_SX255_.jpg",img:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Font_Awesome_5_regular_heart.svg/512px-Font_Awesome_5_regular_heart.svg.png?20180810175515",likes:3580,brand:"Crocs",name:"Classic clog",price:"$43.91",},
    {url:"https://m.media-amazon.com/images/I/61YmFwznaiL._AC_SX255_.jpg",img:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Font_Awesome_5_regular_heart.svg/512px-Font_Awesome_5_regular_heart.svg.png?20180810175515",likes:3690,brand:"Crocs",name:"Classic clog",price:"$69.95",},
    {url:"https://m.media-amazon.com/images/I/81NKoInBS7L._AC_SX255_.jpg",img:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Font_Awesome_5_regular_heart.svg/512px-Font_Awesome_5_regular_heart.svg.png?20180810175515",likes:3560,brand:"Crocs",name:"Classic clog",price:"$39.95",},
    {url:"https://m.media-amazon.com/images/I/51d8uWPVVRL._AC_SX255_.jpg",img:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Font_Awesome_5_regular_heart.svg/512px-Font_Awesome_5_regular_heart.svg.png?20180810175515",likes:1942,brand:"Crocs",name:"Classic clog",price:"$41.98",},
    {url:"https://m.media-amazon.com/images/I/61TeInTmpvL._AC_SX255_.jpg",img:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Font_Awesome_5_regular_heart.svg/512px-Font_Awesome_5_regular_heart.svg.png?20180810175515",likes:1360,brand:"Crocs",name:"Classic clog",price:"$49.75",},
   ];

  //  helper function to create element
   let create=(id)=>
   {
    return document.createElement(id);
   }


  //  function to append data

   let appendData=(data,container)=>
   {
   data.forEach(({url,img,likes,brand,name,price})=>
   {
    let box=create("div");
    let imagebox=create("div");
    let img1=create("img");
    let heartdiv=create("div");
    heartdiv.setAttribute("id","heartdiv");
    let heart=create("img");
    heart.src=img;
    heart.setAttribute("id","heart");
    heart.addEventListener("click",function()
    {
    heart.style.backgroundColor ="red";
    like.innerText=likes+1;
    alert("Product added to Favourites");
    let fav={
      url:url,
      heart:img,
      price:price,
      likes:likes+1
    };

    let data=(JSON.parse(localStorage.getItem("favourites"))||[]);
    data.push(fav);
   localStorage.setItem("favourites",JSON.stringify(data));

   let data1=(JSON.parse(localStorage.getItem("favourites"))||[]);
   console.log(data1);
    })
    let like=create("p");
    let brand1=create("p");
    let name1=create("p");
    brand1.setAttribute("id","ap_link");
    let price1=create("p");

    heartdiv.append(heart,like);
    imagebox.setAttribute("class","imagebox");
    imagebox.append(img1);
    img1.src=url;
    like.innerText=likes;

    brand1.innerText=brand;
    name1.innerText=name;
    price1.innerText=price;
    
    box.append(imagebox,heartdiv,brand1,name1,price1);

    document.querySelector(container).append(box);

   });

  }

// object for trending items

   let trending=[
       
           {img:"https://www.zappos.com/boutiques/449/Nike_Header081617.jpg",brand:"Nike"},
           {img:"https://www.zappos.com/boutiques/2154/nikekids_header.jpg",brand:"Nike Kids"},
           {img:"https://www.zappos.com/boutiques/184/ugg_header_092116.jpg",brand:"UGG"},
           {img:"https://www.zappos.com/boutiques/124/vans_header_031717.jpg",brand:"Vans"},
           {img:"https://www.zappos.com/boutiques/179/nb_header170922.jpg",brand:"New Balance"},
           {img:"https://www.zappos.com/boutiques/164/Clarks_header030514.jpg",brand:"Clarks"},
       
   ];

  // appending data to trending 
   trending.forEach(({img,brand})=>
   {
    
     let box=create("div");
     let imagebox=create("div");
     let img1=create("img");
    let name1=create("a");
      
     img1.src=img;
     name1.innerText=brand;
     
     imagebox.setAttribute("class","image1");
     imagebox.append(img1);
     
     box.append(imagebox,name1);
 
     document.querySelector("#ap_trending").append(box);
 
     
   })

  //  sk code starts here
   function createObj(image,title,price){
    this.img = image,
    this.tag = "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Font_Awesome_5_regular_heart.svg/512px-Font_Awesome_5_regular_heart.svg.png?20180810175515",
    this.brand = "Dansko",
    this.title = title,
    this.price = price,
    this.rating = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReUUyQZfvkspCdag1gMSLUZXcNfcwZ1WevT4f_CiXtTdUrZusdUu1sBGEA2pekW5MLNA&usqp=CAU"
}
let product1 = new createObj("https://m.media-amazon.com/images/I/71Ucp9CqD7L._AC_SX255_.jpg","LT Pro",144.95)
let product2 = new createObj("https://m.media-amazon.com/images/I/71JPTX4r46L._AC_SX255_.jpg","XP 2.0",150.00)
let product3 = new createObj("https://m.media-amazon.com/images/I/813Kd+JC9xL._AC_SX255_.jpg","Professional",140.00)
let product4 = new createObj("https://m.media-amazon.com/images/I/8186uCaQKRL._AC_SX255_.jpg","Kane",80.00)
let product5 = new createObj("https://m.media-amazon.com/images/I/81bk4oAhS3L._AC_SX255_.jpg","Sophie",120.00)
let product6 = new createObj("https://m.media-amazon.com/images/I/71hxeunMbdL._AC_SX255_.jpg","Season",120.00)
let product7 = new createObj("https://m.media-amazon.com/images/I/81fUTTCkoYL._AC_SX255_.jpg","Reece",124.95)
let product8 = new createObj("https://m.media-amazon.com/images/I/816eILqoXiL._AC_SX255_.jpg","Pace",139.95)
let danskoData = []
danskoData.push(product1,product2,product3,product4,product5,product6,product7,product8)
console.log(danskoData)
function displayDanskoData(data){
    data.map(function(element){
        let div = document.createElement("div")
        div.setAttribute("id","set-div-item")
        let divImage = document.createElement("div")
        divImage.setAttribute("id","set-div-image")
        let imageProduct = document.createElement("img")
        imageProduct.src = element.img
        imageProduct.setAttribute("id","set-image-product")
        let tagProduct = document.createElement("img")
        tagProduct.src = element.tag
        tagProduct.setAttribute("id","set-tag-heart")
        
        let brand = document.createElement("p")
        brand.innerText = element.brand
        brand.setAttribute("class","set-text-product")
        let title = document.createElement("p")
        title.innerText = element.title
        title.setAttribute("class","set-text-product")
        title.style.fontWeight = "600"
        let price = document.createElement("p")
        price.innerText = "$"+element.price
        price.setAttribute("class","set-text-product")
        price.style.color = "#5c9694"
        let rating = document.createElement("img")
        rating.src = element.rating
        rating.setAttribute("id","set-rating-product")
        divImage.append(imageProduct)
        div.append(divImage,tagProduct,brand,title,price,rating)
        document.getElementById("shop-dansko-right-section").append(div)
    })
}
displayDanskoData(danskoData)

// sk code ends here

// object for more about zappos
   let data1=[
     {url:"https://m.media-amazon.com/images/G/01/zappos/landing/opus/2021/homepage/Zappos_ONE_Retina.png",h:"Diversity Equity & Inclusion",desc:"At Zappos, diversity and individuality are central to our core values.",link:"Learn More About Zappos ONE Purpose"},
     {url:"https://m.media-amazon.com/images/G/01/2022/homepage2.08/Blank_500_x_500-491.jpg",h:"Zappos for Good",desc:"Learn how to easily donate or recycle your secondhand items.",link:"Explore Zappos for Good"},
     {url:"https://m.media-amazon.com/images/G/01/zappos/landing/opus/2020/homepage/july/GGPromo.png",h:"Goods for Good",desc:"We're highlighting brands who are making a difference and helping build a better place for us all.",link:"Shop Goods for Good"},
   ];

  //  mapping object
   data1.forEach(({url,h,desc,link})=>
   {
    
     let box=create("div");
     let img1=create("img");
    let name1=create("p");

    let des=create("p");
      let link1=create("a");
     img1.src=url;
     name1.innerText=h;
     name1.setAttribute("id","ap_div");
    des.setAttribute("id","ap_desc");
    link1.setAttribute("id","ap_link");
     
     des.innerText=desc;
     link1.innerText=link;

     box.append(img1,name1,des,link1);
 
     document.querySelector("#ap_diversity").append(box);
 
     
   })

  //  object for recent items
   var recent=[
    {url:"https://m.media-amazon.com/images/I/71z5kryzXWL._AC_SX255_.jpg",img:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Font_Awesome_5_regular_heart.svg/512px-Font_Awesome_5_regular_heart.svg.png?20180810175515",likes:3560,brand:"Crocs",name:"Classic clog",price:"$49.95",},
    {url:"https://m.media-amazon.com/images/I/71mL8fI+xPL._AC_SX255_.jpg",img:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Font_Awesome_5_regular_heart.svg/512px-Font_Awesome_5_regular_heart.svg.png?20180810175515",likes:3580,brand:"Crocs",name:"Classic clog",price:"$43.65",},
    {url:"https://m.media-amazon.com/images/I/61YmFwznaiL._AC_SX255_.jpg",img:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Font_Awesome_5_regular_heart.svg/512px-Font_Awesome_5_regular_heart.svg.png?20180810175515",likes:3690,brand:"Crocs",name:"Classic clog",price:"$47.95",},
    {url:"https://m.media-amazon.com/images/I/71JPTX4r46L._AC_SX255_.jpg",img:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Font_Awesome_5_regular_heart.svg/512px-Font_Awesome_5_regular_heart.svg.png?20180810175515",likes:3560,brand:"Crocs",name:"Classic clog",price:"$41.95",},
      ];

 
  appendData(data,"#ap_popular");

  appendData(recent,"#ap_recent");
     