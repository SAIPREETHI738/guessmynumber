let secretnumber= Math.trunc(Math.random()*20+1);

let score=20;
let highscore=0;

document.querySelector('.number').textContent=secretnumber;

document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value);

    console.log(guess, typeof guess);
    document.querySelector('.again'); 
    // when there is no input
    if(!guess){
        document.querySelector('.message').textContent= '⛔ No number!';
        
    }
    // when player wins
    else if(guess === secretnumber){
        document.querySelector('.message').textContent= '🎉Correct number😍';
        document.querySelector('.number').textContent=secretnumber;

        document.querySelector('.container').style.backgroundColor="green";
        document.querySelector('.box').textContent=guess;


        if(score > highscore){
            highscore =score;
            document.querySelector('.highscore').textContent=highscore;
        }
        
    }else if(guess !==secretnumber){
        if(score >1){
            document.querySelector('.message').textContent=guess >secretnumber ?'Too high!':'Too low!';
            score--;
            document.querySelector('.score').textContent=score;
            document.querySelector('.highscore').textContent=score;
        }else{
            document.querySelector('.message').textContent='you lost the game!';
            document.querySelector('.score').textContent=0;
        }
    }
});

document.querySelector('.again').addEventListener('click',function(){
    score =20;
    secretnumber=Math.trunc(Math.random()*20)+1;

    document.querySelector('.message').textContent ='Start guessing...';
    
    document.querySelector('.score').textContent= score;

    document.querySelector('.box').textContent='❔';

    document.querySelector('.guess').value='';
    
    document.querySelector('.container').style.backgroundColor='crimson';
    
});