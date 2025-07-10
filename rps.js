 function getComputerChoice(){
   let comp=Math.floor(Math.random()*3+1);
    if(comp===1){
        return "Rock"
    }
    else if(comp===2){
        return "Paper"
    }
    else if(comp===3){
        return "Scissors"
    }
 }
console.log(getComputerChoice());


function getHumanChoice(){
    let humanChoice=prompt("Enter a number between 1 & 3 to make a choice")
   if (isNaN(humanChoice) || humanChoice <= 0 || humanChoice > 3) {
  return "Enter a valid number";
   }
    else if(humanChoice==1){
        return "Rock";
    }
    else if(humanChoice==2){
        return "Paper";
    }
    else if(humanChoice==3){
        return "Scissors";
    }
}
 console.log(getHumanChoice())

 function playRound(humanChoice, computerChoice) {
   function getComputerChoice(){
   let comp=Math.floor(Math.random()*3+1);
    if(comp===1){
        return "Rock"
    }
    else if(comp===2){
        return "Paper"
    }
    else if(comp===3){
        return "Scissors"
    }
 }
console.log(getComputerChoice());


function getHumanChoice(){
    let humanChoice=prompt("Enter a number between 1 & 3 to make a choice")
   if (isNaN(humanChoice) || humanChoice <= 0 || humanChoice > 3) {
  return "Enter a valid number";
   }
    else if(humanChoice==1){
        return "Rock";
    }
    else if(humanChoice==2){
        return "Paper";
    }
    else if(humanChoice==3){
        return "Scissors";
    }
}
 console.log(getHumanChoice())
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
