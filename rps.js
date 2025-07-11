
 let score={human:0,computer:0,tie:0};
 function getComputerChoice(){
   let comp=Math.floor(Math.random()*3+1);
    if(comp===1){
        return "Rock"
    }
    if(comp===2){
        return "Paper"
    }
    if(comp===3){
        return "Scissors"
    }
 }

function getHumanChoice(){
    let humanChoice=prompt("Make your choice? 1=Rock,2=Paper,3=Scissors")
   if (isNaN(humanChoice) || humanChoice <= 0 || humanChoice > 3) {
  return "Invalid";
   }
    if(humanChoice==1){
        return "Rock";
    }
    if(humanChoice==2){
        return "Paper";
    }
    if(humanChoice==3){
        return "Scissors";
    }
} 

 let count=1;
 function playRound() {
const humanSelection=getHumanChoice();
if (humanSelection === "Invalid") {
        return "Please enter a valid number between 1 and 3.";
    }
const computerSelection=getComputerChoice();

//console.log("Human chose:"+humanSelection);
//console.log("computer chose:"+computerSelection);

    if (humanSelection===computerSelection) {
        score.tie ++;

    }

   else if ((humanSelection=="Rock" && computerSelection=="Scissors")||
    (humanSelection=="Scissor" && computerSelection=="Paper")||
    (humanSelection=="Paper" && computerSelection=="Rock")
    ){
        score.human ++;
    ;
   } 
   else{
    score.computer ++;
   }
 }
 
 while (count<5){
    playRound();
    count++
   
 }
 
 console.log(playRound());
 console.log("Number of Rounds:"+(score.human+score.computer+score.tie));
 console.log("Your score:"+score.human);
console.log("Computer's score:"+score.computer);
console.log("Number of ties:" +score.tie);

 if(score.human>score.computer){
console.log("congratulations! You win");
 }
 if(score.human<score.computer){
console.log("Oops!You lost it");
 }
 if(score.human===score.computer){
console.log("You both tie");
  }