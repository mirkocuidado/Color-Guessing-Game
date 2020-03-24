let squars = document.getElementsByClassName("square");
let easy = document.getElementById("easy");
let hard = document.getElementById("hard");
let newColors = document.getElementById("newColors");
let rgb = document.getElementById("titlee");
let colorIt = document.getElementById("tops");

let all = document.getElementById("all");
let donji = document.getElementById("secondRow");

let winner = document.getElementById("winner");

let colors = [];
let numOfColors = 6;
let lucky;
let pobednik = false;

function reset(){

    let pom = parseInt(Math.random()*numOfColors);

    for(let i=0; i<numOfColors; i++){

        let r = parseInt(Math.random()*255);
        let c = parseInt(Math.random()*255);
        let v = parseInt(Math.random()*255);
    
        let word = "rgb("+r+", "+c+", "+v+")";

        if(i==pom){
            rgb.textContent = "RGB("+r+", "+c+", "+v+")";
            lucky=word;
            colorIt.style.backgroundColor = word;
        }
        colors.push(word);
    }
    
    for(let i=0; i<6; i++){
        if(colors[i]){
            squars[i].style.backgroundColor = colors[i];
            squars[i].style.display = "block";
            console.log(colors[i]);
        }
        else{
            squars[i].style.display = "none";
        } 
    }

    colors = [];

    for(let i=0; i<numOfColors; i++){

        squars[i].addEventListener("click", function(){
            var clickedColor = String(this.style.backgroundColor);
            if(clickedColor === lucky){
                winner.textContent = "WINNER!";
                for(let i=0; i<squars.length; i++){
                    squars[i].style.backgroundColor = lucky;
                }
			} else {
				this.style.background = "#232323";
				winner.textContent = "TRY AGAIN!";
			}
        });

    }
}

newColors.addEventListener("click", function(){
    reset();
})

easy.addEventListener("click", function(){
    numOfColors = 3;
    reset();
});

hard.addEventListener("click", function(){
    numOfColors = 6;
    reset();
});
