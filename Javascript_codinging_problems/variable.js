// 01.declare variables and assign string, boolean, undefined and null data types, Display all the value with their data type.

let person = "Anmol kumar";
console.log(person); // string

         //booleans
let x = "age";
console.log(17);

if(x > 20) { 
        console.log("you are eligible for license"); //True
}
else { 
    console.log("you are not eligible"); //False
}

let bike;
console.log(bike);  //undefined


let king =  null;
console.log(king); //null



//02. Declare variables to store your first name, last name, marital status, country and age and display them using interpolation method.

 let firstname = "Michael";
 let lastname = "Jackson";
 let marital_status = "Married";
 let country = "America";
 let age = 40;
 let fullname = firstname + " " + lastname;

let personInfo = `My self ${fullname}. Iam ${age} years old, Iam ${marital_status} and I live in ${country}.`;

 console.log(personInfo); //interpolation method


 //03. Declare a varibale and assign string value to it and change all the string characters to capital letters using toUpperCase() method.

 let project = "this is a fullstack javascript bootcamp 2.o";

 let result = project.toUpperCase();

 console.log(result); //toUppercase method


 //04. Declare a varibale and assign string value to it and check if the string contains a word Script using includes() method.

  let word = "this is a web developer page";
  let value = "Script";

  console.log(word.includes(value));  //includes //False

  let soft = "this is a JavaScript coding page"
  let check = "Script";

  console.log(soft.includes(check));  //includes //True


  //05. Declare a varibale and assign string value to it and then split it into an array using split() method

  let set = "this is a process of the website";
  let get = set.split(" ");
  
  console.log(get); //split


  //06. 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.

  let company = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
  let tech = company.split(',');     

 console.log(tech); //split in Array


 //07. Declare an array containing the multiple values and use lastIndexOf to determine the position of the first and last occurrence of a word "pw skills".

 let skill = ["pw skills", "Scaler", "Unacademy", "Edureka", "pw skills"];
 let proof = skill.lastIndexOf("pw skills");

 console.log(proof); //lastindexof


 //08. Demonstrate the use of trim() to remove any trailing whitespace at the beginning and the end of a string.

 let space = "      this is a programming language of javascript       ";
 let clear = space.trim();

 console.log(clear);  //trim


 //09. Boolean value is either true or false.
//    - Write three JavaScript statement example which provide truthy value.
//    - Write three JavaScript statement example which provide falsy value.

let a = 199;
let b = 188;

if(a > b ){
    console.log("true");
}
  else{
    console.log("false");
  }
  console.log(b); //01.truthly


 var k = "JavaScript";

 console.log(typeof k === 'string'); //02.truthly


let  object = {name : "Denver", age : 30};

console.log('age' in object); //03.truthly



let s = 100;
let d = 99;

console.log(s < d); //01.falsy

let variable = "hello world";

console.log(typeof variable === 'number'); //02.falsy

let car = { Brand: "Tata Safari", Model: 2022, Color: "Black Gold"};

console.log("Price" in car); //03.falsy



//10. Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()

 console.log(4 > 3);    //true  
 console.log(4 >= 3);   //true
 console.log(4 < 3);    //false
 console.log(4 <= 3);   //false
 console.log(4 == 4);   //true
 console.log(4 === 4);  //true
 console.log(4 != 4);   //false
 console.log(4 !== 4);  //false
 console.log(4 != '4'); //false
 console.log(4 == '4'); //true
 console.log (4 === '4'); //false 

 // -Find the length of python and jargon and make a falsy comparison statement.

 let dp = "python";
 let dk = "jargon";

let pythonlength = dp.length;
let jargonlength = dk.length;

console.log(pythonlength);
console.log(jargonlength);

console.log(pythonlength !== jargonlength); //falsy


/*11. Use the Date object to do the following activities
    - What is the year today?
    - What is the month today as a number?
    - What is the date today?
    - What is the day today as a number?
    - What is the hours now?
    - What is the minutes now?
    - Find out the numbers of seconds elapsed from January 1, 1970 to now.*/

 let now = new Date();
 console.log(now.getFullYear()); //year today


 let mth = new Date();
 let current = mth.getUTCMonth();
 console.log(current); //month today


 