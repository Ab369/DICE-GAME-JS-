var n1=Math.floor(Math.random()*6)+1;
var n2=Math.floor(Math.random()*6)+1;

//function for changing image string as per value of n
function ChangeImg(n)
{
    var s="/dice"+n+".png";
    return s;
}


//changing img src by value of n1 and n2 (both methods work)
document.getElementById("dice1").setAttribute("src",ChangeImg(n1));
document.getElementById("dice2").src=ChangeImg(n2);

if(n1>n2)
{
    document.querySelector("header").textContent="Player1 won!"

}

if(n2>n1)
{
    document.querySelector("header").textContent="Player2 won!"

}

if(n1==n2)
{
    document.querySelector("header").textContent="match draw!"

}

