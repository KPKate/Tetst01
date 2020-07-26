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


nodeLista = document.querySelectorAll("input");
function massModify(selector, attribute, value) {
  let nodeList = document.querySelectorAll(selector);
  console.log(nodeList);
  for (let i = 0; i < nodeList.length; i++) {
    console.log(nodeList[i] , i);
    console.log(i);
    nodeList[i][attribute] = value;
    console.log(nodeList[i][attribute], attribute, value)
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
//gomb kezelés
let sendButton = document.querySelector(" .btn.btn-primary");
sendButton.addEventListener("click", function () { alert("Hello + JS!"); });

//ablak méretek lekérdezése
window.addEventListener("resize", function () {
  console.log(this.innerHeight, this.innerWidth);
})



/* let nodeLista=document.querySelectorAll("input");
 function massModify (selector, attribute, value ) {
let nodeList = document.querySelectorAll(selector);
console.log(nodeList);
for(let i=0; i<nodeList.length; i++) {
console.log(nodeList[i]);
nodeList[i][attribute]=value;
console.log(nodeList[i][attribute], attribute, value)
}
}
massModify("input","placeholder","érték"); */