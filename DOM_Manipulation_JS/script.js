  
        // Create Element on Screen
  for (let i = 0; i < 2; i++) {
         let set = document.createElement("p");
         set.className = "fsp";
         set.style.fontSize = "20px";
         set.textContent = 'this is a process of text';
         console.log(set);
         document.body.appendChild(set);
  } 
        //Create Element on Screen
  for(let i = 0; i < 3; i++) {
      let val = document.createElement("h1");
      val.className = "jsp";
      val.style.fontSize = "20px";
      console.log(val);
      val.textContent = 'Document object model';
      document.body.appendChild(val);
  };

    document.getElementById("para").innerHTML
      console.log(para)

   document.getElementsByTagName("p");
   console.log(para);

               //QuerySelector
    let p = document.querySelector("#para").innerHTML = "This is a practice page";
       console.log(p);

    let h1 = document.querySelector(".head").innerText = "Hello world";
       console.log(h1);

    let vas = document.querySelector("h1").style.backgroundColor = "blue";
    let kac = document.querySelector("h1").style.fontSize = "30px";

         //Confirm
     let rest = confirm("Are you Agree?");

     if(rest) {
        document.querySelector(".head").innerHTML = "He/she ok with this deal!";
     }
       else {
         document.querySelector(".head").innerHTML = "He/she not ok with this deal!";
       }
         
            //Prompt
    let vol = prompt("solve this 80 - 18");

    if(vol == 62) {
            document.getElementById("para").innerHTML = "Success!"
    }  
      else {
            document.getElementById("para").innerHTML = "Failed!"
    }

    // insert inner html
    const list =  `
                   <li>Rohit</li>
                   <li>Kholi</li> 
                   <li>Dhoni</li>
                   <li>Raina</li> 
                   <li>Surya</li>
                                  `;
    const ul = document.querySelector("ul").innerHTML = list;
      console.log(list);

          // insert inner html
      let title = document.createElement("button");
      title.className = "btn";
      title.style.backgroundColor = "blue";
      title.style.color = "white";
      title.style.fontSize = "15px";
      title.style.padding = "20px 35px";
      title.style.border = "none";
      title.style.borderRadius = "24px";
      title.textContent = "Submit";
      console.log(title);
      document.body.appendChild(title);

         //Function
      function math() {
        let value = prompt("solve this 60 - 30");
        if(value == 30) {
            document.getElementById("js").innerText = "Success Redirect";
            document.getElementById("fsjs").style.backgroundColor = "Green";
        } 
          else {
            document.getElementById("js").innerText = "Failed try again!";
            document.getElementById("fsjs").style.backgroundColor = "Red";
        }         
      };

         //Remove child
         let d = document.getElementById("top");
         let xp = document.getElementById("nested");
         let xd = d.removeChild(xp);
         console.log(xd); 
           
  