function tipCalculator(amount, tipPercentage, locale, currency) {
  // console.log(amount, tipPercentage)
  let result = [];
  for (let i = 0; i < tipPercentage.length; i++) {
    console.log(tipPercentage[i]);
    const tipAmount = amount * (tipPercentage[i] / 100);

    // console.log(tipAmount)
    const formatter = Intl.NumberFormat(locale, {
      style: "currency",
      currency: currency,
    });
    result.push(formatter.format(tipAmount));
  }

  return result;
}
console.log(
  "tip caclulator ",
  tipCalculator(1000, [5, 10, 15], "en-IN", "INR")
);
console.log("tip caclulator ", tipCalculator(824, [5, 10, 15], "en-US", "USD"));
