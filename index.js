document.addEventListener("DOMContentLoaded",function printCanvas() {
    let canvasClearBtn = document.createElement("div");

    const container = document.createElement("div");
container.id = "container";
document.body.appendChild(container);
const table = document.createElement("div");
table.id="table";
container.appendChild(table);
const square = document.createElement("div");
let tableSize =32 ;

let canvasEdit = document.getElementById("colorField");

canvasEdit.appendChild(canvasClearBtn);
canvasClearBtn.id= `canvasClearBtn`;
canvasClearBtn.innerHTML = "Clear Canvas";
canvasClearBtn.addEventListener("click", ()=>{
    let table = document.getElementById("table");
    let table1 = document.createElement("div");
    table1.id = "table";
    for (let index = 0; index < tableSize; index++) {
        const quarter = document.createElement("div");
       for (let index = 0; index  < tableSize ; index++) {
        const square = document.createElement("div");
        square.id = `square ${index}`;
         square.classList= "square";
        
         quarter.appendChild(square);
         table1.appendChild(quarter);
        //make colors adjustable
        //make the canvas size adjustable
      
         square.addEventListener("mouseover",()=>{
            
            square.style.backgroundColor = `blue`;
         })
        
       }
        
    }
    table.replaceWith(table1);
})
//i chose to make buttons because i think of this project as a toy
//and you don't really want pro features in a toy, it just does it's thing and you don't have to think
let tableDimensions = document.createElement("div");
tableDimensions.id = "tableD";
canvasEdit.appendChild(tableDimensions);
let dimensionSetting1 = document.createElement("div");
let dimensionSetting2 = document.createElement("div");
let dimensionSetting3 = document.createElement("div");
let dimensionSetting4 = document.createElement("div");
let dimensionSettingSubmit = document.createElement("div");
dimensionSettingSubmit.innerHTML = "Apply Size";
canvasEdit.appendChild(dimensionSetting1);
canvasEdit.appendChild(dimensionSetting2);
canvasEdit.appendChild(dimensionSetting3);
canvasEdit.appendChild(dimensionSetting4);
canvasEdit.appendChild(dimensionSettingSubmit);
dimensionSetting1.innerHTML="16x16";
dimensionSetting1.addEventListener("click",()=>{
    tableSize=16;
    console.log(tableSize);
})
dimensionSetting2.innerHTML="32x32";
dimensionSetting2.addEventListener("click",()=>{
    tableSize=32;
    console.log(tableSize);
})
dimensionSetting3.innerHTML="64x64";
dimensionSetting3.addEventListener("click",()=>{
    tableSize=64;
    console.log(tableSize);
})
dimensionSetting4.innerHTML="128x128";
dimensionSetting4.addEventListener("click",()=>{
    tableSize=128;
    console.log(tableSize);
})
dimensionSettingSubmit.addEventListener("click", ()=>{
    let table = document.getElementById("table");
    let table1 = document.createElement("div");
    table1.id = "table";
    for (let index = 0; index < tableSize; index++) {
        const quarter = document.createElement("div");
       for (let index = 0; index  < tableSize ; index++) {
        const square = document.createElement("div");
        square.id = `square ${index}`;
         square.classList= "square";
        
         quarter.appendChild(square);
         table1.appendChild(quarter);
        //make colors adjustable
        //make the canvas size adjustable
      
         square.addEventListener("mouseover",()=>{
            
            square.style.backgroundColor = `blue`;
         })
        
       }
        
    }
    table.replaceWith(table1);
});


square.id = "square";

    for (let index = 0; index < 80; index++) {
        const quarter = document.createElement("div");
       for (let index = 0; index < 80; index++) {
        const square = document.createElement("div");
        //square.id = `square ${index}`;
        square.classList= "square";
        
        quarter.appendChild(square);
        table.appendChild(quarter);
        //make colors adjustable
        //make the canvas size adjustable
      
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

// colors.forEach((item,index,arr)=>{
//     console.log(item);
//     var buttonColorChange = document.createElement("button");
    
//     buttonColorChange.id = `${item}`
//     buttonColorChange.innerHTML = `${item}`;
//     colorPickField.appendChild(buttonColorChange);


//     var buttonColorChange = document.getElementById(`${item}`)
//     buttonColorChange.addEventListener("click",(e)=>{
//         let id = e.originalTarget.id;
//         console.log(id);
//         console.log(container.firstChild.childNodes.NodeList);
//      let   justDiggingToFindSquare = container.firstChild.childNodes;
//      console.log(justDiggingToFindSquare);
//      justDiggingToFindSquare.forEach((row)=>{
//         console.log(row.childNodes);
        
//         row.childNodes.forEach((square)=>{
//             square.addEventListener("mouseover",()=>{
//                 square.style.backgroundColor = id;
//             })
//         })
//         })

// })
// })



// 

//  square.addEventListener("mouseover",() =>{
//      square.style.backgroundColor("blue");
//     console.log("yipeeee");
//  })
//add id,styling etc
//append the squares,style them

// Simple example, see optional options for more configuration.
const pickr = Pickr.create({
    el: '.color-picker',
    theme: 'classic', // or 'monolith', or 'nano'

    swatches: [
        'rgba(244, 67, 54, 1)',
        'rgba(233, 30, 99, 0.95)',
        'rgba(156, 39, 176, 0.9)',
        'rgba(103, 58, 183, 0.85)',
        'rgba(63, 81, 181, 0.8)',
        'rgba(33, 150, 243, 0.75)',
        'rgba(3, 169, 244, 0.7)',
        'rgba(0, 188, 212, 0.7)',
        'rgba(0, 150, 136, 0.75)',
        'rgba(76, 175, 80, 0.8)',
        'rgba(139, 195, 74, 0.85)',
        'rgba(205, 220, 57, 0.9)',
        'rgba(255, 235, 59, 0.95)',
        'rgba(255, 193, 7, 1)'
    ],

    components: {

        // Main components
        preview: true,
        opacity: true,
        hue: true,

        // Input / output Options
        interaction: {
            hex: true,
            rgba: true,
            hsla: true,
            hsva: true,
            cmyk: true,
            input: true,
            clear: true,
            save: true
        }
    }
});

pickr.on('change',(color,inst)=>{
    const rgbColor = color.toRGBA().toString();
    let   justDiggingToFindSquare = container.firstChild.childNodes;
    console.log(justDiggingToFindSquare);
    justDiggingToFindSquare.forEach((row)=>{
       console.log(row.childNodes);
       
       row.childNodes.forEach((square)=>{
           square.addEventListener("mouseover",()=>{
               square.style.backgroundColor = rgbColor;
           })
       })
       })

});


    

    
