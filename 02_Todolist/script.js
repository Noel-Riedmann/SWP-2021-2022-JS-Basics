


document.getElementById("b1").addEventListener("click", function () {
    let chooseOfPlayer = 1 ;
    let chooseOfBot = getChooseOfBot();
    console.log("Player: " +chooseOfPlayer)
    output(chooseOfPlayer, chooseOfBot);
});

document.getElementById("b2").addEventListener("click", function () {
    let chooseOfPlayer = 2 ;
    let chooseOfBot = getChooseOfBot();
    console.log("Player: " +chooseOfPlayer)
    output(chooseOfPlayer, chooseOfBot);
});

document.getElementById("b3").addEventListener("click", function () {
    let chooseOfPlayer = 3 ;
    let chooseOfBot = getChooseOfBot();
    console.log("Player: " +chooseOfPlayer)
    output(chooseOfPlayer, chooseOfBot);
});


function getChooseOfBot() {
    let rndm = Math.floor((Math.random() * 3) + 1);
    console.log("Bot: " + rndm);
    document.getElementById("bot1").innerHTML = "Bot: " + rndm
    return rndm;
};

function output(cop, cob) {
    if (cob == cop) {
        console.log("Result: Win");
        document.getElementById("result").innerHTML = "Win"
    }else{
        console.log("Result: Lose")
        document.getElementById("result").innerHTML = "Lose"
    }
}
