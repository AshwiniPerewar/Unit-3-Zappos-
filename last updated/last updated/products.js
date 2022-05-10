

function createData(img,brand,title,price,color, size){
    this.image = img,
    this.brand = brand,
    this.title = title,
    this.price = price,
    this.color = color,
    this.size = size
}

prod1 = new createData("https://m.media-amazon.com/images/I/81gk1w7C0vL._AC_SR736,920_.jpg","L*Space","Zuri Dress",103.92,"What In Carnation", ["32A","32-34B", "36B-C","36C-D"]);
prod2 = new createData("https://m.media-amazon.com/images/I/71H722tqxCL._AC_SX272_.jpg","America & Beyond","Obsidian Stripe Maxi Dress",59.99,"Black", ["32A","32-34B", "36B-C","36C-D"])
prod3 = new createData("https://m.media-amazon.com/images/I/81rdrgAu0pL._AC_SX272_.jpg","America & Beyond","Shimmering SnakeSkin Dress",99.00,"Multi", ["32A","32-34B", "36B-C","36C-D"])
prod4 = new createData("https://m.media-amazon.com/images/I/717Jwm2XnaL._AC_SX272_.jpg","Maggy London","3/4 Sleeve Pleated Midi Dress",134.99,"Pink", ["32A","32-34B", "36B-C","36C-D"])
prod5 = new createData("https://m.media-amazon.com/images/I/71p-vkwU0JL._AC_SX272_.jpg","Trina Turk","Floret Dress",397.95,"Multi", ["32A","32-34B", "36B-C","36C-D"])
prod6 = new createData("https://m.media-amazon.com/images/I/71QoysUylgL._AC_SX272_.jpg","Roxy","Evening Delight",65.95,"Multi", ["32A","32-34B", "36B-C","36C-D"])
prod7 = new createData("https://m.media-amazon.com/images/I/71lsihx7a9L._AC_SX272_.jpg","Hatley","Bella Dress - Painted Mandala",85.00,"Pink", ["32A","32-34B", "36B-C","36C-D"])
prod8 = new createData("https://m.media-amazon.com/images/I/61IgJFkjekL._AC_SR480,600_.jpg","Vince","Paneled Slip Dress",445.00,"Black", ["32A","32-34B", "36B-C","36C-D"])
prod9 = new createData("https://m.media-amazon.com/images/I/61Fhsusbl+L._AC_SR736,920_.jpg","Billabong","Tomboy Tank Dress",49.90,"Army", ["32A","32-34B", "36B-C","36C-D"])
prod10 = new createData("https://m.media-amazon.com/images/I/714zLDYIV5L._AC_SR736,920_.jpg","Roxy","Under the Cali Sun Stripe",59.95,"Yellow", ["32A","32-34B", "36B-C","36C-D"])
prod11 = new createData("https://m.media-amazon.com/images/I/71aYCS20jQL._AC_SX272_.jpg","Roxy","Sunlit Twist Dress",38.95,"White", ["32A","32-34B", "36B-C","36C-D"])
prod12 = new createData("https://m.media-amazon.com/images/I/61P2Uni9JhL._AC_SR255,340_.jpg","Tiare Hawaii","Jasmine Maxi Dress",100.00,"Pink", ["32A","32-34B", "36B-C","36C-D"])
prod13 = new createData("https://m.media-amazon.com/images/I/81w9A5nWQXL._AC_SR255,340_.jpg","LAUREN Ralph Lauren","Patchwork Cotton Sleeveless Dress",265.00,"Blue", ["32A","32-34B", "36B-C","36C-D"])
prod14 = new createData("https://m.media-amazon.com/images/I/61jV+Yi8J3L._AC_SR736,920_.jpg","WAYF","Replay Side Gathered Midi Tank Dress",54.95,"White", ["32A","32-34B", "36B-C","36C-D"])
prod15 = new createData("https://m.media-amazon.com/images/I/61vKpTaptpL._AC_SX272_.jpg","L*Space","Santorini Dress",150.00,"Black", ["32A","32-34B", "36B-C","36C-D"])
prod16 = new createData("https://m.media-amazon.com/images/I/61-Wrt6sM0L._AC_SX272_.jpg","Norma Kamali","Diana Gown",160.99,"Pink", ["32A","32-34B", "36B-C","36C-D"])
prod17 = new createData("https://m.media-amazon.com/images/I/71sIl5oK1QL._AC_SR736,920_.jpg","MICHAEL Michael Kors",105.00,"Olive", ["32A","32-34B", "36B-C","36C-D"])
prod18 = new createData("https://m.media-amazon.com/images/I/61BjUlSU9gL._AC_SX272_.jpg","Halston","Women's Asymmetric Draped Gown",199.00,"Peach", ["32A","32-34B", "36B-C","36C-D"])
prod19 = new createData("https://m.media-amazon.com/images/I/61rPkCnTkaL._AC_SR736,920_.jpg","Madewell","Tulip Wrap Mini Skirt",95.00,"White", ["32A","32-34B", "36B-C","36C-D"])
prod20 = new createData("https://m.media-amazon.com/images/I/71rtcEhxf9L._AC_SX272_.jpg","Madewell","High Tight A-Line Mini Skirt",75.00,"Blue", ["32A","32-34B", "36B-C","36C-D"])


let DataList = []
DataList.push(prod1,prod2,prod3,prod4,prod5,prod6,prod7,prod8,prod9,prod10,prod11,prod12,prod13,prod14,prod15,prod16,prod17,prod18,prod19,prod20)

document.getElementById("new_arraivals").addEventListener("change",priceLowToHigh)

function DisplayData(data){

    document.getElementById("shortwo").innerHTML=null;


    console.log(data)
    data.forEach(function(element){
        let div = document.createElement("div")
        
        let image = document.createElement("img")
        image.src = element.image
        

        let brand = document.createElement("p")
        brand.innerText = element.brand
        

        let title = document.createElement("p")
        title.innerText = element.title
        

        let price = document.createElement("p")
        price.innerText = "$"+element.price

        div.append(image, brand, title,price)
        // append this div to the html container
        div.addEventListener("click", function(){
            nextPage(element)

            
        
        })


        document.getElementById("shortwo").append(div)  // append to main body (add id)


    })
}

DisplayData(DataList)

function nextPage(element){
    window.location.href="nextpage.html"
    console.log(element)
    localStorage.setItem("product", JSON.stringify(element))
}

function priceLowToHigh(){  // sort by price
   
    let value = document.getElementById("new_arraivals").value
    console.log(value)
    let dataList1=DataList;
    
    console.log(value);
    if(value == "new_arrival"){
        DisplayData(dataList1);
    }
    if(value == "low"){
        DataList.sort(function(a,b){
            if(a.price>b.price) return 1
            if(a.price<b.price) return -1
            return 0;
        })
        DisplayData(DataList)
        console.log(DataList);
    }
    if(value == "high"){
        DataList.sort(function(a,b){
            if(a.price>b.price) return -1
            if(a.price<b.price) return 1
            return 0;
        })
        DisplayData(DataList)
    }
}

function filterDataByColor(){  // filter by color 

    let color = document.getElementById("ap_color").value

    let filteredColor = DataList.filter(function(element){
        return(elem.color == color)
    })
    DisplayData(filteredColor)
}


// colors: Black,Peach,Yellow,Multi,Blue,White,Army,Olive
// Collapse

















