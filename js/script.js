// js/script.js

// initialize master list ranges
var bingoNumbersMasterList = [
    [], // B
    [], // I
    [], // N
    [], // G
    []  // O
];

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

// generates random number lists
// function playerCardNumberGeneration() {
//     var playerNumB = (Math.floor(Math.random() * (15 - 1 + 1)) + 1);
//     var playerNumI = (Math.floor(Math.random() * (30 - 16 + 1)) + 16);
//     var playerNumN = (Math.floor(Math.random() * (45 - 31 + 1)) + 31);
//     var playerNumG = (Math.floor(Math.random() * (60 - 46 + 1)) + 46);
//     var playerNumO = (Math.floor(Math.random() * (75 - 61 + 1)) + 61);
//     for (i = 0; i < 5; i++) {
//         playerNumB += [(Math.floor(Math.random() * (15 - 1 + 1)) + 1)];
//         playerNumI += [(Math.floor(Math.random() * (30 - 16 + 1)) + 16)];
//         playerNumN += [(Math.floor(Math.random() * (45 - 31 + 1)) + 31)];
//         playerNumG += [(Math.floor(Math.random() * (60 - 46 + 1)) + 46)];
//         playerNumO += [(Math.floor(Math.random() * (75 - 61 + 1)) + 61)];

//         playerCardNumberList[i] = playerNumB;
//         playerCardNumberList[i] = playerNumI;
//         playerCardNumberList[i] = playerNumN;
//         playerCardNumberList[i] = playerNumG;
//         playerCardNumberList[i] = playerNumO;
//         console.log(playerNumB);
//     }
//     console.log(playerCardNumberList);
// }

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
        
    for (i = 1; i < 26; i++) {
        if (i < 6 ) {
            pCardGrid += "<button class='playerGridCell' onclick='markSpace(this.id)' id='slot" + i + "'>" + (Math.floor(Math.random() * (15 - 1 + 1)) + 1) + "</button>";
        }
        if (i < 11 && i > 5) {
            pCardGrid += "<button class='playerGridCell' onclick='markSpace(this.id)' id='slot" + i + "'>" + (Math.floor(Math.random() * (30 - 16 + 1)) + 16) + "</button>";
        }
        if (i < 16 && i > 10) {
            pCardGrid += "<button class='playerGridCell' onclick='markSpace(this.id)' id='slot" + i + "'>" + (Math.floor(Math.random() * (45 - 31 + 1)) + 31) + "</button>";
        }
        if (i < 21 && i > 15) {
            pCardGrid += "<button class='playerGridCell' onclick='markSpace(this.id)' id='slot" + i + "'>" + (Math.floor(Math.random() * (60 - 46 + 1)) + 46) + "</button>";
        }
        if (i < 26 && i > 20) {
            pCardGrid += "<button class='playerGridCell' onclick='markSpace(this.id)' id='slot" + i + "'>" + (Math.floor(Math.random() * (75 - 61 + 1)) + 61) + "</button>";
        }
    }
    // pCardGrid = "<button class='playerGridCell' onclick='markSpace(this.id)' id='slot" + i + "'>" + test + "</button>"

    // document.getElementsByClassName('cardContents')[0].innerHTML += "<button class='playerGridCell' onclick='markSpace(this.id)' id='slot1'>" + playerCardNumberList[0][0] + "</button>";
    document.getElementsByClassName('cardContents')[0].innerHTML += pCardGrid;
    document.querySelector("#slot13").innerHTML = "FREE";
}

createRanges();
makeGrid();