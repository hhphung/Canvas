function test2() {
    alert("test2");
}



function addAssignment() {

}

function highlight(ctrl) {
    if (ctrl.style.background == 'rgb(255, 250, 157)') {
        ctrl.style.background = 'aliceblue';
    } else {
        ctrl.style.background = 'rgb(255, 250, 157)';
    }
}

function dates(n) {
    today = new Date();

    const weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    const month = new Array(12);
    month[0] = "January";
    month[1] = "February";
    month[2] = "March";
    month[3] = "April";
    month[4] = "May";
    month[5] = "June";
    month[6] = "July";
    month[7] = "August";
    month[8] = "September";
    month[9] = "October";
    month[10] = "November";
    month[11] = "December";

    var dayind = today.getDay() + n;
    if (dayind <= 6) {
        let day = weekday[dayind];
    } else {
        let day = weekday[dayind - 7];
    }
    var dd = today.getDate() + n;
    var mm = month[today.getMonth()];


    return (day + ',' + mm + dd);
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