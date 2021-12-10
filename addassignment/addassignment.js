function test2()
{
    alert("test2");
}

function goHome()
{
    location.href = "./home.html";
}

function addAssignment() {
    var existingAssignments = JSON.parse(localStorage.getItem("AssignmentList"));
    if (existingAssignments == null) existingAssignments = [];
    var typ;
    var cls = document.getElementById("class").value;
    var tit = document.getElementById("name").value;
    var dat = new Date();
    dat = document.getElementById("date").value;
    var datstring = dat.toString();
    var tim = document.getElementById("time");
    timstring = time.toString();
    if (document.getElementById("test").checked) {
        typ = document.getElementById("test").value;
    } else if (document.getElementById("project").checked) {
        typ = document.getElementById("project").value;
    } else if (document.getElementById("quiz").checked) {
        typ = document.getElementById("quiz").value;
    } else if (document.getElementById("paper").checked) {
        typ = document.getElementById("paper").value;
    } else if (document.getElementById("worksheet").checked) {
        typ = document.getElementById("worksheet").value;
    } else if (document.getElementById("lab").checked) {
        typ = document.getElementById("lab").value;
    }
    var assignment = {
        "course": cls,
        "date": datstring,
        "time": tim,
        "title": tit,
        "type": typ
    }
    localStorage.setItem("assignment", JSON.stringify(assignment));
    existingAssignments.push(assignment);
    localStorage.setItem("AssignmentList", JSON.stringify(existingAssignments));
    var elements = document.getElementsByTagName("input");
    for (var ii = 0; ii < elements.length; ii++) {
        elementtype = elements[ii].type;
        if (elementtype == "text" || elementtype == "textarea" || elementtype == "time" || elementtype == "date" || elementtype == "number") {
            elements[ii].value = "";
        } else if (elements[ii].type == "radio") {
            elements[ii].checked == false;
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

class Assignment {
    constructor(tit, cls, typ, dat) {
        this.title = tit;
        this.class = cls;
        this.date = dat;
        this.type = typ;
    }
}

