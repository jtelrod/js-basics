// arrays and for loop

//const names = ["anna", "susy", "bob", "john", "susan"];
//const lastName = "shaneandbake";
//let newArray = [];

// for loop
//for (let i = 0; i < names.length; i++) {
//  console.log(i);
//  console.log(names[i]);
//  const fullName = `${names[i]} ${lastName}`;
//  newArray.push(fullName);
//  //newArray.push(`${names[i]} ${lastName}`);
//}

//console.log(names);
//console.log(newArray);

const gas = [20, 40, 100];
const food = [10, 40, 50];

function calculateTotal(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  if (total > 100) {
    console.log(`Whoa! You are out of control!!`);
    return total;
  }
  console.log(`Not bad, spending is under control!`);
  return total;
}

const gasTotal = calculateTotal(gas);
const fooTotal = calculateTotal(food);
const randomTotal = calculateTotal([100, 300, 40, 230]);

console.log({
  gas: gasTotal,
  food: fooTotal,
  random: randomTotal,
});
