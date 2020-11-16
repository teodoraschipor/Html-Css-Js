/*VECTOR*/
var text = new Array();
document.getElementById("co2").innerHTML = text;

/*ADAUGARE ELEMENTE VECTOR*/
function myFunction(){
	text.push(" CO2 ")
	document.getElementById("co2").innerHTML = text;
}

/*ALERTA CAND APAS O TASTA*/
window.onkeydown = function(event) {
   if (event.keyCode === 67) {
	   var nr = text.length;
	   if(nr == 5)
      alert("Your answer is correct!");
  else
	  alert("Your answer is incorrect! The correct answer: 5");
   }
};

/*CONTACT*/

const btn = document.querySelector(".btn");
/*SCHIMBARE CULOARE BUTON*/
btn.style.background = ("green");


const myForm = document.querySelector("#my-form");
const name = document.querySelector("#name");
const pass = document.querySelector("#pass");
const msg = document.querySelector(".msg");

myForm.addEventListener("submit", onSubmit);

function onSubmit(e){
	
	e.preventDefault();
	if(name.value === ""||pass.value===""){
		msg.innerHTML = "Please enter all fields";
		msg.classList.add("error");
		setTimeout(() => msg.remove(), 2500);
	}
	else{
		msg.innerHTML = "OK";
		msg.classList.add("ok");
		name.value="";
		pass.value="";
	}
}

var str = "environment, polution, deforestation, fossil fuel";
var res = str.substr(13,8);
document.getElementById("?").innerHTML = res;

