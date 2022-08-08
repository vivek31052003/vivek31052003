console.log("weelcome to my othello");
let turn = "X";
let gameover = false;
let music = new Audio('click sound 2.mp3');
let winmusic = new Audio('win sound.mp3');

const changeTurn = ()=>{
    return turn === "X"? "O": "X"
}
function checkWinner(){
    let boxer = document.querySelectorAll('.text');
    let d =0;
    for(var i=0;i<64;i++){
        if(boxer[i].innerHTML !== "" ){d++;}
    }
    if(d === 64){gameover = true;return 0;}
    else {gameover =false;return 0;}
}

var a;
let boxer = document.querySelectorAll('.text');
function flip(a){
    
    for(var i = a+1;i<a-a%8+8;i++)
    {
       if(boxer[i].innerHTML === turn) { for(var j=a+1;j<i;j++){if(turn === "X"){boxer[j].innerHTML = "X"}
                                                            else if (turn === "O"){boxer[j].innerHTML = "O"}
                                                        }
                                                        break;}
        if(boxer[i].innerHTML === "") { break;}
    }
    for(var i= a-1;i>=a-a%8;i--)
    {
        if(boxer[i].innerHTML === turn){ for(var j=a-1;j>i;j--){if(turn === "X"){boxer[j].innerHTML = "X"}
                                                               else if(turn === "O"){boxer[j].innerHTML = "O"}
                                                         }
                                                         break;}
        if(boxer[i].innerHTML === ""){break;}
    }
    for(var i=a+8;i<64;i++)
    {
        if(boxer[i].innerHTML === turn){ for(var j=a+8;j<i;j++){if(turn === "X"){boxer[j].innerHTML = "X"}
                                                                else if(turn === "O"){boxer[j].innerHTML = "O"}
                                                                j=j+7;
                                                           }
                                                          i=i+7; break;}
        if(boxer[i].innerHTML === ""){i=i+7;break;}
        i=i+7;
    }
    for(var i=a-8;i>=0;i--)
    {
        if(boxer[i].innerHTML === turn){ for(var j= a-8;j>i;j--){if(turn === "X"){boxer[j].innerHTML = "X"}
        else if(turn === "O"){boxer[j].innerHTML = "O"}
        j=j-7;
   }
  i=i-7; break;}
        if(boxer[i].innerHTML === ""){i=i-7;break;}
        i=i-7;
    }
    for(var i= a+9;i<64 && i%8>a%8;i++)
    {
        if(boxer[i].innerHTML === turn){ for(var j= a+9;j<i;j++){if(turn === "X"){boxer[j].innerHTML = "X"}
        else if(turn === "O"){boxer[j].innerHTML = "O"}
        j=j+8;
   }
  i=i+8; break;}
        if(boxer[i].innerHTML === ""){i=i+8;break;}
        i=i+8;
    }
    for(var i= a+7;i<64 && i%8<a%8;i++)
    {
        if(boxer[i].innerHTML === turn){ for(var j= a+7;j<i;j++){if(turn === "X"){boxer[j].innerHTML = "X"}
        else if(turn === "O"){boxer[j].innerHTML = "O"}
        j=j+6;
   }
  i=i+6; break;}
        if(boxer[i].innerHTML === ""){i=i+6;break;}
        i=i+6;  
    }
    for(var i= a-9;i>=0 && i%8<a%8;i--)
    {
        if(boxer[i].innerHTML === turn){ for(var j= a-9;j>i;j--){if(turn === "X"){boxer[j].innerHTML = "X"}
        else if(turn === "O"){boxer[j].innerHTML = "O"}
        j=j-8;
   }
  i=i-8; break;}
        if(boxer[i].innerHTML === ""){i=i-8;break;}
        i=i-8;   
    }
    for(var i= a-7;i>=0 && i%8>a%8;i--)
    {
        if(boxer[i].innerHTML === turn){ for(var j= a-7;j>i;j--){if(turn === "X"){boxer[j].innerHTML = "X"}
        else if(turn === "O"){boxer[j].innerHTML = "O"}
        j=j-6;
   }
  i=i-6; break;}
        if(boxer[i].innerHTML === ""){i=i-6;break;}
        i=i-6;   
    }

}


let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach((arrayitem, index, fullArray) =>{
    let boxtext = arrayitem.querySelector('.text');
    arrayitem.addEventListener('click', ()=>{
     if(!gameover){   if(boxtext.innerHTML === ''){
            if(turn === "X")
            {boxtext.innerHTML = "X";}
            else{boxtext.innerHTML = "O"}
            //var b = boxes.indexOf(element);
            flip(index);
            turn = changeTurn();
            //pas vala condition
           
           music.play();
            checkWinner();
            
            if (!gameover){if(turn === "X")
                {document.getElementsByClassName("changename")[0].innerHTML  = "Turn for X" ;}
                else{ document.getElementsByClassName("changename")[0].innerHTML = "Turn for O"}
            
            } }
        }
        if(gameover){var z=0;
            let boxer = document.querySelectorAll('.text');
            for(var i=0;i<64;i++){
                if(boxer[i].innerHTML === "X"){z++;}
        
            }
            if(z>32){document.getElementsByClassName("changename")[0].innerHTML  = "X Wins";winmusic.play();}
            if(z<32){document.getElementsByClassName("changename")[0].innerHTML  = "O Wins";winmusic.play();}
            if(z===32){document.getElementsByClassName("changename")[0].innerHTML  = "There is a tie";}
        }
    })
    })
Reset.addEventListener('click', ()=>{
    let text = document.querySelectorAll('.text');
    Array.from(text).forEach(element => {
        element.style.color = "black";
        element.innerHTML = ""
       
    });
    text[27].innerHTML = "O";
    text[28].innerHTML = "X";
    text[35].innerHTML = "X";
    text[36].innerHTML = "O";
    
    
    turn = "X";
    gameover = false;
        document.querySelector('.changename').innerHTML  = "Turn for X";
        
        
        
})
