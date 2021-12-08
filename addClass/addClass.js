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



var add = document.getElementById('aClass');

add.addEventListener('click', addClass);


function addClass() {

    var cN = document.getElementById('name').value;
    var cNum = document.getElementById('number').value;

    var cS = document.getElementById('section').value;
    var tC = document.getElementById('class').value;
    var T = document.getElementById('time').value;
    var Dw = document.getElementById('dayOfweek').value;
    var sD = document.getElementById('dateS').value;
    var eD = document.getElementById('dateE').value;
    var loc = document.getElementById('Location').value;
    var pN = document.getElementById('nameP').value;
    var pE = document.getElementById('Email').value;
    var oH = document.getElementById('timeOH').value;
    var oHL = document.getElementById('LocationOH').value;

    var oneClass = {

        "className": cN,
        "classNumber": cNum,
        "classSection": cS,
        "typeOfclass": tC,
        "time": T,
        "daysOfWeeks": Dw,
        "startDate": sD,
        "endDate": eD,
        "location": loc,
        "profName": pN,
        "email": pE,
        "officeHoursTime": oH,
        "officeLocation": oHL
    }

    var acounts = {};
    var students = [];
    acounts.students = students;
    var json = JSON.parse(localStorage.getItem('users'));

    var i = 0;
    var j = json.students.length;

    console.log(JSON.stringify(json.students));
    console.log(j);


    var nameAdd = localStorage.getItem('name');
    var passAdd = localStorage.getItem('password');


    var cheker = 0;

    console.log(nameAdd);

    console.log(passAdd);



    while (i < j) {

        console.log(JSON.stringify(json.students[i].firstName));

        console.log(JSON.stringify(json.students[i].password));


        if (json.students[i].firstName == nameAdd) {

            if (json.students[i].password == passAdd) {

                json.students[i].classes.push(oneClass);

                console.log(JSON.stringify(json.students[i]));
                cheker = 1;
            }

        }

        acounts.students.push(json.students[i]);

        console.log(JSON.stringify(acounts.students[i]));

        i++;



    }
    if (!cheker) {
        console.log("fuck");
        while (1) {


        }


    }

    localStorage.clear();



    localStorage.setItem('users', JSON.stringify(acounts));




}


function findStudent(name, pass) {

    var all = JSON.parse(localStorage.getItem('users'));

    var allSize = all.students.length;

    console.log(allSize);
    console.log("name");
    console.log(JSON.stringify(all.students[allSize - 1].firstName));
    console.log(name);

    console.log("password");
    console.log(JSON.stringify(all.students[allSize - 1].password));
    console.log(pass);


    for (var l = 0; l < allSize; l++) {

        if ((all.students[l].firstName) == name) {

            console.log("name");
            console.log(JSON.stringify(all.students[l].firstName));
            console.log(name);




            if ((all.students[l].password) == pass) {


                console.log("password");
                console.log(JSON.stringify(all.students[l].password));
                console.log(pass);


                return all.students[l];

            }



        }
    }
    console.log("not found")

}