

let btn = document.getElementById("butn");


let randomcolor = () => {
    let val = "0123456789ABCDEF";
    let hex = "#";
     for (let i = 0; i < 6; i++) {
          hex = hex + val[Math.floor(Math.random() * 16)];
     }
     return hex;
};

console.log(randomcolor());

 function changerandomcolor() {
      document.body.style.backgroundColor = randomcolor();
 }

 btn.addEventListener('click', changerandomcolor);