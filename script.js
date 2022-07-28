const cont = document.querySelector('.main-container')
const blackColor = document.querySelector('.black');
const rainbowColor = document.querySelector('.rainbow');
const erase = document.querySelector('.erase');
const slider = document.querySelector('.myRange');
const output = document.querySelector('.output');
output.textContent = slider.value + " X " + slider.value;
let newVal = document.querySelector('.newVal');
let totalVal = slider.value * slider.value;

window.addEventListener('load', function(){
    resetBoard();
    createGrid(slider.value);
    blackBrush();
})

//handle clicks
blackColor.addEventListener('click', function(){
    resetBoard();
    blackBrush();
})
rainbowColor.addEventListener('click', function(){
    resetBoard();
    rainbowBrush();
})
erase.addEventListener('click', function(){
    resetBoard();
})
newVal.addEventListener('click', function(){
    resetBoard();
    deleteGrid();
    createGrid(slider.value);
    blackBrush();
})
slider.addEventListener('input', function(){
    output.textContent = slider.value + " X " + slider.value; 
})


function deleteGrid(){
    const divs = document.querySelectorAll('.sketch-area');
    divs.forEach((div) => {
        cont.removeChild(div);
    })

}
function createGrid(val){
    cont.style.gridTemplateColumns = "repeat(" +val+", 1fr)";
    for(let i = 0; i < val ** 2; i++) {
        const div = document.createElement('div');
        div.classList = "sketch-area";
        div.style.border = "0.1px solid #000"
        cont.appendChild(div);
    
    }
}

//black color

function blackBrush(){
    const divs = document.querySelectorAll('.sketch-area');
    divs.forEach((div) => {
        div.addEventListener('mouseover', function(){
            let firstColor = Math.floor(Math.random() * 220);
            let secondColor = Math.floor(Math.random() * 220);
            let thirdColor = Math.floor(Math.random() * 220);
            let newColor = "("+firstColor+","+secondColor+","+thirdColor+")";
            div.style.backgroundColor = "black";
        })
    }) 
}

//rainbow color

function rainbowBrush(){
    const divs = document.querySelectorAll('.sketch-area');
    divs.forEach((div) => {
        div.addEventListener('mouseover', function(){
            let firstColor = Math.floor(Math.random() * 220);
            let secondColor = Math.floor(Math.random() * 220);
            let thirdColor = Math.floor(Math.random() * 220);
            let newColor = "("+firstColor+","+secondColor+","+thirdColor+")";
        div.style.backgroundColor = "rgb"+newColor;
    })
})
}

// Reset the board
function resetBoard(){
    const divs = document.querySelectorAll('.sketch-area');
divs.forEach((div) => {
    div.style.backgroundColor = "white"; 
        
    })
}