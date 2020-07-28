function calcAmount() {
  let alapar = 1250; minkp = 1; maxkp = 10;
  let price = parseInt(alapar);
  let amountInput = document.querySelector("input[name='amount-input']");
  let showAmount = document.querySelector("span.show-amount");
  let amountNumber = parseInt(amountInput.value);
  amountNumber = isNaN(amountNumber) ? 0 : amountNumber;
  amountNumber1 = amountNumber;
  var amountNumber1 = vizsgal(amountNumber);
  /*console.log(amountNumber, amountNumber1);*/
  amountNumber = amountNumber1 * price;
  showAmount.innerHTML = amountNumber;
  return;
}

function vizsgal(amountv, amountv1) {
  let min = 1;
  let max = 10;
  let price = 1250;
  if (amountv < min) {
    amountv = min - 1;
    alert("legalább 1 terméket kell vásárolnia");
  }
  else if (amountv > 10) {
    amountv = 0;
    alert("maximum 10 db terméket vásárolhat!");
  }
  else { amountv = amountv; }
  amountv1 = amountv;
  /*console.log(amountv, amountv1);*/
  return amountv1;
}
// massModify fg elem kiválasztás és módosítás 
  nodeLista = document.querySelectorAll("input");
function massModify(selector, attribute, value) {
  let nodeList = document.querySelectorAll(selector);
 // console.log(nodeList);
  for (let i = 0; i < nodeList.length; i++) {
  //  console.log(nodeList[i]);
    //console.log(i);
    nodeList[i][attribute] = value;
   // console.log("nodeList elem",nodeList[i][attribute], attribute, value)
  }
}
massModify("input", "placeholder", "érték"); 
// Add helptext 

let helpText = document.createElement("small");
helpText.className = "form-text text-muted";
helpText.innerHTML = "Adja meg a feltéteket!";
//console.log ("help-text");
let parent = document.querySelector("div.form-group:nth-child(1)");
parent.appendChild(helpText);
// let helpTEXT eltávolítása
// parent.removeChild(helpText);

// Window events.
/*let sendButton = document.querySelector(" .btn.btn-primary");
console.log (sendButton);
sendButton.onclick = function() {
  alert("Hello JS");
}*/

/*ablak méretek lekérdezése
 window.addEventListener("resize", function () {
  console.log(this.innerHeight, this.innerWidth);
}) */
//parent element kezelése felugro üzenet a topInput fölé
let alertCloseButtons=document.querySelectorAll(".close[data-dismiss='alert']");
let alertCloseEventHandlerFunction=function(ev){
  this.parentElement.style.display="none";
};
for( let i=0; i< alertCloseButtons.length; i++) {
  alertCloseButtons[i].addEventListener("click",alertCloseEventHandlerFunction );
}

//felugró ablak click-re
/*let sendButton = document.querySelector("form .btn.btn-primary");
sendButton.addEventListener("click", function () { alert("Hello + JS!"); }); */


// úrlap események"
let orderForm = document.querySelector( "#orderForm");
orderForm.addEventListener("submit",function(ev) {
  ev.preventDefault();
  console.log(this,"rendelés");
  let inputs= this.querySelectorAll("input");
  let values = {};
  for(let i=0; i<inputs.length; i++) {
    values[inputs[i].name]= inputs[i].value;
  }
  console.log(values,"rendelési objektum");
});
let orderszForm = document.querySelector( "#orderForm");
orderszForm.addEventListener("submit",function(ev) {
  ev.preventDefault();
  console.log(this,"rendelés szelect");
  let szelect= this.querySelectorAll("#topInput");
  let values2= [];
  let feltetSzelect=[];
  for(let isz=0; isz<szelect.length; isz++) {
    values2[isz]= orderszForm[isz].value;
feltetSzelect[isz]=toppings[values2[isz]];
  }
  console.log(values2, feltetSzelect,"rendelési array");
});

  

//parent element kezelése felugro üzenet a topInput fölé
/*let alertCloseButtons=document.querySelectorAll(".close[data-dismiss='alert']");
let alertCloseEventHandlerFunction=function(ev){
  this.parentElement.style.display="none";
};
for( let i=0; i< alertCloseButtons.length; i++) {
  alertCloseButtons[i].addEventListener("click",alertCloseEventHandlerFunction );
}*/





//select elem kitöltése.
let toppings=[
  "Szalonna",
  "Hagymakrém",
  "Tükörtojás",
  "Extra sonka",
  "Extra sajt"
];
let toppingSelect = document.querySelector("#topInput");
let index=0;
while (index < toppings.length) {
  let option =document.createElement("option");
  // ez csak ismert sorszámnál jó használta helyette?
 // option.value= toppings[index];
  option.value= index;
  option.innerHTML= toppings[index];
  toppingSelect.appendChild(option);
  index++;
}


