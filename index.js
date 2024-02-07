document.addEventListener("DOMContentLoaded",function printCanvas() {
    const container = document.createElement("div");
container.id = "container";
document.body.appendChild(container);
const table = document.createElement("div");
table.id="table";
container.appendChild(table);
const square = document.createElement("button");

square.id = "square";

    for (let index = 0; index < 16; index++) {
        const quarter = document.createElement("div");
       for (let index = 0; index < 16; index++) {
        const square = document.createElement("button");
        //square.id = `square ${index}`;
        square.classList= "square";
        
        quarter.appendChild(square);
        table.appendChild(quarter);
        
       }
        
    }
   // console.log(table);

})
    function kolor(){
      //  let square =document.getElementById("square");
        console.log("miau");
       // square.style.backgroundColor("blue");
    }
const square = document.querySelectorAll(".square")
var squareArray = Array.prototype.slice.call( square )
console.log(squareArray);
// 

//  square.addEventListener("mouseover",() =>{
//      square.style.backgroundColor("blue");
//     console.log("yipeeee");
//  })
//add id,styling etc
//append the squares,style them

