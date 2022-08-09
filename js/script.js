// js/script.js

// initialize master list ranges
var bingoNumbersMasterList = [
    [], // B
    [], // I
    [], // N
    [], // G
    []  // O
];
var playerCardNumberList = [
    [], // B
    [], // I
    [], // N
    [], // G
    []  // O
];

/* Generate new random number, update current BINGO number button display, and mark called number in master list */

// creates range list from given start and stop values (int)
function makeRange(start, end) {
    return Array(end - start + 1).fill().map((_, idx) => start + idx);
};

// generates a random number to call
function cardNum() {
    // Needs to get and send numbers based on letter ranges
    var num = Math.floor(Math.random() * 75) + 1;
    return num;
};

// generates random number lists
function playerCardNumberGeneration() {
    var playerNumB
    var playerNumI
    var playerNumN
    var playerNumG
    var playerNumO
    for (i = 0; i < 5; i++) {
        playerNumB = (Math.floor(Math.random() * (15 - 1 + 1)) + 1);
        playerNumI = (Math.floor(Math.random() * (30 - 16 + 1)) + 16);
        playerNumN = (Math.floor(Math.random() * (45 - 31 + 1)) + 31);
        playerNumG = (Math.floor(Math.random() * (60 - 46 + 1)) + 46);
        playerNumO = (Math.floor(Math.random() * (75 - 61 + 1)) + 61);

        playerCardNumberList[0][i] = playerNumB;
        playerCardNumberList[1][i] = playerNumI;
        playerCardNumberList[2][i] = playerNumN;
        playerCardNumberList[3][i] = playerNumG;
        playerCardNumberList[4][i] = playerNumO;
        console.log(playerNumB);
    }
    console.log(playerCardNumberList);
}

// updates called number button value
function updateNum() {
    var num = cardNum();
    document.getElementById('currentNum').innerHTML = "<button id='displayNum' onclick='updateNum()'>" + num + "</button>";
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

    console.log(bingoNumbersMasterList);
}

// generates called number button, master number list and player cards
function makeGrid() {
    var pCardGrid = "";
    var masterList = "";

    document.getElementById('currentNum').innerHTML = "<button id='displayNum' onclick='updateNum()'>" + cardNum() + "</button>";

    // generates the list for the master list
    for (i = 1; i < 76; i++) { 
        masterList += "<button class='cardNumRange' id='master" + i + "'>" + i + "</button>";
    }
    document.getElementById('displayBoard').innerHTML = masterList;

    // generates the list for the master list
    for (i = 1; i < 76; i++) { 
        masterList += "<button class='cardNumRange' id='master" + i + "'>" + i + "</button>";
    }
    document.getElementsByClassName('cardContents')[0].innerHTML = (
        "<button class='titleCell'>B</button>" +
        "<button class='titleCell'>I</button>" +
        "<button class='titleCell'>N</button>" +
        "<button class='titleCell'>G</button>" +
        "<button class='titleCell'>O</button>" 
    ); // card title
    
    // generates the list of player card slots
    for (i = 1; i < 26; i++) {
        pCardGrid += "<button class='playerGridCell' onclick='markSpace(this.id)' id='slot" + i + "'>" + cardNum() + "</button>";
    }

    // for (i = 1; i < 25; i++) {
    //     var i = i

    //     if (i < 5 ) {
    //         pCardGrid += "<button class='playerGridCell' onclick='markSpace(this.id)' id='slot" + i + "'>" + playerCardNumberList[0][i] + "</button>";
    //     }
    //     if (i < 10 ) {
    //         pCardGrid += "<button class='playerGridCell' onclick='markSpace(this.id)' id='slot" + i + "'>" + playerCardNumberList[1][i] + "</button>";
    //     }
    //     if (i < 15 ) {
    //         pCardGrid += "<button class='playerGridCell' onclick='markSpace(this.id)' id='slot" + i + "'>" + playerCardNumberList[2][i] + "</button>";
    //     }
    //     if (i < 20 ) {
    //         pCardGrid += "<button class='playerGridCell' onclick='markSpace(this.id)' id='slot" + i + "'>" + playerCardNumberList[3][i] + "</button>";
    //     }
    //     if (i < 25 ) {
    //         pCardGrid += "<button class='playerGridCell' onclick='markSpace(this.id)' id='slot" + i + "'>" + playerCardNumberList[4][i] + "</button>";
    //     }
    // }
    document.getElementsByClassName('cardContents')[0].innerHTML += pCardGrid;
    document.querySelector("#slot13").innerHTML = "FREE";
}

createRanges();
makeGrid();
playerCardNumberGeneration();