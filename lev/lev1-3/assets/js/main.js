function m(event){
event.preventDefault()
let zahl = document.getElementById("zahl").value
let zahll = document.getElementById("zahll").value
let m =   zahll-zahl
console.log(m)
document.getElementById("a").innerHTML=m
}
