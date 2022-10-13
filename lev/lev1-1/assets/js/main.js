function doppel(event){
event.preventDefault()
let zahl = document.getElementById("zahl").value
let doppel = zahl * 2
console.log(doppel)
document.getElementById("a").innerHTML=doppel

}