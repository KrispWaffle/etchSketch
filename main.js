document.addEventListener("DOMContentLoaded", function(){
  createBoard(32)
 

});
const size = document.getElementById("size")
const eraseButton = document.getElementById("eraseB")

eraseButton.addEventListener("click",erase);
size.addEventListener("click",gsize);

 

function erase(){
    let divs = document.querySelectorAll(".squareCont div");
    divs.forEach(div => {
        div.style.backgroundColor = "white";
    });
  }
  function gsize(){
    let gridSize = prompt("Choose a size for the grid")
    
    if(gridSize >= 100){
        alert("Too big try again")
        gridSize = 32
    }
    createBoard(gridSize);
  }  


function createBoard(size){
    let board = document.querySelector(".squareCont");
    
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    let numDivs = size*size;

    for(let i = 0; i<numDivs; i++ ){
        let div = document.createElement("div");
        div.style.backgroundColor = "white"
        div.addEventListener("mouseover", myfunction)
            
        function myfunction(){
            div.style.backgroundColor = "black"
        }
        board.insertAdjacentElement("beforeend", div)

        document.addEventListener("keypress",(event)=>{
            if(event.key == "z"){
                div.removeEventListener("mouseover", myfunction);
                
            }else if (event.key == "x"){
                div.addEventListener("mouseover", myfunction)
            }
        })
    }
    
}



