var speakMode = document.getElementById("speakMode");

speakMode.addEventListener('click', speakModel);


var mode = 0;

function speakModel() {
    if (mode == 0) {

        speakMode.innerHTML = "cancel";

        mode = 1;
    } else {

        mode = 0;
        speakMode.innerHTML = "speech mode";

    }

    console.log(mode);

}



function test2() {
    alert("test2");
}

var mode = 0;

function highlight(ctrl) {
    if (mode == 1) {


        var msg = new SpeechSynthesisUtterance();
        msg.text = ctrl.innerHTML;
        window.speechSynthesis.speak(msg);


    } else {

        if (ctrl.style.background == 'rgb(255, 250, 157)') {
            ctrl.style.background = 'aliceblue';
        } else {
            ctrl.style.background = 'rgb(255, 250, 157)';
        }
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