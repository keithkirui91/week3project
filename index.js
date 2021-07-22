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

    




function submitFunction(){
    alert("Thanks...Your message has been submitted");

}
