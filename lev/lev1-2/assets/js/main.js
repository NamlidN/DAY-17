function m(event){
event.preventDefault()
let zahl = document.getElementById("zahl").value
let m =   2022%zahl
console.log(m)
document.getElementById("a").innerHTML=m

}