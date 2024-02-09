document.addEventListener("DOMContentLoaded",function printCanvas() {
    const container = document.createElement("div");
container.id = "container";
document.body.appendChild(container);
const table = document.createElement("div");
table.id="table";
container.appendChild(table);
const square = document.createElement("div");
let colorChange = "";

square.id = "square";

    for (let index = 0; index < 40; index++) {
        const quarter = document.createElement("div");
       for (let index = 0; index < 40; index++) {
        const square = document.createElement("div");
        //square.id = `square ${index}`;
        square.classList= "square";
        
        quarter.appendChild(square);
        table.appendChild(quarter);
        //make colors adjustable
        //make the canvas size adjustable
        square.addEventListener("mousedown",function checkSquarePressed(){
            let x =true;
            console.log(x);
            return x;
        })
        square.addEventListener("mouseover",()=>{
            
            square.style.backgroundColor = `blue`;
        })
        
       }
        
    }
   // console.log(table);

})
let colorPickField = document.createElement("div");
document.body.appendChild(colorPickField);
const colors = ["blue","yellow","orange","green","red","black"];

colors.forEach((item,index,arr)=>{
    console.log(item);
    var buttonColorChange = document.createElement("button");
    
    buttonColorChange.id = `${item}`
    buttonColorChange.innerHTML = `${item}`;
    colorPickField.appendChild(buttonColorChange);


    var buttonColorChange = document.getElementById(`${item}`)
    buttonColorChange.addEventListener("click",(e)=>{
        let id = e.originalTarget.id;
        console.log(id);
        console.log(container.firstChild.childNodes.NodeList);
     let   justDiggingToFindSquare = container.firstChild.childNodes;
     console.log(justDiggingToFindSquare);
     justDiggingToFindSquare.forEach((row)=>{
        console.log(row.childNodes);
        
        row.childNodes.forEach((square)=>{
            square.addEventListener("mouseover",()=>{
                square.style.backgroundColor = id;
            })
        })
        })

})
})


// 

//  square.addEventListener("mouseover",() =>{
//      square.style.backgroundColor("blue");
//     console.log("yipeeee");
//  })
//add id,styling etc
//append the squares,style them

