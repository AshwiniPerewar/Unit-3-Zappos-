    // let Arr = JSON.parse(localStorage.getItem("login"))
 
 
    

function function1(){
    window.location.href="signin.html"
}

function myfunction(){
    let array = [];
   
    
 let obj = {
    name : document.getElementById("name").value,
    email : document.getElementById("email").value,
    password : document.getElementById("password").value,
 }
   array.push(obj)
 
   console.log(array)


   localStorage.setItem("login", JSON.stringify(array))
    
   
    if(password.value === password1.value && password.value!= "" ){
        alert("Account created successfully")
    }
    else{
        alert("Please fill your details  or  Invalid Password")
    }


}
