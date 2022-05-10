function myfunction(){
    window.location.href="login.html"
}

  

function signinFunction(){
   
    let loginArr = JSON.parse(localStorage.getItem("login"))

    loginArr.map((elem) => {
        
        if(elem.email == email.value && elem.password == password.value){
            window.location.href="index.html"
        }
        else{
                alert("invalid email and password")
            }

    })


   
}