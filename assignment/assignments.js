function test2()
{
    alert("test2");
}

function goHome()
{
    location.href = "./home.html";
}

function showAssignments() {
    var assignments = [];
    assignments = JSON.parse(localStorage.getItem("AssignmentList"));
    for (var i = 0; i < assignments.length; i++) {
        var dat = "";
        dat = assignments[i].date;
        var cls = "";
        cls = assignments[i].course;
        var tim = "";
        tim = assignments[i].time;
        var tit = "";
        tit = assignments[i].title;
        var spot;
        if (dat == duedates[0]) {
            document.getElementById("assignment1").innerHTML = cls.toUpperCase() + " " + tit;
        } else if (dat == duedates[1]) {
            document.getElementById("assignment2").innerHTML = cls.toUpperCase() + " " + tit;
        } else if (dat == duedates[2]) {
            document.getElementById("assignment3").innerHTML = cls.toUpperCase() + " " + tit;
        } else if (dat == duedates[3]) {
            document.getElementById("assignment4").innerHTML = cls.toUpperCase() + " " + tit;
        } else if (dat == duedates[4]) {
            document.getElementById("assignment5").innerHTML = cls.toUpperCase() + " " + tit;
        } else if (dat == duedates[5]) {
            document.getElementById("assignment6").innerHTML = cls.toUpperCase() + " " + tit;
        } else if (dat == duedates[6]) {
            document.getElementById("assignment7").innerHTML = cls.toUpperCase() + " " + tit;
        }
    }
}

function highlight(ctrl)
{
    if (ctrl.style.background == 'rgb(255, 250, 157)')
    {
        ctrl.style.background = 'aliceblue';
    }
    else
    {
        ctrl.style.background = 'rgb(255, 250, 157)';
    }
}




var speak = document.getElementById("sm");

speak.addEventListener('click', speakMode);

var mode = 0;

function speakMode() {
    if (mode == 0) {

        speak.innerHTML = "cancel";

        mode = 1;
    } else {

        mode = 0;
        speak.innerHTML = "speech mode";

    }
    console.log(mode);

}


const elements = document.querySelectorAll('.aField');

// adding the event listener by looping
elements.forEach(element => {
    element.addEventListener("click", function(evt) {
        //this function does stuff
        if (mode == 1) {



            var msg = new SpeechSynthesisUtterance();
            msg.text = evt.currentTarget.innerHTML;
            window.speechSynthesis.speak(msg);


        }
    });
});
