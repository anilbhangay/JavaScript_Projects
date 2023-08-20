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
   //  let set = 2;

   //  const dot = [2,4,6,8,10,12,14,16,18];
   //  dot.forEach((num) => console.log(set += num));
   
   // let get = 1;
   // const fit = [1,2,3,4,5,6,7,8,9];
   // fit.forEach((set) => console.log(get += set));


   // SetTimeout in SetTimeout
   //  setTimeout(() => {
   //     document.write(5 + 5);
   //     setTimeout(() => {
   //       document.write("Solve");
   //     }, 3000);
   //  }, 2000);


  // Reduce Method
   //  const sos = [2,4,6,8,10,12,14];

   //  let cod = sos.reduce((acc,curr) => acc + curr,2);
   //  console.log(cod);

   // Closures
   
  //  function Customer() {
  //     let accountno = 1283832923;
  //     let bal = 20000;
  //  function deposite(val){
  //    bal = bal + val;
  //    console.log(bal);
  //  }
  //   function withdrawn(val){
  //   bal = bal - val;
  //     console.log(bal);
  //   }
  //     deposite(20000);
  //     withdrawn(32000);
  //  }

  //  console.log(Customer());

   // Event Loop
   const userone = () => {
      console.log("Hello Dev");
   };

   const usertwo = () => {
     setTimeout(() => {
         console.log("Iam a setTimeout");
     }, 3000)
       console.log("Hello App");
   };

   const userthree = () => {
     console.log("Hello Web");
   };
      userthree();
      usertwo();
      userone();
   
    