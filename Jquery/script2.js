// HOF
//   const numbers = [1,2,3,4,5];
//     function addone(array){
//         for(let i = 0; i < array.length; i++){
//         }
//         console.log(numbers);

//     }
//       addone(numbers);


// Arrow Function
   //   const sam = () => {
   //     return "Say Hello!";
   //   };
   //     function pam(){
   //         return sam();
           
   //       }
   //     document.write(pam());


   //   callback function 
    // function wook(){
    //   document.write("It's working good!");
    // };

    // setTimeout(wook, 2000);

   //   function dot(){
   //      console.log("Using callback function");
   //   }
   //     setTimeout(log, 3000);

    //function Programing
   //  let set = -2;

   //  const dot = [2,4,6,8,10,12,14,16,18];

   //  dot.forEach((num) => console.log(set += num));

         
   // let get = 1;
   // const fit = [1,2,3,4,5,6,7,8,9];
   // fit.forEach((set) => console.log(get += set));


   // SetTimeour in SetTimeout
    setTimeout(() => {
       document.write(5 + 5);
       setTimeout(() => {
         document.write("Solve");
       }, 3000);
    }, 2000);