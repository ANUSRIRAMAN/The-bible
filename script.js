var div=document.createElement("div");
div.style.textAlign="center";
var input=document.createElement("input");
input.setAttribute("type","text");
input.setAttribute("id","verses")
input.setAttribute("placeholder","john13:13")
var button=document.createElement("button")
button.innerHTML="search";
button.addEventListener("click",foo);
let final=document.createElement("div")
final.setAttribute("id","content")

div.append(input,button,final)
document.body.append(div)

var details = document.createElement("section");
details.setAttribute("class" , "details");
async function foo(){
   
let res = document.getElementById("verses").value;

let url=`https://bible-api.com/${res}`
let result=await fetch(url);
let result1=await result.json();
console.log(result1)
console.log(result1.text)
 final.innerHTML=`<div class="card"><b>${res}</b> : ${result1.text}<br><br>`

}