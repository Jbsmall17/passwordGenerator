let rectangle95 = document.querySelector(".rectangle95")
let rectangle96 = document.querySelector(".rectangle96")
let rectangle97 = document.querySelector(".rectangle97")
let rectangle98 = document.querySelector(".rectangle98")
function generate(){
  let characters= "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*(){}[]"
   let password = ""
   let password1 = ""
   let password2 = ""
   let password3 = ""
   let passwordLength = 16
   for(let i = 0; i < passwordLength; i++){
       let randomNumber = Math.floor(Math.random()*characters.length)
       let secondNumber = Math.floor(Math.random()*characters.length)
       let thirdNumber = Math.floor(Math.random()*characters.length)
       let fourthNumber = Math.floor(Math.random()*characters.length)
       password += characters.substring(randomNumber,randomNumber + 1)
       password1 += characters.substring(secondNumber,secondNumber + 1)
       password2 += characters.substring(thirdNumber,thirdNumber + 1)
       password3 += characters.substring(fourthNumber,fourthNumber + 1)   
   }
      rectangle95.textContent =  password
      rectangle96.textContent =  password1
      rectangle97.textContent =  password2
      rectangle98.textContent =  password3
}
