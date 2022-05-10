function myfunction(){
    window.location.href="/login/login.html"
}

  

function signinFunction(){
   
    let loginArr = JSON.parse(localStorage.getItem("login"))

    loginArr.map((elem) => {
        
        if(elem.email == email.value && elem.password == password.value){
            alert("login succesful")
        }
        else{
                alert("invalid email and password")
            }

    })


   
}