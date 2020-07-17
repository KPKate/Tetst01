function calckpfAmount() {
    console.log ("Hello ifksp mainkp")
      let alapar = 1250; minkp=1; maxkp=10;
      let price = parseInt(alapar);
      let amountInput = document.querySelector("input[name='amount-input']");
      let showAmount = document.querySelector("span.show-amount");
      let amountNumber=parseInt(amountInput.value);
      amountNumber=isNaN(amountNumber) ?0:amountNumber;
      vizsgal( amountNumber);
    
}

function vizsgal(amountv) {
let min=1; max=10; amountv; 
if (amountv < min ) { amounte=min;
alert ("legalább 1 terméket kell vásárolnia");}
 else if (amountv > 10) {
alert ("maximum 10 db terméket vásárolhat!");}
else { 
  let amount = amountNumber * price;
      showAmount.innerHTML = amount;
      console.log(amount);
 return;}                      
}