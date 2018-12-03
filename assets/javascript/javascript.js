$(document).ready(function(){
    $("p").hide();
    $("li").hide();
    $("#submit").hide();
    $("#time-out").hide();
    
$("#button").click(function(){
    $("p").show();
    $("li").show();
    $("#submit").show();
    $("#button").hide();
    $("#correctanswers").hide();
    $("#incorrectanswers").hide();
    $("#time-out").show();
    countDown();

})
$("#submit").click(function(){
    $(".game").hide();
    $("#submit").hide();
    $("#time-out").hide();
    showresults()
})


/*
var questions = ["Who is Mr.Krab's arch nemesis?", "Who is the Driver's Ed teacher?", "What is Patrick's last name?", "What is the squirrel's name?",
"Pearl is a...", "When Spongebob gets sick, what is the virus called?", "What is the secret formula in the Krabby Patty?", "What was the Krusty Krab called when Pearl redecorated it?",
"Who are the heroes of Bikini Bottom?", "Sandy used to live in..."];

var answers = ["Plankton", "Mrs.Puff?", "Star", "Sandy", "Whale", "The Suds", "Hah! Trick question, the secret formula hasn't been revealed", "Kuddly Krab", "Mermaid Man and Barnacle Boy", "Texas",];
*/

var correct= 0;

var incorrect= 0;

var timer = 75;


function countDown(){
   timer--;
      setTimeout(countDown,1000);
   document.getElementById('time-left').innerText = "Time Left: " + timer + " seconds";
        if(timer === 0){
        $(".game").hide();
        $("#submit").hide();
        showresults()
        document.getElementById('timeout').innerText = "YA SNOOZE, YA LOSE! TOOK TOO LONG TO ANSWER DA QUESTIONS!";
        $("#time-out").hide();
        }
}



        $('input[id="answer"]').click(function(){
            console.log("chosen")
            correct = correct + 1;
            console.log("this many correct: " + correct)
  

        });
        $('input[id="incorrect"]').click(function(){
            console.log("chosen")
            incorrect = incorrect + 1;
            

        });

        function showresults(){
            $("#correctanswers").show();
            document.getElementById('correctanswers').innerText = "Correct: " + correct;

            $("#incorrectanswers").show();
            document.getElementById('incorrectanswers').innerText = "Incorrect: " + incorrect;

            if(correct < incorrect){
                document.getElementById('poser').innerText = 'YOU ARE A POSER!!';
            }
            else if(correct === incorrect){
                document.getElementById('soso').innerText = 'YOU AIGHT!';
            }
            else{
                document.getElementById('true').innerText = 'YOU DA REALIST OF THE REAL!!';
            }
        }

        

})  