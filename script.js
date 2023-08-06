const butt=document.getElementById("rps");
let score=0;
let res=document.getElementById("player-score");
let result=document.getElementById("result");
function calculate(button)
{
    let val=Number(button.value);
    let cval=Math.ceil(Math.random()*3);
    if(val==cval)
    {
        score+=0;
    result.innerText='Ah Oh, Its a tie';
    }
    else if(cval==1&&val==2)
    {
        score+=1;
        result.innerText='Computer Generated Rock, You Clicked on Paper!'
    }
    else if(cval==1&&val==3)
    {
        score-=1;
        result.innerText='Computer Generated Rock, You Clicked on Scissor!'
    }
    else if(cval==2&&val==3)
    {
        score+=1;
        result.innerText='Computer Generated Paper, You Clicked on Scissor!'
    }
    else if(cval==3&&val==1)
    {
        score+=1;
        result.innerText='Computer Generated Scissor, You Clicked on Rock!'
    }
    else if(cval==2&&val==1)
    {
        score-=1;
        result.innerText='Computer Generated Paper, You Clicked on Rock!'
    }
    else if(cval==3&&val==2)
    {
        score-=1;
        result.innerText='Computer Generated Scissor, You Clicked on Paper!'
    }
    res.innerText='Your Score = '+score;
}
function restart(){
    score=0;
    res.innerText="Game Ended";
    result.innerText="";
}