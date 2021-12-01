function goHome() {
    location.href = "./home.html";
}

function addTask() {
    location.href = "./addtask.html";
}

function detail(list) {


    if (mode == 1) {

        var msg = new SpeechSynthesisUtterance();
        msg.text = list.innerHTML;
        window.speechSynthesis.speak(msg);


    } else {
        if (list.id == "l1") {
            document.getElementById("d1").innerHTML = "laundry";
            document.getElementById("d2").innerHTML = "vacuum";
            document.getElementById("d3").innerHTML = "wash dishes";
            document.getElementById("d4").innerHTML = "";
            document.getElementById("d5").innerHTML = "**optional notes<br>";
        } else if (list.id == "l2") {
            document.getElementById("d1").innerHTML = "water";
            document.getElementById("d2").innerHTML = "milk";
            document.getElementById("d3").innerHTML = "eggs";
            document.getElementById("d4").innerHTML = "paper towel";
            document.getElementById("d5").innerHTML = "**optional notes<br>remember to stop by the gas station!";
        } else if (list.id == "l3") {
            document.getElementById("d1").innerHTML = "do story 1";
            document.getElementById("d2").innerHTML = "do story 2";
            document.getElementById("d3").innerHTML = "commit the stories";
            document.getElementById("d4").innerHTML = "";
            document.getElementById("d5").innerHTML = "**optional notes<br>assignment due on 11/11/2021";
        } else if (list.id == "l4") {
            document.getElementById("d1").innerHTML = "";
            document.getElementById("d2").innerHTML = "";
            document.getElementById("d3").innerHTML = "";
            document.getElementById("d4").innerHTML = "";
            document.getElementById("d5").innerHTML = "**optional notes<br>";
        } else {}

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


}

const elements = document.querySelectorAll('.detailsData');

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