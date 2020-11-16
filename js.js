const menubtn = document.querySelector(".mobilebtn")
const nav = document.querySelector(".mobilemen")
const closebtn = document.querySelector(".mobileclose")


menubtn.addEventListener("click",()=>{
	nav.classList.add("active");
})
closebtn.addEventListener("click",()=>{
	nav.classList.remove("active");
})


var myVar = setInterval(myTimer, 1000);

function myTimer() {
  var d = new Date();
  var t = d.toLocaleTimeString();
  document.getElementById("date").innerHTML = t;
}
