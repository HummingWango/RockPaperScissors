function getComputerChoice (){
    let n = Math.random()*3;
    if (n < 1) {
        return "rock";
    } else if (n < 2) {
        return "paper";
    } else {
        return "scissor";
    }
}
