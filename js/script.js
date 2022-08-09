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

// updates called number button value
function updateNum() {
    var num = cardNum();
    document.getElementById('currentNum').innerHTML = "<button id='displayNum' onclick='updateNum()'>" + num + "</button>";
    updateRange();
};

// change called number in master list to red background
function updateRange() {
    document.getElementById(document.getElementById("displayNum").innerHTML).style.backgroundColor = "red";
};

/* Create master number list and generate the master grid & player cards */

// onclick function for player card spaces
function markSpace(id) {
    document.getElementsByClassName("o")[id / 5 - 1].innerHTML = 1;
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
    document.getElementById('currentNum').innerHTML = "<button id='displayNum' onclick='updateNum()'>" + cardNum() + "</button>";
    
    document.getElementById('displayBoard').innerHTML = (
        "<button id='" + 1 + "' class='cardNumRange'>1</button>" +
        "<button id='" + 2 + "' class='cardNumRange'>2</button>" +
        "<button id='" + 3 + "' class='cardNumRange'>3</button>" +
        "<button id='" + 4 + "' class='cardNumRange'>4</button>" +
        "<button id='" + 5 + "' class='cardNumRange'>5</button>" +
        "<button id='" + 6 + "' class='cardNumRange'>6</button>" +
        "<button id='" + 7 + "' class='cardNumRange'>7</button>" +
        "<button id='" + 8 + "' class='cardNumRange'>8</button>" +
        "<button id='" + 9 + "' class='cardNumRange'>9</button>" +
        "<button id='" + 10 + "' class='cardNumRange'>10</button>" +
        "<button id='" + 11 + "' class='cardNumRange'>11</button>" +
        "<button id='" + 12 + "' class='cardNumRange'>12</button>" +
        "<button id='" + 13 + "' class='cardNumRange'>13</button>" +
        "<button id='" + 14 + "' class='cardNumRange'>14</button>" +
        "<button id='" + 15 + "' class='cardNumRange'>15</button>" +
        "<button id='" + 16 + "' class='cardNumRange'>16</button>" +
        "<button id='" + 17 + "' class='cardNumRange'>17</button>" +
        "<button id='" + 18 + "' class='cardNumRange'>18</button>" +
        "<button id='" + 19 + "' class='cardNumRange'>19</button>" +
        "<button id='" + 20 + "' class='cardNumRange'>20</button>" +
        "<button id='" + 21 + "' class='cardNumRange'>21</button>" +
        "<button id='" + 22 + "' class='cardNumRange'>22</button>" +
        "<button id='" + 23 + "' class='cardNumRange'>23</button>" +
        "<button id='" + 24 + "' class='cardNumRange'>24</button>" +
        "<button id='" + 25 + "' class='cardNumRange'>25</button>" +
        "<button id='" + 26 + "' class='cardNumRange'>26</button>" +
        "<button id='" + 27 + "' class='cardNumRange'>27</button>" +
        "<button id='" + 28 + "' class='cardNumRange'>28</button>" +
        "<button id='" + 29 + "' class='cardNumRange'>29</button>" +
        "<button id='" + 30 + "' class='cardNumRange'>30</button>" +
        "<button id='" + 31 + "' class='cardNumRange'>31</button>" +
        "<button id='" + 32 + "' class='cardNumRange'>32</button>" +
        "<button id='" + 33 + "' class='cardNumRange'>33</button>" +
        "<button id='" + 34 + "' class='cardNumRange'>34</button>" +
        "<button id='" + 35 + "' class='cardNumRange'>35</button>" +
        "<button id='" + 36 + "' class='cardNumRange'>36</button>" +
        "<button id='" + 37 + "' class='cardNumRange'>37</button>" +
        "<button id='" + 38 + "' class='cardNumRange'>38</button>" +
        "<button id='" + 39 + "' class='cardNumRange'>39</button>" +
        "<button id='" + 40 + "' class='cardNumRange'>40</button>" +
        "<button id='" + 41 + "' class='cardNumRange'>41</button>" +
        "<button id='" + 42 + "' class='cardNumRange'>42</button>" +
        "<button id='" + 43 + "' class='cardNumRange'>43</button>" +
        "<button id='" + 44 + "' class='cardNumRange'>44</button>" +
        "<button id='" + 45 + "' class='cardNumRange'>45</button>" +
        "<button id='" + 46 + "' class='cardNumRange'>46</button>" +
        "<button id='" + 47 + "' class='cardNumRange'>47</button>" +
        "<button id='" + 48 + "' class='cardNumRange'>48</button>" +
        "<button id='" + 49 + "' class='cardNumRange'>49</button>" +
        "<button id='" + 50 + "' class='cardNumRange'>50</button>" +
        "<button id='" + 51 + "' class='cardNumRange'>51</button>" +
        "<button id='" + 52 + "' class='cardNumRange'>52</button>" +
        "<button id='" + 53 + "' class='cardNumRange'>53</button>" +
        "<button id='" + 54 + "' class='cardNumRange'>54</button>" +
        "<button id='" + 55 + "' class='cardNumRange'>55</button>" +
        "<button id='" + 56 + "' class='cardNumRange'>56</button>" +
        "<button id='" + 57 + "' class='cardNumRange'>57</button>" +
        "<button id='" + 58 + "' class='cardNumRange'>58</button>" +
        "<button id='" + 59 + "' class='cardNumRange'>59</button>" +
        "<button id='" + 60 + "' class='cardNumRange'>60</button>" +
        "<button id='" + 61 + "' class='cardNumRange'>61</button>" +
        "<button id='" + 62 + "' class='cardNumRange'>62</button>" +
        "<button id='" + 63 + "' class='cardNumRange'>63</button>" +
        "<button id='" + 64 + "' class='cardNumRange'>64</button>" +
        "<button id='" + 65 + "' class='cardNumRange'>65</button>" +
        "<button id='" + 66 + "' class='cardNumRange'>66</button>" +
        "<button id='" + 67 + "' class='cardNumRange'>67</button>" +
        "<button id='" + 68 + "' class='cardNumRange'>68</button>" +
        "<button id='" + 69 + "' class='cardNumRange'>69</button>" +
        "<button id='" + 70 + "' class='cardNumRange'>70</button>" +
        "<button id='" + 71 + "' class='cardNumRange'>71</button>" +
        "<button id='" + 72 + "' class='cardNumRange'>72</button>" +
        "<button id='" + 73 + "' class='cardNumRange'>73</button>" +
        "<button id='" + 74 + "' class='cardNumRange'>74</button>" +
        "<button id='" + 75 + "' class='cardNumRange'>75</button>"
    )
    document.getElementsByClassName('cardTitle')[0].innerHTML = (
        "<button class='titleCell'>B</button>" +
        "<button class='titleCell'>I</button>" +
        "<button class='titleCell'>N</button>" +
        "<button class='titleCell'>G</button>" +
        "<button class='titleCell'>O</button>" 
    ); // card title
    document.getElementsByClassName('cardTitle')[0].innerHTML += (
        // "<button class='playerGridCell b' onclick='markSpace(this.id)' id='1'>" + bingoNumbersMasterList[0] + "</button>" +
    "<button class='playerGridCell b' onclick='markSpace(this.id)' id='1'>" + cardNum() + "</button>" +
    "<button class='playerGridCell i' onclick='markSpace(this.id)' id='2'>" + cardNum() + "</button>" +
    "<button class='playerGridCell n' onclick='markSpace(this.id)' id='3'>" + cardNum() + "</button>" +
    "<button class='playerGridCell g' onclick='markSpace(this.id)' id='4'>" + cardNum() + "</button>" +
    "<button class='playerGridCell o' onclick='markSpace(this.id)' id='5'>" + cardNum() + "</button>" +
    "<button class='playerGridCell b' onclick='markSpace(this.id)' id='6'>" + cardNum() + "</button>" +
    "<button class='playerGridCell i' onclick='markSpace(this.id)' id='7'>" + cardNum() + "</button>" +
    "<button class='playerGridCell n' onclick='markSpace(this.id)' id='8'>" + cardNum() + "</button>" +
    "<button class='playerGridCell g' onclick='markSpace(this.id)' id='9'>" + cardNum() + "</button>" +
    "<button class='playerGridCell o' onclick='markSpace(this.id)' id='10'>" + cardNum() + "</button>" +
    "<button class='playerGridCell b' onclick='markSpace(this.id)' id='11'>" + cardNum() + "</button>" +
    "<button class='playerGridCell i' onclick='markSpace(this.id)' id='12'>" + cardNum() + "</button>" +
    "<button class='playerGridCell n' id='free'>FREE</button>" +
    "<button class='playerGridCell g' onclick='markSpace(this.id)' id='14'>" + cardNum() + "</button>" +
    "<button class='playerGridCell o' onclick='markSpace(this.id)' id='15'>" + cardNum() + "</button>" +
    "<button class='playerGridCell b' onclick='markSpace(this.id)' id='16'>" + cardNum() + "</button>" +
    "<button class='playerGridCell i' onclick='markSpace(this.id)' id='17'>" + cardNum() + "</button>" +
    "<button class='playerGridCell n' onclick='markSpace(this.id)' id='18'>" + cardNum() + "</button>" +
    "<button class='playerGridCell g' onclick='markSpace(this.id)' id='19'>" + cardNum() + "</button>" +
    "<button class='playerGridCell o' onclick='markSpace(this.id)' id='20'>" + cardNum() + "</button>" +
    "<button class='playerGridCell b' onclick='markSpace(this.id)' id='21'>" + cardNum() + "</button>" +
    "<button class='playerGridCell i' onclick='markSpace(this.id)' id='22'>" + cardNum() + "</button>" +
    "<button class='playerGridCell n' onclick='markSpace(this.id)' id='23'>" + cardNum() + "</button>" +
    "<button class='playerGridCell g' onclick='markSpace(this.id)' id='24'>" + cardNum() + "</button>" +
    "<button class='playerGridCell o' onclick='markSpace(this.id)' id='25'>" + cardNum() + "</button>"
    );
}

createRanges();
makeGrid();