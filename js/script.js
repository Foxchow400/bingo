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

// number of cards to generate
var cardsToGenerate = 3;

/* Generate new random number, update current BINGO number button display, and mark called number in master list */

// generates a random number to call for the master button
function cardNum() {
    // Needs to get and send numbers based on letter ranges
    var num = Math.floor(Math.random() * 75) + 1;
    return num;
};

// creates range list from given start and stop values (int)
function makeRange(start, end) {
    return Array(end - start + 1).fill().map((_, idx) => start + idx);
};

// updates called number button value
function updateNum() {
    document.getElementById('currentNum').innerHTML = "<button id='displayNum' onclick='updateNum()'>" + cardNum() + "</button>";
    updateRange();
};

// change called number in master list to red background
function updateRange() {
    document.getElementById("master" + document.getElementById("displayNum").innerHTML).style.backgroundColor = "red";
};

/* Create master number list and generate the master grid & player cards */

// onclick function for player card spaces
function markSpace(id) {
    // document.getElementsByClassName("o")[id / 5 - 1].innerHTML = 1;
    console.log(id);
};

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
    // console.log(bingoNumbersMasterList);
}

// generates called number button, master number list and player cards
function makeGrid() {
    var masterList = "";

    document.getElementById('currentNum').innerHTML = "<button id='displayNum' onclick='updateNum()'>" + cardNum() + "</button>";

    // generates the list for the master list
    for (i = 1; i < 76; i++) { 
        masterList += "<button class='cardNumRange' id='master" + i + "'>" + i + "</button>";
    }
    document.getElementById('displayBoard').innerHTML = masterList;
}

function shuffleArray(arr) {
    console.log(arr)
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
        console.log(i);
        currentCard = "<section id='card" + i + "' class='playerCard'>";

        for (letter = 0; letter < bingo.length; letter++) {
            currentCard += "<button class='titleCell'>" + bingo[letter].toUpperCase() + "</button>";
        }

        // shuffle the master list
        for (shuffle = 0; shuffle < bingo.length; shuffle++) {
            shuffleArray(bingoNumbersMasterList[shuffle])
        }
        console.log(bingoNumbersMasterList)
        for (space = 0; space < 25; space++) {
            console.log(space);
            console.log(space % 5);

            var randomNumber = cardNum();
            if (space != 12) {
                // NORMAL SPACE
                currentCard += "<button class='playerGridCell' id='" + i + "_" + randomNumber + "'>" + bingoNumbersMasterList[space % 5][space] + "</button>";
            } else {
                // FREE SPACE
                // document.getElementById("nSlot3").innerHTML = "FREE";
                currentCard += "<button class='playerGridCell free' id='" + i + "_free'>FREE</button>";
            }
        }
        currentCard += "</section>";

        console.log(randomNumberList);

        // document.getElementsByClassName('cardContents')[0].innerHTML += pCardGrid;
        cardList += currentCard;
    }
    // console.log(cardList);
    document.getElementById("cards").innerHTML = cardList;
}

createRanges();
makeGrid();
    
// generate cards
generateCards(cardsToGenerate);