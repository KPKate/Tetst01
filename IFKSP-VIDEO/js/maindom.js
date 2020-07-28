// kiválasztott elem attributumának érték adása
let nodeLista=document.querySelectorAll("input");
 function massModify (selector, attribute, value ) { 
let nodeList = document.querySelectorAll(selector);
console.log(nodeList);
for(let i=0; i<nodeList.length; i++) {
console.log(nodeList[i]);
nodeList[i][attribute]=value;
console.log(nodeList[i][attribute], attribute, value)
} }


//myNodeList bejárása for of-fal
//clear ()
myNodeList=document.querySelectorAll("input");
for (let element of myNodeList) {
if (element !="length") { 
element.style.backgroundColor = "green";
element.style.color = "red";}
 else { break; }}
console.log("hello");

//isNAN fg és a for in 
for (let element in myNodeList) {
console.log(element);
if (!isNaN(element)) {
console.log(element);
myNodeList[element].style.color= "black";}}

//egyszerű for ciklussal
let myNodeList= document.querySelectorAll("input");
for (let i=0; i< myNodeList.length; i++) {
myNodeList[i].style.backgroundColor="lightblue";
myNodeList[i].style.color="red";
console.log(i);
}
//rendelés file-on


/* for in és of ciklusok
 let  myNodeList= document.querySelectorAll("input");
 ??for (let element in myNodeList) {
    console.log(element);
    if (!isNaN(element)) {
    console.log(element);
    myNodeList[element].style.backgroundColor = "grey";}}
    
    
    let myNodeList= document.querySelectorAll("input");
    for (let element in myNodeList) {
    console.log(element);
    if (element !="length") { console.log(element);
    myNodeList[element].style.backgroundColor = "lightblue";}
     else {console.log("element", element); break; }}
    console.log("hello");    ?? */

/* elemek lekérdezése Chid children és parent
document.querySelector("div.form-group:nth-child(2)").children
HTMLCollection(3) [label, input#amountInput.form-control, small.form-text.text-muted, amountInput: input#amountInput.form-control, amount-input: input#amountInput.form-control]
document.querySelector("div").childElementCount
1
document.querySelector("form").childElementCount
3
document.querySelector("div.form-group:nth-child(2)").children
HTMLCollection(3) [label, input#amountInput.form-control, small.form-text.text-muted, amountInput: input#amountInput.form-control, amount-input: input#amountInput.form-control]
document.querySelector("div.form-group:nth-child(3)").children
HTMLCollection [span.show-amount]
document.querySelector("div.form-group:nth-child(3)").childNodes
NodeList(3) [text, span.show-amount, text]
document.querySelector("div.form-group:nth-child(3)").firstChild
"
          Fizetendő: "
document.querySelector("div.form-group:nth-child(3)").lastChild
" Ft
        "
document.querySelector("div.form-group:nth-child(3)").lastElementChild
<span class=​"show-amount">​ 0 ​</span>​
document.querySelector("div.form-group:nth-child(3)").firstElementChild
<span class=​"show-amount">​ 0 ​</span>​  */





let nodeLista=document.querySelectorAll("input");
 function massModify (selector, attribute, value ) { 
let nodeList = document.querySelectorAll(selector);
console.log(nodeList);
for(let i=0; i<nodeList.length; i++) {
console.log(nodeList[i]);
nodeList[i][attribute]=value;
console.log(nodeList[i][attribute], attribute, value)
}
}
massModify("input","placeholder","érték")




// elemek lekérdezése, módosítása
let topInput=document.querySelector("input#topInput");
topInput.getAttribute("class");
topInput.getAttribute("name");
topInput.getAttribute("type");
topInput.getAttribute("id");
topInput.getAttributes;
//módosítás set
topInput.setAttribute("type","email");
topInput.setAttribute("type","password");
// attritum a tag elemek nevei




//while ciklus
let animal={name: "macska", age:2,date:Date(2018,6,21) };
let keys=Object.keys(animal);
i=0;
while(i<keys.length) {
console.log(animal[keys[i]]);
i++;
};


// do while ciklus
let i=10;
do{
 console.log(i) ;
i++;
} 
while (i<0);


