$(document).ready(function(){

    var random = Math.floor(Math.random()*101+19);
    var ruby = Math.floor(Math.random()*11+1);
    var diamond = Math.floor(Math.random()*11+1);
    var amber = Math.floor(Math.random()*11+1);
    var emerald = Math.floor(Math.random()*11+1);
    var actualscore = 0;
    var win = 0;
    var loss = 0;

    $("#actualnumber").text("Random Number: " + random);
    $("#win").append(win);
    $("#loss").append(loss);

    function reset(){
        random = Math.floor(Math.random()*101+9);
        $("#actualnumber").text("Random Number: " + random);   
        ruby = Math.floor(Math.random()*11+1);
        diamond = Math.floor(Math.random()*11+1);
        amber = Math.floor(Math.random()*11+1);
        emerald = Math.floor(Math.random()*11+1);
        actualscore = 0;
        $("#totalscore").text("Your final score is: " + actualscore);
    }

    function yes(){
        win++;
        $("#win").text(win);
        reset();
    }

    function no(){
        loss++;
        $("#loss").text(loss);
        reset();
    }

    $("#ruby").on ("click", function(){
        actualscore = actualscore + ruby;
        $("#totalscore").text("Your final score is: " + actualscore); 
            if (actualscore == random){
              yes();
            }
            else if (actualscore > random){
              no();
            }   
      })  
      
      $("#diamond").on ("click", function(){
        actualscore = actualscore + diamond;
        $("#totalscore").text("Your final score is: " + actualscore); 
            if (actualscore == random){
              yes();
            }
            else if (actualscore > random){
              no();
            }   
      }) 

      $("#amber").on ("click", function(){
        actualscore = actualscore + amber;
        $("#totalscore").text("Your final score is: " + actualscore); 
            if (actualscore == random){
              yes();
            }
            else if (actualscore > random){
              no();
            }   
      }) 

      $("#emerald").on ("click", function(){
        actualscore = actualscore + emerald;
        $("#totalscore").text("Your final score is: " + actualscore); 
            if (actualscore == random){
              yes();
            }
            else if (actualscore > random){
              no();
            }   
      }) 

});
