

//localStorage.setItem("1",randomNumber)
function acceptTerm()
{
        document.querySelector('.bg-modal').style.display = "none";
        sessionStorage.setItem("randonNumbers",1);
}
function declineTerm()
{
        alert("You need accept term to continue visit website!");
}
function randomlize()
{
        if(typeof(Storage) !== "undefined") {
                if (sessionStorage.clickcount) {
                  sessionStorage.clickcount = Number(sessionStorage.clickcount)+1;
                } else {
                  sessionStorage.clickcount = 1;
                }
        }
        //sessionStorage.setItem("randonNumbers","1");
       // number = sessionStorage.getItem("randomNumbers")

        if( sessionStorage.clickcount == 1)
        {
                document.getElementById("textbox1").style.display = "flex";
        }
        else if(sessionStorage.clickcount == 2)
        {
                document.getElementById("textbox2").style.display = "flex";
        }
        else if(sessionStorage.clickcount == 3)
        {
                document.getElementById("textbox3").style.display = "flex";
        }
       
      
      
        
}
