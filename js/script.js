// js/script.js

const bingo = ['b','i','n','g','o'];

// initialize master list ranges
var bingoNumbersMasterList = [
    [], // B
    [], // I
    [], // N
    [], // G
    []  // O
];
        
var solutionList = [

    // rows
    [0,   1,  2,  3,  4],
    [5,   6,  7,  8,  9],
    [10, 11, 12, 13, 14],
    [15, 16, 17, 18, 19],
    [20, 21, 22, 23, 24],

    // columns
    [0, 5, 10, 15, 20],
    [1, 6, 11, 16, 21],
    [2, 7, 12, 17, 22],
    [3, 8, 13, 18, 23],
    [4, 9, 14, 19, 24],

    // obliques
    [0, 6, 12, 18, 24],
    [4, 8, 12, 16, 20]

];

var callList = [];
var masterCallList = [];
var masterButtonList;
var turnCounter = 0;
// number of cards to generate
var cardsToGenerate = 21;
var cardValue = [];
var gameOver = 0;
var winner = "";

/* Generate new random number, update current BINGO number button display, and mark called number in master list */

// generates the full range for the master list button
function rolledNumRange() {
    for (i = 1; i < 76; i++) {
        callList.push(i);
    }
    shuffleArray(callList);
}

// generates a random number to call for the master button
function cardNum() {
    var num = Math.floor(Math.random() * 75) + 1;
    return num;
}

// creates range list from given start and stop values (int)
function makeRange(start, end) {
    return Array(end - start + 1).fill().map((_, idx) => start + idx);
}

// updates called number button value
function updateNum() {

    if (callList.length != 1) {
        document.getElementById('currentNum').innerHTML = "<button id='displayNum' onclick='turnCounter++;updateNum()'>" + callList[0] + "</button>";
        document.getElementById("master" + callList[0]).style.backgroundColor = "red";
        masterCallList.push(callList[0])
        callList.splice(0, 1);
    } else {
        document.getElementById('currentNum').innerHTML = "<button class='gameOver' id='displayNum' onclick='reset()'>Game Over!</button>";
        document.getElementById("master" + callList[0]).className = "red";
    }
    // console.log(callList);
}

// reloads the page
function reset() {
    location.reload();
}

/* Create master number list and generate the master grid & player cards */

// onclick function for player card spaces
function markSpace(id) {
    // document.getElementsByClassName("o")[id / 5 - 1].innerHTML = 1;
    console.log(id);
}

// generates master number range lists
function createRanges() {
    for (i = 0; i < 5; i++) {
        var start;
        var stop;

        switch (i) {
            case 0:
                start = 1;
                stop = 15;
                break;
            case 1:
                start = 16;
                stop = 30;
                break;
            case 2:
                start = 31;
                stop = 45;
                break;
            case 3:
                start = 46;
                stop = 60;
                break;
            case 4:
                start = 61;
                stop = 75;
                break;
            default:
        }

        var range = makeRange(start, stop);
        bingoNumbersMasterList[i] = range;
    }
}

// generates called number button, master number list and player cards
function makeGrid() {
    var masterList = "";
    document.getElementById('currentNum').innerHTML = "<button id='displayNum' onclick='updateNum()' style='font-size: 5em;'>" + "GO" + "</button>";
    // generates the list for the master list
    for (i = 1; i < 76; i++) { 
        masterList += "<button class='cardNumRange' id='master" + i + "'>" + i + "</button>";
    }
    document.getElementById('displayBoard').innerHTML = masterList;
}

function shuffleArray(arr) {
    // console.log(arr)
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
}

// generate randomized player cards
function generateCards(numCards) {
    var cardList = ""; // initialize blank string to append to
    var currentCard = ""; // initialize blank string to append to

    for (i = 1; i <= numCards; i++) {
        var randomNumberList = [
            [], // B
            [], // I
            [], // N
            [], // G
            []  // O
        ];
        currentCard = "<section id='card" + i + "' class='playerCard'>";
        cardValue.push([]);

        for (letter = 0; letter < bingo.length; letter++) {
            currentCard += "<button onclick='checkWin(this.id)' id='" + i + "' class='titleCell'>" + bingo[letter].toUpperCase() + "</button>";
        }

        // shuffle the master list
        for (shuffle = 0; shuffle < bingo.length; shuffle++) {
            shuffleArray(bingoNumbersMasterList[shuffle]);
        }

        // separate columns into arrays
        for (newLetter = 0; newLetter < bingo.length; newLetter++) {
            randomNumberList[newLetter] = bingoNumbersMasterList[newLetter].slice(0,5);
        }

        for (space = 0; space < 25; space++) {
            if (space != 12) {
                // NORMAL SPACE
                currentCard += "<button class='playerGridCell' id='" + i + "_" + randomNumberList[space % 5][Math.floor(space / 5)] + "' onclick='handleClick(this.id)'>" + randomNumberList[space % 5][Math.floor(space / 5)] + "</button>";

                // pushes the values of this card to an array so it can be reverted when there is a faulty win
                cardValue[i - 1].push(randomNumberList[space % 5][Math.floor(space / 5)])

                // TODO: Add an onclick event to the card buttons, make it check that there is or is not a winner
            } else {
                // FREE SPACE
                currentCard += "<button class='playerGridCell free' id='" + i + "_0' onclick='handleClick(this.id)'>FREE</button>";
                cardValue[i - 1].push(0)
                // TODO: Make a function that does something to the free button when clicked
            }
        }
                    
        currentCard += "</section>";
        cardList += currentCard;

    }
    document.getElementById("cards").innerHTML = cardList;
    // console.log(cardList)
    // console.log(randomNumberList)
}

function isRed(id) {
    // console.log(id)
    if (document.getElementById(id).className.match(/(?:^|\s)red(?!\S)/) == null) {
        return false
    } else {
        return true
    }
}

// handle click
function handleClick(id) {
    var [checkCard, checkValue] = [id.split("_")[0], id.split("_")[1]];

    if (isRed(id)) {
        // remove red
        document.getElementById(id).className = "playerGridCell";
    } else {
        // add red
        document.getElementById(id).className = "playerGridCell red";
    }
}

/* Checks that there is or is not a winner */
function checkWin(calledCard) {
    var activeCard = "";
    var activeSolution = [];
    // for each card
    for (i = 0; i < cardsToGenerate; i++) {
        var elementSelector = 0;
        activeCard = document.getElementById("card" + (i + 1)).getElementsByClassName("playerGridCell");
        console.log(activeCard);
        // console.log(document.getElementById("card" + (i + 1)).getElementsByClassName("red"));
        var selectedButtons = document.getElementById("card" + (i + 1)).getElementsByClassName("red")
        console.log(selectedButtons);
        console.log(solutionList)
        var currentCallList = masterCallList
        currentCallList = currentCallList.slice(0, turnCounter)
        
        for (solution = 0; solution < solutionList.length; solution++) {
            var legalSolution = solutionList[solution];
            activeSolution = [];
            console.log(legalSolution)
            // individually print each num in the solution
            for (currentNum = 0; currentNum < legalSolution.length; currentNum++) {
                // console.log(currentNum);
                // console.log(legalSolution[currentNum]);
                // console.log("---");
                // console.log(activeCard);
                // console.log(activeCard[legalSolution[currentNum]].id);
                // console.log(isRed(activeCard[legalSolution[currentNum]].id));
                // get a list of numbers that the playerCard has, order included

                activeSolution.push(activeCard[legalSolution[currentNum]].id)

            }
            console.log(activeSolution)

            for (elementSelector = 0; elementSelector < legalSolution.length; elementSelector++) {
                console.log(activeSolution[elementSelector])
                // is it red?
                console.log("Is it selected?")
                console.log(isRed(activeSolution[elementSelector]))
                console.log(selectedButtons)
                console.log(elementSelector)
                // is it valid?
                console.log(document.getElementById(activeSolution[elementSelector]).innerHTML)
                if (
                    // add the win combos 
                    document.getElementById(activeSolution[elementSelector]).innerHTML in currentCallList
                ) {
                    console.log("BINGO! Card  wins!")
                    winner = calledCard;
                    gameOver = 1;
                } else {
                //  clears wrong solutions/buttons
                    clearWrongMarks();
                    console.log("Better luck next time! Clearing erroneous marks...")
                }
            }
        }



        function clearWrongMarks() {
            console.log("erase");
        }
        
        //TODO: Make arrays of solutions vs possible solutions 
        /*
        
            var solutionList = [

                // rows
                [0,   1,  2,  3,  4],
                [5,   6,  7,  8,  9],
                [10, 11, 12, 13, 14],
                [15, 16, 17, 18, 19],
                [20, 21, 22, 23, 24],

                // columns
                [0, 5, 10, 15, 20],
                [1, 6, 11, 16, 21],
                [2, 7, 12, 17, 22],
                [3, 8, 13, 18, 23],
                [4, 9, 14, 19, 24],

                // obliques
                [0, 6, 12, 18, 24],
                [4, 8, 12, 16, 20]

            ]

        */ 
        
        if (gameOver) {
            alert("CARD " + winner + " WINS!")
        }
    }
    
}



rolledNumRange();
createRanges();
// generate cards
makeGrid();
generateCards(cardsToGenerate);