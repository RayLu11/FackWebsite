

function acceptTerm()
{
        document.querySelector('.bg-modal').style.display = "none";
}
function declineTerm()
{
        alert("You need accept term to continue visit website!");
}

function randomlize()
{
        randomNumber = Math.floor(Math.random() * 3)+1;
        console.log(randomNumber)
        if(randomNumber == 1)
        {
                document.getElementById("textbox1").style.display = "flex";
        }
        else if(randomNumber == 2)
        {
                document.getElementById("textbox2").style.display = "flex";
        }
        else if(randomNumber == 3)
        {
                document.getElementById("textbox3").style.display = "flex";
        }
        
}
