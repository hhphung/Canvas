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

const elements = document.querySelectorAll('.aClassF');

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