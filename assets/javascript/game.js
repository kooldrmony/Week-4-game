$(document).ready(function(){

var random = Math.floor(Math.random() * 101) + 19;

$("#randomnumber").text(random);

var one = Math.floor(Math.random() * 12) + 1;
var two = Math.floor(Math.random() * 12) + 1;
var three = Math.floor(Math.random() * 12) + 1;
var four = Math.floor(Math.random() * 12) + 1;

var usertotal = 0;
var wins = 0;
var losses = 0;
var reset = 0;

$("#numberwins").text("Wins:" + wins);
$("#numberlosses").text("Losses:" + losses);


function restart(){
      random=Math.floor(Math.random() * 101) + 19;
      console.log(random)
      $("#randomnumber").text(random);
      one= Math.floor(Math.random() * 12) + 1;
      two= Math.floor(Math.random() * 12) + 1;
      three= Math.floor(Math.random() * 12) + 1;
      four= Math.floor(Math.random() * 12) +1;
      usertotal= 0;
      $("#totalscore").text(reset);
      } 

 function winner(){
alert("You won!");
  wins++; 
  $("#numberwins").text("Wins:" + wins);
  reset();

}

function loser(){
alert ("You lose!");
  losses++;
  $("#numberlosses").text("Losses:" + losses);
   reset();
 

}

  $("#blue").on ('click', function(){
    usertotal = usertotal + one;
    console.log("New usertotal= " + usertotal);
    $("#totalscore").text(usertotal); 
       
        if (usertotal == random){
          winner();
        }
        else if ( usertotal > random){
          loser();
        }   
  })  

$("#red").on ('click', function(){
    usertotal = usertotal + two;
    console.log("New usertotal= " + usertotal);
    $("#totalscore").text(usertotal); 

        if (usertotal == random){
          winner();
        }
        else if ( usertotal > random){
          loser();
        } 
  })  

$("#green").on ('click', function(){
    usertotal = usertotal + three;
    console.log("New usertotal= " + usertotal);
    $("#totalscore").text(usertotal);

          if (usertotal == random){
          winner();
        }
        else if ( usertotal > random){
          loser();
        } 
  })  

$("#yellow").on ('click', function(){
    usertotal = usertotal + four;
    console.log("New usertotal= " + usertotal);
    $("#totalscore").text(usertotal); 
      
          if (usertotal == random){
          winner();
        }
        else if ( usertotal > random){
          loser();
        }
  });   

});
