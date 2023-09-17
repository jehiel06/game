function rpsGame(yourChoice){
    let humanChoice,botChoice,msg,color;
    humanChoice=yourChoice.id;
    //console.log('HC'+ yourChoice.id)
    let x=rand();

    if (x==0){
        botChoice='rock';
    }
    else if(x==1){
        botChoice='paper';
    }
    else{
        botChoice='scissors';
    }
    //console.log('CC'+ botChoice);
    result(humanChoice,botChoice);
}
function result(humanChoice,botChoice){
if(humanChoice=='rock' && botChoice=='rock' || humanChoice=='paper' && botChoice=='paper'|| humanChoice=='scissors' && botChoice=='scissors'){
    msg ='Draw!';
}
else if(humanChoice=='rock'&&botChoice=='scissors' || humanChoice=='paper'&&botChoice=='rock' || humanChoice=='scissors'&&botChoice=='paper')   {

    msg ='You Won!';
}
else{
    msg='You Lose!';
}

//console.log(msg);
rpsFrontend(humanChoice,botChoice);
}
function rand(){
    return Math.floor(Math.random()*3);
}

function rpsFrontend(hc,bc){

var imgDB={
    'rock':document.getElementById('rock').src,
    'paper':document.getElementById('paper').src,
    'scissors':document.getElementById('scissors').src
}
document.getElementById('rock').remove();
document.getElementById('paper').remove();
document.getElementById('scissors').remove();

var humanDiv=document.createElement('div');
var msgDiv=document.createElement('div');
var botDiv=document.createElement('div');

humanDiv.innerHTML="<img src='" + imgDB[hc] +"' height=150 weight=150 style='box-shadow:0px 10px 50px rgba(37,50,233,1);'>" 
document.getElementById('fb-rps-div').appendChild(humanDiv);
botDiv.innerHTML="<img src='" + imgDB[bc] +"' height=150 weight=150 style='box-shadow:0px 10px 50px rgba(243,38,24,1);'>"
document.getElementById('fb-rps-div').appendChild(botDiv);
fun();
}
function fun()
{
    document.getElementById('res').innerHTML=msg;
    document.getElementById('r').innerHTML="Refresh And Try Again!!!";
}
  function AutoRefresh( t ) {
               setTimeout("location.reload(true);", t);
            }
        setTimeout(function(){
   window.location.reload();
}, 5000);
