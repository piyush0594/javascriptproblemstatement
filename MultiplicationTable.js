function multiplicationTable(tableOf, tableTill) {
  for (let i = 1; i <= tableTill; i++) {
    // let n = tableOf; //6
    // n = n * i; //6*1,2,,...15
    console.log(`Table of, ${tableOf}*${i} = ${i * tableOf}`);
  }
}
//multiplicationTable(4, 10)
multiplicationTable(6, 15);
