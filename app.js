//1
let catName;
let quote;
function catTalk() {
  "use strict";

  catName = "Oliver";
  quote = catName + " says Meow!";
}
catTalk();
//2
function checkScope() {
    "use strict";
    let i = "function scope";
    if (true) {
      let i = "block scope";
      console.log("Block scope i is: ", i);
    }
    console.log("Function scope i is: ", i);
    return i;
  }
  //3
  unction printManyTimes(str) {
    "use strict";
    const SENTENCE = str + " is cool!";
    for (let i = 0; i < str.length; i += 2) {
      console.log(SENTENCE);
    }
  }
  printManyTimes("freeCodeCamp");
  //4
  const s = [5, 7, 2];
function editInPlace() {
  "use strict";
  s[0] = 2;
  s[1] = 5;
  s[2] = 7;
}
editInPlace();
//5
function freezeObj() {
    "use strict";
    const MATH_CONSTANTS = {
      PI: 3.14
    };
  
    Object.freeze(MATH_CONSTANTS);
  
    try {
      MATH_CONSTANTS.PI = 99;
    } catch (ex) {
      console.log(ex);
    }
    return MATH_CONSTANTS.PI;
  }
  
  const PI = freezeObj();
  //6
  const magic = () => {
    "use strict";
    return new Date();
  };
  //7
  const myConcat = (arr1, arr2) => {
    "use strict";
    return arr1.concat(arr2);
  };
  console.log(myConcat([1, 2], [3, 4, 5]));
  //8
  const increment = (number, value = 1) => number + value;
console.log(increment(5, 2)); // returns 7
console.log(increment(5)); // returns 6
//9
const sum = (...args) => {
    return args.reduce((a, b) => a + b, 0);
  }
  console.log(sum(1, 2, 3)); // 6
//10
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2 
arr2 = [...arr1];  
console.log(arr2);
//11
const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
  };
  const {today, tomorrow} = HIGH_TEMPERATURES;
//12
const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
  };
  const { today: highToday, tomorrow: highTomorrow } = HIGH_TEMPERATURES;
  console.log(highToday); 
  console.log(highTomorrow); 
//13
const LOCAL_FORECAST = {
    yesterday: { low: 61, high: 75 },
    today: { low: 64, high: 77 },
    tomorrow: { low: 68, high: 80 }
  };
  const { today: { low: lowToday, high: highToday } } = LOCAL_FORECAST;  
//14
let a = 8, b = 6;
[a, b] = [b, a];
//15
const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function removeFirstTwo(list) {
  "use strict";
  const [a, b, ...arr] = list;
  return arr;
}
const arr = removeFirstTwo(source);
console.log(arr); 
console.log(source); 
//16
const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
  };
  const half = ({ max, min }) => (max + min) / 2.0;
//17
const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["no-extra-semi", "no-dup-keys"]
  };
  function makeList(arr) {
    "use strict";
    const failureItems = [];
    for (let i = 0; i < arr.length; i++) {
      failureItems.push(`<li class="text-warning">${arr[i]}</li>`);
    }
    return failureItems;
  }
  const failuresList = makeList(result.failure);
//18
const createPerson = (name, age, gender) => {
    "use strict";
    return {
      name,
      age,
      gender
    };
  };
//19
const bicycle = {
    gear: 2,
    setGear(newGear) {
      "use strict";
      this.gear = newGear;
    }
  };
  bicycle.setGear(3);
  console.log(bicycle.gear);  
//20
class Vegetable {
    constructor(name) {
      this.name = name;
    }
  }
  const carrot = new Vegetable("carrot");
  console.log(carrot.name);   
//21
class Thermostat {
    constructor(fahrenheit) {
      this.fahrenheit = fahrenheit;
    }
    
    get temperature() {
      return (5 / 9) * (this.fahrenheit - 32);
    }
    
    set temperature(celsius) {
      this.fahrenheit = (celsius * 9.0) / 5 + 32;
    }
  }
  const thermos = new Thermostat(76); 
  let temp = thermos.temperature;
  thermos.temperature = 26;
  temp = thermos.temperature;  
//22
<html>
  <body>
    <script type="module" src="index.js"></script>
  </body>
</html>
//23
export const uppercaseString = (string) => {
    return string.toUpperCase();
  }
  export const lowercaseString = (string) => {
    return string.toLowerCase()
  }
//24
import { uppercaseString, lowercaseString } from './string_functions.js';
uppercaseString("hello");
lowercaseString("WORLD!");
//25
import * as stringFunctions from "./string_functions.js";
stringFunctions.uppercaseString("hello");
stringFunctions.lowercaseString("WORLD!");
//26
"use strict";
export default function subtract(x, y) {
  return x - y;
}
//27
import subtract from "./math_functions.js";
subtract(7,4);
//28
const makeServerRequest = new Promise((resolve, reject) => {
});
//29
const makeServerRequest = new Promise((resolve, reject) => {
    let responseFromServer;
    if(responseFromServer) {
      resolve("We got the data");
    } else {	
      reject("Data not received");
    }
  });
//30
const makeServerRequest = new Promise((resolve, reject) => {
    let responseFromServer = true;
    if(responseFromServer) {
      resolve("We got the data");
    } else {	
      reject("Data not received");
    }
  });
  makeServerRequest.then(result => {
    console.log(result);
  });
//31
const makeServerRequest = new Promise((resolve, reject) => {
    let responseFromServer = false;
    if(responseFromServer) {
      resolve("We got the data");
    } else {	
      reject("Data not received");
    }
  });
  makeServerRequest.then(result => {
    console.log(result);
  });
  makeServerRequest.catch(error => {
    console.log(error);
  });