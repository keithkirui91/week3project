/*WHAT WE DO DIV */
var newDivOne = document.getElementById("newDivOne");
var newDivTwo = document.getElementById("newDivTwo");
var newDivThree = document.getElementById("newDivThree");

newDivOne.style.display = "none";
newDivTwo.style.display = "none";
newDivThree.style.display = "none";


function myTogglerOne(){
    var myDivOne = document.getElementById("myDivOne");
    if (myDivOne.style.display === "none") {
      myDivOne.style.display = "block";
      newDivOne.style.display = "none";
  
    } 
    else {
      myDivOne.style.display = "none";
      newDivOne.style.display = "block";
    }
}

function myTogglerTwo(){  
  var myDivTwo = document.getElementById("myDivTwo");
  if (myDivTwo.style.display === "none") {
    myDivTwo.style.display = "block";
    newDivTwo.style.display = "none";

  } 
  else {
    myDivTwo.style.display = "none";
    newDivTwo.style.display = "block";
  }
}


function myTogglerThree(){
  var myDivThree = document.getElementById("myDivThree");
  if (myDivThree.style.display === "none") {
    myDivThree.style.display = "block";
    newDivThree.style.display = "none";

  } 
  else {
    myDivThree.style.display = "none";
    newDivThree.style.display = "block";
  }
}



/*PORTFOLIO WHITE BOX */
var portfolioOne = document.getElementById("portfolioOne");
var portfolioTwo = document.getElementById("portfolioTwo");
var portfolioThree = document.getElementById("portfolioThree");
var portfolioFour = document.getElementById("portfolioFour");
var portfolioFive = document.getElementById("portfolioFive");
var portfolioSix = document.getElementById("portfolioSix");
var portfolioSeven= document.getElementById("portfolioSeven");
var portfolioEight = document.getElementById("portfolioEight");





portfolioOne.style.display = "none";
portfolioTwo.style.display = "none";
portfolioThree.style.display = "none";
portfolioFour.style.display = "none";
portfolioFive.style.display = "none";
portfolioSix.style.display = "none";
portfolioSeven.style.display = "none";
portfolioEight.style.display = "none";



/*one*/

function portfolioOneIn(){
  if(portfolioOne.style.display = "none"){
    portfolioOne.style.display = "block";
  }
  else{
    portfolioOne.style.display = "none"
  }
}

function portfolioOneOut(){
  if (portfolioOne.style.display = "block"){
    portfolioOne.style. display = "none";
  }
}


/*two*/
function portfolioTwoIn(){
  if(portfolioTwo.style.display = "none"){
    portfolioTwo.style.display = "block";
  }
  else{
    portfolioTwo.style.display = "none"
  }
}

function portfolioTwoOut(){
  if (portfolioTwo.style.display = "block"){
    portfolioTwo.style. display = "none";
  }
}

/*three*/
function portfolioThreeIn(){
  if(portfolioThree.style.display = "none"){
    portfolioThree.style.display = "block";
  }
  else{
    portfolioThree.style.display = "none"
  }
}

function portfolioThreeOut(){
  if (portfolioThree.style.display = "block"){
    portfolioThree.style. display = "none";
  }
}

/*four*/
function portfolioFourIn(){
  if(portfolioFour.style.display = "none"){
    portfolioFour.style.display = "block";
  }
  else{
    portfolioFour.style.display = "none"
  }
}

function portfolioFourOut(){
  if (portfolioFour.style.display = "block"){
    portfolioFour.style. display = "none";
  }
}

/*five*/
function portfolioFiveIn(){
  if(portfolioFive.style.display = "none"){
    portfolioFive.style.display = "block";
  }
  else{
    portfolioFive.style.display = "none"
  }
}

function portfolioFiveOut(){
  if (portfolioFive.style.display = "block"){
    portfolioFive.style. display = "none";
  }
}

/*six*/
function portfolioSixIn(){
  if(portfolioSix.style.display = "none"){
    portfolioSix.style.display = "block";
  }
  else{
    portfolioSix.style.display = "none"
  }
}

function portfolioSixOut(){
  if (portfolioSix.style.display = "block"){
    portfolioSix.style. display = "none";
  }
}

/*seven*/
function portfolioSevenIn(){
  if(portfolioSeven.style.display = "none"){
    portfolioSeven.style.display = "block";
  }
  else{
    portfolioSeven.style.display = "none"
  }
}

function portfolioSevenOut(){
  if (portfolioSeven.style.display = "block"){
    portfolioSeven.style. display = "none";
  }
}

/*eight*/
function portfolioEightIn(){
  if(portfolioEight.style.display = "none"){
    portfolioEight.style.display = "block";
  }
  else{
    portfolioEight.style.display = "none"
  }
}

function portfolioEightOut(){
  if (portfolioEight.style.display = "block"){
    portfolioEight.style. display = "none";
  }
}


    



/*POP UP ON SUBMIT*/
function submitFunction(){
  alert("Thanks...Your message has been submitted");

}


