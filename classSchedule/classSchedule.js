var b = document.getElementById("b");

var c = document.getElementById("c");

var d = document.getElementById("d");

var e = document.getElementById("e");

var speak = document.getElementById("sm");

var edit = document.getElementById("editB");

b.addEventListener('click', classDetail);
c.addEventListener('click', classDetail);
d.addEventListener('click', classDetail);
e.addEventListener('click', classDetail);
speak.addEventListener('click', speakMode);

edit.addEventListener("click", makevis);




function classDetail(evt) {

    if (mode == 1) {

        var msg = new SpeechSynthesisUtterance();
        msg.text = evt.currentTarget.innerHTML;
        window.speechSynthesis.speak(msg);


    } else {

        alert(evt.currentTarget.innerHTML);


    }


}

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





var i = document.getElementById("i1");


var ii = document.getElementById("i2");

var iii = document.getElementById("i3");

var iiii = document.getElementById("i4");

var cn = document.getElementById("cancel");

var cf = document.getElementById("confirm");

cn.addEventListener("click", canc);

function makevis() {

    if (mode == 1) {

        var msg = new SpeechSynthesisUtterance();
        msg.text = edit.innerHTML;
        window.speechSynthesis.speak(msg);


    } else {


        i.style.display = 'block';
        ii.style.display = 'block';
        iii.style.display = 'block';
        iiii.style.display = 'block';
        cn.style.display = 'block';
        cf.style.display = 'block';

    }


}

function canc() {

    if (mode == 1) {

        var msg = new SpeechSynthesisUtterance();
        msg.text = cn.innerHTML;
        window.speechSynthesis.speak(msg);


    } else {

        i.style.display = 'none';
        ii.style.display = 'none';
        iii.style.display = 'none';
        iiii.style.display = 'none';
        cn.style.display = 'none';
        cf.style.display = 'none';
    }

}

cf.addEventListener("click", conf);

function conf() {

    // handle button click
    if (mode == 1) {

        var msg = new SpeechSynthesisUtterance();
        msg.text = cf.innerHTML;
        window.speechSynthesis.speak(msg);


    } else {
        const rbs = document.querySelectorAll('input[name="choice"]');
        let selectedValue;
        for (const rb of rbs) {
            if (rb.checked) {
                selectedValue = rb.value;
                break;
            }
        }
        //alert(selectedValue);
        var id;

        if (selectedValue == "class one") {

            id = b;

        } else if (selectedValue == "class two") {

            id = c;




        } else if (selectedValue == "class three") {

            id = d;



        } else if (selectedValue == "class four") {

            id = e;


        }


        var ans = prompt(selectedValue, "infomation");

        id.innerHTML = ans;


        i.style.display = 'none';
        ii.style.display = 'none';
        iii.style.display = 'none';
        iiii.style.display = 'none';
        cn.style.display = 'none';
        cf.style.display = 'none';
    }



}

function speaker(evt) {

    if (mode == 1) {

        var msg = new SpeechSynthesisUtterance();
        msg.text = evt.currentTarget.innerHTML;
        window.speechSynthesis.speak(msg);


    }



}





const elements = document.querySelectorAll('.day');

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