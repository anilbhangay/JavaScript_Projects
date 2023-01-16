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
    console.log("truthy");

}
  else{
    console.log("falsy");
  }

  console.log(b); //01.truthly

  