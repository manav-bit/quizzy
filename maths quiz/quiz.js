var playing = false;
var score;
var action;
document.getElementById('start').onclick = function () {

    if (playing == true) {

        location.reload();//to reloadthe current page
    }
    else {
        playing = true;//change mode to playing
        score = 0;
        document.getElementById('scorevalue').innerHTML = score;
        show("timeremaining");
        timeremaining = 60;
        hide("gameover");
        document.getElementById('time').innerHTML = timeremaining;
        document.getElementById('start').innerHTML = "Reset game";
        startcountdown();
        generateQA();//for generating q and a 
    }

}
//clicking on ans box
for (var i=1;i<5;i++) {
    document.getElementById('option'+i).onclick = function () {
        if (playing == true) {
            if (this.innerHTML == correctans) {
                //correct answer
                score++;
                document.getElementById('scorevalue').innerHTML= score;
                //hidewrong box
                hide("wrong");
                show("correct");
                setTimeout(function () {
                    hide("correct");
                }, 1000);
                //gen next ques
                generateQA();
            }
            else {
                show("wrong");
                hide("correct");

                setTimeout(function () {
                    hide("wrong");
                }, 1000);
            }

        }
    }
}
function startcountdown() {
    action = setInterval(() => {
        timeremaining -= 1;
        document.getElementById('time').innerHTML = timeremaining;

        if (timeremaining == 0)// game over
        {
            stopcountdown();




            show("gameover");
            document.getElementById('value').innerHTML = score;
            hide("timeremaining");
            hide("correct");
            hide("wrong");
            playing = false;
            document.getElementById('start').innerHTML = "Start Game";

        }
    }, 1000);
}

function stopcountdown() {
    clearInterval(action);
}
function hide(ID) {
    document.getElementById(ID).style.display = "none";
}
function show(ID) {
    document.getElementById(ID).style.display = "block";
}
var correctans;
var correctpos;
function generateQA() {
    var x = Math.ceil(20 * Math.random());
    var y = Math.ceil(10 * Math.random());
    correctans = x * y;
    document.getElementById('question').innerHTML = `${x}x${y}`;
    correctpos = Math.ceil(Math.random() * 4);
    document.getElementById('option' + correctpos).innerHTML = correctans;//fill one box with right ans
    // fill other box with wrong ans
    for (var i = 1; i < 5; i++) {
        if (i != correctpos) {
            var wrongans;
            var ans = [correctans];
            do {
                wrongans = (Math.ceil(20 * Math.random()) * Math.ceil(10 * Math.random()));

            } while (ans.indexOf(wrongans) > -1)
            document.getElementById('option' + i).innerHTML = wrongans;
            ans.push(wrongans);

        }

    }
}

//if we click on start/reset button then
//if we are playing 
//reload page
//if we are not playing then
//set score to 0
//show countdown button
//reduce time by 1 sec
//loops
//time left?
//yes ->continue loop
//no game over 
//change button to reset
//generete new question ans
//if we click on answer box then 
//if we are playing
//correct 
//yes?
//increase score
//show correct box for 1 sec
//generate new q and a
//no 
//try again message for 1 sec



