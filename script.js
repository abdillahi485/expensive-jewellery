// Good Luck 💪🏾
function mostExpensive(value){
  let name=''
  let mostExpensiveJew=980;
  let values=Object.entries(value)
  for(let key of values){
    if(key[1] > mostExpensiveJew){
      // mostExpensiveJew=key[1]
      // name=key[0]
      console.log(`The most Expensive Jewellery is ${key[0]}`)
    }
  }

  // if(value['Diamond Earnings'] >mostExpensiveJew){
  //   mostExpensiveJew=value['Diamond Earnings']
  //   return mostExpensiveJew
  //   // console.log(mostExpensiveJew)
  // }else if(value['GGold Watch'] >mostExpensiveJew){
  //   mostExpensiveJew=value['Gold Watch'];
  //   return mostExpensiveJew
  //   // console.log(mostExpensiveJew)
  // }else if(value['Pearl Necklace'] >mostExpensiveJew){
  //   mostExpensiveJew =value['Pearl Necklace'] 
  //   return mostExpensiveJew
  //   // console.log(mostExpensiveJew)
  // }
  // return `${mostExpensiveJew} ${name}`;
}

mostExpensive ({
    "Diamond Earnings": 980,
    "Gold Watch": 250,
    "Pearl Necklace": 4650
  })
 mostExpensive({
    "Silver Bracelet": 280,
    "Gemstone Earrings": 180,
    "Diamond Ring": 3500
  })