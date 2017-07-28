// Since the `data.js` file is loaded in your `index.html` before this one, 
// you have access to the `data` variable that contains the Etsy Store data.
// Open your `index.html` page in your browser and you can verify that the following
// is properly working. The `data` variable is an array with 25 items in it
console.log(data);



// 1: Show me how to calculate the average price of all items.
function question1() {
  // Answer:
  var total = 0;
  for (i = 0; i < data.length; i++) {
    total = data[i].price + total;

  }
  console.log(total / data.length)
  return total / data.length;
}


// 2: Show me how to get an array of items that cost between $14.00 and $18.00 USD
function question2() {
  // Answer:
  var items = [];
  for (i = 0; i < data.length; i++) {
    if (data[i].price >= 14.00 && data[i].price <= 18.00) {
      items.push(data[i]);
    }
  }
  console.log(items);
  return items;
}



// 3: Which item has a "GBP" currency code? Display it's name and price.
function question3() {
  // Answer:
  var currency;
  for (i = 0; i < data.length; i++) {
    if (data[i].currency_code === "GBP") {
      currency = data[i];
    }
  }
  console.log(currency.title);
  console.log(currency.price);
  return currency;
}


// 4: Display a list of all items who are made of wood.
function question4() {
  // Answer: 
  var type = []
  for (i = 0; i < data.length; i++) {
    if (data[i].materials.includes("wood")) {
      type.push(data[i]);
    }
  }
  console.log(type);
  return type;
}


// 5: Which items are made of eight or more materials? 
//    Display the name, number of items and the items it is made of.
function question5() {
  // Answer:
  var num_materials;
  for (i = 0; i < data.length; i++) {
    if (data[i].materials.length >= 8) {
      console.log(data[i].title);
      console.log(data[i].materials.length);
      console.log(data[i].materials);
    }
  }
}


// 6: How many items were made by their sellers?
// Answer:
function question6() {
  // Answer:
  var seller_items;
  for (i = 0; i < data.length; i++) {
    if (data[i].who_made = "seller") {
      console.log(data[i].who_made);
    }
  }

  //   console.log(who_made);
}