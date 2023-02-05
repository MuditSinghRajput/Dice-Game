let number,element,val1,val2,text;
number=Math.floor(6*Math.random())+1;
element=Math.floor(6*Math.random())+1;

val1="dice"+number+".png";
val2="dice"+element+".png";
document.querySelector(".img1").setAttribute("src",val1);
document.querySelector(".img2").setAttribute("src",val2);

if(number>element){
document.querySelector("h1").innerHTML="Player1 Wins!";
}
if(number<element){
    document.querySelector("h1").innerHTML="Player2 Wins!";
    }
    if(number===element){
        document.querySelector("h1").innerHTML="Match Draws!";
        }
        document.querySelector("h1").innerHTML
