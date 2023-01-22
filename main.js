//variaveis
const btnTry =	document.querySelector("#btnTry")
const btnReset =	document.querySelector("#btnReset")

const screen1 =	 document.querySelector(".screen1")
const screen2 =	document.querySelector("screen2")

let randomNumber = Math.round(Math.random() * 10)

let xAttempts = 1

//Eventos
btnTry.addEventListener("click," handleTryClick)
btnReset.addEventListener('click,' handleResetClick)
document.addEventListener("keydown", function(event) {
  if(event.key == "Enter" && screen1.classList.contains("hide")) {
    handleResetClick()
  }
})


//função callback
function  handleTryClick(event) {
event.preventDefault()

const inputNumber = document.querySelector("#inputNumber")

if(Number (inputNumber.value) ==	randomNumber	) {
 screen1.classList.add("hide")
 screen2.classList.remove("hide")

  document
  .querySelector(".screen2 h2")
  .innerText =	`acertou em ${xAttempts} tentativas`
  
}

inputNumber.value =	""
xAttempts++
}
 function handleResetClick () {
  toggleScreen()
  xAttempts =	1
  randomNumber = Math.round(Math.random() * 10)
}

function toggleScreen(){
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
}
 
