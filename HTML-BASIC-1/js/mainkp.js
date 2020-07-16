function calckpAmount() {
    console.log ("Hello ifksp mainkp")
      let alapar = 1250;
      let price = parseInt(alapar);
      let amountInput = document.querySelector("input[name='amount-input']");
      let showAmount = document.querySelector("span.show-amount");
      let amount = parseInt(amountInput.value) * price;
      showAmount.innerHTML = amount;
      console.log(amount);
}