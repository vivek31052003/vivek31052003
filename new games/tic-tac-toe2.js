console.log("welcome to my tic tac toe");
let turn= "X";
let gameover = false;

let music = new Audio('click sound 2.mp3');
let winmusic = new Audio('win sound.mp3');
let losemusic = new Audio('gamelose.wav');
const changeTurn = ()=>{
    return turn === "X"? "0": "X"
}
// function to check win
const checkWinner = ()=>{
let text = document.getElementsByClassName('text');
let wins = [
    [1,2,3,40,10,0],
    [1,5,9,40,20,45],
    [1,4,7,30,20,90],
    [2,5,8,40,20,90],
    [3,6,9,50,20,90],
    [3,5,7,40,20,135],
    [4,5,6,40,20,0],
    [7,8,9,40,30,0]

]
wins.forEach(e =>{
    if((text[e[0]-1].innerText === text[e[1]-1].innerText) && (text[e[2]-1].innerText === text[e[0]-1].innerText) && (text[e[0]-1].innerText !== ""))
        {document.querySelector('.changename').innerText = "player " + text[e[0]-1].innerText + " wins";
        let texts = document.querySelectorAll('.text');
        texts[e[0]-1].style.color = "blue";
        texts[e[1]-1].style.color = "blue";
        texts[e[2]-1].style.color = "blue";
        
        gameover = true;
        winmusic.play();

}
})
}
// function to  check tie

function checktie(){var t=0;
    
    let text = document.getElementsByClassName('text');
    for(var i=0 ;i<9;i++){
        if(text[i].innerText === "X" || text[i].innerText === "0"){t++;}
    }
    if(t === 9){ 
        document.querySelector('.changename').innerText = "There is a Tie";
        losemusic.play();
        gameover = true;}
    
}
// main logic

    let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.text');
    element.addEventListener('click', ()=>{
     if(!gameover){   if(boxtext.innerText === ''){
            boxtext.innerText = turn;
            music.play();
            turn = changeTurn();
           //music.play();
            checkWinner();
            checktie();
            if (!gameover){
                document.getElementsByClassName("changename")[0].innerText  = "Turn for " + turn;
            }
            
            
         }
        }})
    })

Reset.addEventListener('click', ()=>{
    let text = document.querySelectorAll('.text');
    Array.from(text).forEach(element => {
        element.style.color = "black";
        element.innerText = ""
       
    });
    
    turn = "X";
    gameover = false;
        document.querySelector('.changename').innerText  = "Turn for " + turn;
        let texts = document.querySelectorAll('.text');
        
        
})


    


 
    
