// Variables to keep track of selected divs and random color div
let selectedColor = null;
const colorDivs = document.querySelectorAll('.color-div');
const randomColorDiv = document.getElementById('randomColorDiv');
const startBtn = document.getElementById('startBtn');
let dv1 = document.getElementById("dv1");
let dv2 = document.getElementById("dv2");
let cbt = document.getElementById("cbt");
let audi =document.getElementById("audi");
let win =document.getElementById("win")
audi.style.display="none"
win.style.display="none"
function audioply() {
    audi.play();
}


dv2.style.display="none";
dv1.style.display="none";
function audioplay() {
    
}


function getRandomColor() {
    const colors = [ 'red','yellow','blue','skyblue','purple'];
    return colors[Math.floor(Math.random() * colors.length)];
}


function setRandomColor() {
    randomColorDiv.style.backgroundColor = getRandomColor();
}


colorDivs.forEach(div => {
    div.addEventListener('click', () => {
        selectedColor = div.style.backgroundColor;
        colorDivs.forEach(d => d.style.border = 'none'); // Reset border
        div.style.border = '3px solid black';
        startBtn.disabled=false
    });
})

function aa() {
    if (randomColorDiv.style.backgroundColor === selectedColor) {
       dv1.style.display="block"; 
       dv2.style.display="block"; 
       dv2.style.backgroundImage='URL("you win.gif")'
        ;
        win.play();
    } else {
     
        dv1.style.display="block"; 
        dv2.style.display="block";
         dv2.style.backgroundImage='URL("you lose.gif")';
         

    }
;
}

startBtn.addEventListener('click', () => {
    if (!selectedColor) {
       
        alert('Please select a color first!');}
        else {
            setRandomColor();
        setTimeout(aa,500)
        }
})
    
cbt.addEventListener("click", function() {
    dv1.style.display = "none";
    dv2.style.display = "none";
});

dv2.addEventListener("click", ()=>{
    dv2.style.backgroundImage='URL("you lose.gif")';
    console.log("done")
})
