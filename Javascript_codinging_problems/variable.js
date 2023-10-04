// 01.declare variables and assign string, boolean, undefined and null data types, Display all the value with their data type.

let person = "Arjit kumar";
console.log(person); // string

         //booleans
let x = "age";
console.log(15);
            
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
    - What is the minutes now?*/

 let now = new Date();
 console.log(now.getFullYear()); //year today


 let mth = new Date();
 let current = mth.getUTCMonth();
 console.log(current); //month today


 let dt = new Date();
 let st = dt.getDate();
 console.log(st); //date today


 let dy = new Date();
 let de = dy.getDay();
 console.log(de); //day today as a number


 let hrs = new Date();
 let hr = hrs.getHours();
 console.log(hr); //hours now


 let min = new Date();
 let mn = min.getMinutes();
 console.log(mn); //minutes now

// - Find out the numbers of seconds elapsed from January 1, 1970 to now.


  let sec = new Date();
  let sc = (sec.getTime() / 1000);
  console.log(sc); //seconds now


  /*12. Create a human readable time format using the Date time object
    - YYYY-MM-DD HH:mm
    - DD-MM-YYYY HH:mm
    - DD/MM/YYYY HH:mm */
 
    var ds = new Date();
    var curr_year1 = ds.getFullYear();
    var curr_month2 = (ds.getMonth()+1);
    var curr_date3 = ds.getDate();
    var curr_time4 = ds.toLocaleTimeString();
    console.log(curr_year1 + "-" + curr_month2 + "-" + curr_date3 + " " + curr_time4); //YYYY-MM-DD HH:mm
 

    var da = new Date();
    var curr_date = da.getDate();
    var curr_month = (da.getMonth()+1);
    var curr_year = da.getFullYear();
    var curr_time = da.toLocaleTimeString();
    console.log(curr_date + "-" + curr_month + "-" + curr_year + " " + curr_time); //DD-MM-YYYY HH:mm

    var dj = new Date,     
    dformat = [dj.getDate(),
               dj.getMonth()+1,
               dj.getFullYear()].join('/')+' '+
              [dj.toLocaleTimeString()];
               console.log(dformat); //DD/MM/YYYY HH:mm


  //  13. Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.

  //  let Age = prompt("Enter your age:");
     
  //  if(Age >= 18){
  //   console.log('You are old enough to drive');
  //  }
  //   else{
  //     console.log('Wait for the number of years needs to turn 18'); 
  //   }  // using prompt  


  //14. Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript? Create a program which checks that the given number is even or odd.

   let num = 8;

   if (num % 2 === 0 ){
          console.log(num + " is an even number.");
   }
     else {
        console.log(num + " is an odd number.");
     }    // 8 is an even number

  
    function EvenorOdd(numr){
      if(numr % 2 === 0) {
            console.log(numr + " is an even number.");
      } 
        else {
          console.log(numr + " is an odd number.");
        }
    }
      console.log(EvenorOdd(10)); //even number
      console.log(EvenorOdd(9)); //odd number


  //15. Write a program which can give grades to students according to theirs scores:
      
          function getGrade(score){
           
           if(score >= 80 && score <= 100) {
                      return "'A'";
           } 
             
             else if(score >= 70 && score <= 79) {
                      return "'B'";
           }
             else if(score >= 60 && score <= 69) {
                       return "'C'";
          }
             else if(score >= 50 && score <= 59) {
                       return  "'D'";
           }
             else if(score >= 0 && score <= 49) {
                       return "'F'";
             }   
              else if(score < 0){
                       return "Value should not be less than 0.";
            } 
              else if(score > 100) {
                       return  "Value should not be greather than 100.";
              } 
        }                 
          console.log(getGrade(100)); 

  // 16. Check if the season is Autumn, Winter, Spring or Summer. If the user input is 
  
        let month = "December";
  
        if(month === "September" || month === "October" || month === "November") {
                      console.log("The season is Autumn");   
         }
           else if(month === "December" || month === "January" || month === "February") {
                      console.log("The season is Winter");
           }
             else if(month === "March" || month === "April" || month === "May") {
                      console.log("The season is Spring");
             }
               else if(month === "June" || month === "July" || month === "August") {
                      console.log("The season is Summer");
               }
                  else {
                    console.log("This is not a season");
                  }

  // 17. Write a program which tells the number of days in a month.
        
       let moonth = "February";
       let year = 2023;
       let daysInMonth;

       switch (moonth) {
             case "January":
             case "March":
             case "May":
             case "July":
             case "August":
             case "October":
             case "December":
              daysInMonth = 31;
               break;
            case "February":
              if(year % 4 === 0) {
                  daysInMonth = 29;
              }  else {
                   daysInMonth = 28;
              }
               break;
             default:
                daysInMonth = 30;
       }
          console.log("Number of days in " + moonth + " " + year +  " is: "  +  daysInMonth);
    
  // 18. Write a program which tells the number of days in a month, now consider leap year.
     
        let montth = "February";
        let yeaar = 2020;
        let dayssinmonth;

        switch (montth) {
          case "January":
            case "March":
            case "May":
            case "July":
            case "August":
            case "October":
            case "December":
              dayssinmonth = 31;
               break;
            case "February":
              if (yeaar % 4 === 0) {
               if (yeaar % 100 === 0) {
                 if (yeaar % 400 === 0) {
                       dayssinmonth = 29;
                 } else {
                     dayssinmonth = 28;
                 }
               } else {
                   dayssinmonth = 29;
               }
              }  else {
                  dayssinmonth = 28;
              }
                break;
                default:
                  dayssinmonth = 30;
          }
           console.log("Number of days in " + montth + " "+ yeaar + " is: " + dayssinmonth);

  // 19. Create a countries.js file and store the countries name into this file, create a file web_techs.js and store the popular web technology names into this file. Access both file in a third file named main.js

         //2 files Linked in main.js. 
  
  //20. In the following shopping cart add, remove, edit items
  // => const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
  // - add 'Meat' in the beginning of your shopping cart if it has not been already added
  // - add Sugar at the end of your shopping cart if it has not been already added
  // - remove 'Honey'
  // - modify Tea to 'Green Tea'

     const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
     if (shoppingCart.indexOf('Meat','Sugar') === -1) {
     shoppingCart.unshift('Meat');
     shoppingCart.push('Sugar');
     let index  = shoppingCart.indexOf('Honey');
     shoppingCart.splice(index, 1);
     let index1 = shoppingCart.indexOf('Tea');
     shoppingCart.splice(index1, 1, "Green Tea");
  } 
     console.log(shoppingCart);  //Array Methods

 // 21. In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.
    
     let countries = ["India", "Austrila", "Mexico","Finland", "Japan"];

     if(countries === 'Ethiopia'){
                console.log('ETHIOPIA');
     }
       else{
        console.log(countries.unshift('Ethiopia'));
       }
     console.log(countries); //Array check

  // 22. The following is an array of 10 students ages:
  // => const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
  // - Sort the array and find the min and max age
  // - Find the median age(one middle item or two middle items divided by two)
  // - Find the average age(all items divided by number of items)
  // - Find the range of the ages(max minus min)
  // - Compare the value of (min - average) and (max - average), use abs() method

   const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

   ages.sort();
   console.log(ages);

   let minage = Math.min(...ages);
   console.log("Minimum age: " + minage);

   let maxage = Math.max(...ages);
   console.log("Maximum age: " + maxage); //min and max ages.

   let  medianage;

   if (ages.length % 2 === 0){
    
       let middle1 = ages[ages.length / 2 - 1];
       let middle2 = ages[ages.length / 2];
       medianage = (middle1 + middle2) / 2;
   } else {
      medianage = ages[Math.floor(ages.length / 2)];
   }
     console.log("Median age: " + medianage); // Median age.
  
     let totalage = ages.reduce((a, b) => a + b);
     let averageage = totalage / ages.length;
     console.log("Average age: " + averageage); // Average age.

    let miniage = Math.min(...ages);
    let maxiage = Math.max(...ages);
    let range = maxiage - minage;
    console.log("Range of Ages: " + range); // Range of ages.

    let averageages = ages.reduce((a, b) => a + b) / ages.length;
    let miinage = Math.min(...ages);
    let maxxage = Math.max(...ages);
    let mindiff = Math.abs(miinage - averageages);
    let maxdiff = Math.abs(maxxage - averageages);

    if (mindiff > maxdiff) {
        console.log("The difference between the minimum age and the average age is greater than the difference between the maximum age and the average age.");
    }
      else if (mindiff < maxdiff) {
        console.log("The difference between the maximum age and the average age is greater than the difference between the minimum age and the average age.");
    }
      else {
       console.log("The difference between the minimum age and the average age is equal to the difference between the maximum age and the average age.");
    } // Compare the value min - max abs() method.


  //23. Write a program to check that the number given by the user is a prime number or not.

      function primeornot(numbs) {
        if (numbs % 2 === 0) {
              console.log(numbs + " is a Prime Number.");
        }
          else {
               console.log(numbs + " is not a Prime Number.");
          }
      }
        console.log(primeornot(6)); // Prime Number. 
        console.log(primeornot(7)); // not Prime Number.


  //24. Write a program to create two array "even" and "odd" having even and odd number between the 0 to 100 (0 and 100 included).
        
        let even = [];
        let odd = [];

      for(let i = 0; i <= 100; i++) {
          if (i % 2 === 0) {
            even.push(i);
          } else {
              odd.push(i);
          }
      }
         console.log("Even Numbers: " + even);
         console.log("Odd Numbers: " + odd);
          

  //25. Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.
  // - The same groups apply to both men and women.
  // - Underweight: BMI is less than 18.5
  // - Normal weight: BMI is 18.5 to 24.9
  // - Overweight: BMI is 25 to 29.9
  // - Obese: BMI is 30 or more

        function calculateBMI(weight, height) {
              let bmi = weight / (height * height);

               if (bmi <= 18.5) {
                   console.log("Underweight");
               } else if (bmi >= 18.5 && bmi <= 24.9) {
                    console.log("Normal weight");    
               } else if (bmi >= 25 && bmi <= 29.9) {
                    console.log("Overweight");
               } else if (bmi >= 30) {
                    console.log("Obese");
               }
        }
          calculateBMI(10, 1.8); // BMI Calculator.
         

     
  // 26. Write a program to print the table of any number given by the user. The format of the output should be smiliar to the below example-
	// If the number given by the user is 2 then the output should look like this-
	// 2 * 1 = 2
	// 2 * 2 = 4
	// 2 * 3 = 6 and so on till 2 * 10 = 20.

       function printTable(numr){
         for(let i = 1; i <= 10; i++) {
               console.log(numr + " * " + i + " = " + (numr * i));
         }
       }
         console.log(printTable(2)); // Print Table.
         

  //27. Write a program to print all the prime number between 0 to 100 (0 and 100 included).    
  
     for(let i = 0; i <= 100; i++) {
          let isprime = true;
          if(i <= 1) {
            isprime = false;
          } else {
            for(let j = 2; j <= Math.sqrt(i); j++) {
             if (i % j === 0) {
               isprime = false;
               break;
             }
          }
       }
         if (isprime){
            console.log(i);
         }  
     }   //Prime Number 0 to 100.


//28. Write a program to print the given patterns using the loops-
// 	a. Print a triangle pattern, if the given input is 3 then the pattern should be similar to the given output
 
     let size = 3;
     for(let i = 1; i <= size; i++) {
     let row = "";
     for(let j = 1; j <= i; j++) {
        row += "*";
     }
     console.log(row);
     } // Print Triangle Pattern.


// b. Print a square pattern, if the input is 3 then the output should be similar to the given output

     let sizee = 3;
     for(let i = 1; i <= sizee; i++) {
     let roww = "";
     for(let j = 1; j <= sizee; j++) {
        roww += "*";
     }
       console.log(roww);
     } // Print Square Pattern.


// c. Print a pyramid pattern, if the input is 3 then the output should be similar to the given output
        
       let sizze = 3;
       for (let i = 1; i <= sizze; i++) {
            let roow = "";
        for (let j = 1; j <= (2 * sizze - 1); j++) {
            if (j >= sizze - (i - 1) && j <= sizze + (i - 1)) {
               roow += "*";
            } else {
                roow += " ";
            }
        }
          console.log(roow);
       } // Print pyramid pattern.


 //29. Write a javascript program which takes the input of filename as string and prints the extension of the file in the console.
         
       let filename = "index.title";
        let extension = filename.substring(filename.lastIndexOf(".")+ 1); 
      console.log(extension); // Prints the extension.


//30. Create a simple calculator program in JavaScript which can perform the addition, substraction, multiplication and division on given numbers.

      let cal1 = prompt("Enter first number");
      let operation = prompt("Enter operation: +, -, *, /");
      let cal2 = prompt("Enter second number");

      if(operation === "+") {
        console.log("Addition:" + (cal1 + cal2));
      } else if(operation === "-") {
        console.log("Subtraction:" + (cal1 - cal2));
      } else if(operation === "*") {
        console.log("Multiplication:" + (cal1 * cal2));
      } else if(operation === "/") {
        console.log("Division:" + (cal1 / cal2));
      } else {
        console.log("Invalid operator.");
      } // Simple Calculator. 