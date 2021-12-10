function goHome()
{
    location.href = "file:///C:/Users/amand/OneDrive/Desktop/COMS319-%20wrkspce/StudentPlanner/home.html";
}

function highlightView(id)
{
    var viewBox = document.getElementById(id);
    if (viewBox.style.background == 'rgb(255, 250, 157)')
    {
        viewBox.style.background = 'aliceblue';
    }
    else
    {
        viewBox.style.background = 'rgb(255, 250, 157)';
    }
}

class personalEvent
{
    constructor(title, date, time, location, reminder)
    {
        this.cal = "Personal Planner"
        this.title = title;
        this.date = date;
        this.time = time;
        this.location = location;
        this.reminder = reminder;
    }
}

class assignment
{
    constructor(className, title, type, date, time, daysNeeded, hoursNeeded, des, subTasks)
    {
        this.cal = "Assignments";
        this.className = className;
        this.title = title;
        this.type = type;
        this.date = date;
        this.dateDue = date;
        this.time = time;
        this.daysNeeded = daysNeeded;
        this.hoursNeeded = hoursNeeded;
        this.des = des;
        this.subTasks = subTasks;
    }
}

class toDoTask
{
    constructor(title, taskNum, repeated, notes)
    {
        this.title = title;
        this.taskNum = taskNum;
        this.tasks = [];
        this.repeated = repeated;
        this.notes = notes;
    }

    addTask(task)
    {
        this.tasks.push(task);
    }

}

class course
{
    constructor(name, num, sec, type, time, daysOfWeek, startDate, endDate, location, profName, profEmail, offHrs, offHrsLoc)
    {
        this.name = name;
        this.num = num;
        this.sec = sec;
        this.type = type;
        this.time = time;
        this.daysOfWeek = daysOfWeek;
        this.startDate = startDate;
        this.endDate = endDate;
        this.location = location;
        this.profName = profName;
        this.profEmail = profEmail;
        this. offHrs = offHrs;
        this.offHrsLoc = offHrsLoc;
    }
}

class Event 
{
    constructor(tit, colo, cal) 
    {
        this.title = tit;
        this.color = colo;
        this.calendar = cal;
    }
}

class Day 
{
    constructor(month, day, year) 
    {
        this.date = month + "/" + day + "/" + year;
        this.dayNum = day;
        this.monthNum = month;
        this.yearNum = year;
        this.events = [];

        this.personalEvents = [];
        this.assignList = [];
        this.toDoList = [];
        this.classSch = [];
    }

    addEvent(event) 
    {
        this.events.push(event);
    }

    addPersonalEvent(personalEvent)
    {
        this.personalEvents.push(personalEvent);
    }

    addAssignment(assignment)
    {
        this.assignList.push(assignment);
    }
}


today = new Date();
currentMonth = today.getMonth();
currentYear = today.getFullYear();
currentWeek = (today.getDate() - today.getDay());

var dayVal;
if (today.getDate() < 10)
{
    dayVal = "0" + today.getDate();
}
else
{
    dayVal = today.getDate();
}

//example schedule

const dec08 = new Day(12,8,2021);
const dec09 = new Day(12,9,2021);
const dec10 = new Day(12,10,2021);
const dec11 = new Day(12,11,2021);
const dec12 = new Day(12,12,2021);
const dec13 = new Day(12,13,2021);
const dec14 = new Day(12,14,2021);

var example = [dec08,dec09,dec10,dec11,dec12,dec13,dec14];



var tempDayHolder = [new Day(currentMonth + 1, dayVal, currentYear)];
months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
monthAndYear = document.getElementById("monthAndYear");
showWeek(currentWeek);

function onClick() {
    document.body.onclick = function () {
        if ((targetDomObject) && (targetDomObject.classList) && (targetDomObject.classList.contains("dycalendar-prev-next-btn"))) {

        }
    }
}

function nextWeek() {
    if ((currentWeek + 7) > daysInMonth(currentMonth, currentYear)) {
        let count = 0;
        for (var i = currentWeek; i < daysInMonth(currentMonth, currentYear); ++i) {
            count = count + 1;
        }
        currentWeek = (7 - count);
        currentYear = (currentMonth === 11) ? currentYear + 1 : currentYear;
        currentMonth = (currentMonth + 1) % 12;
    }
    else {
        currentWeek = currentWeek + 7;
    }
    showWeek(currentWeek);
}

function prevWeek() {
    if ((currentWeek - 7) < 1) {
        let count2 = 0;
        for (var j = (currentWeek - 7); j < 0; ++j) {
            count2 = count2 + 1;
        }
        currentYear = (currentMonth === 0) ? currentYear - 1 : currentYear;
        currentMonth = (currentMonth === 0) ? 11 : currentMonth - 1;
        currentWeek = daysInMonth(currentMonth, currentYear) - count2;
    }
    else {
        currentWeek = currentWeek - 7;
    }
    showWeek(currentWeek);
}

function showWeek(day) {
    tbl = document.getElementById("calendar-body"); // body of the calendar
    tbl.innerHTML = "";
    let row = document.createElement("tr");
    monthAndYear.innerHTML = months[currentMonth] + " " + currentYear;

    for (var i = 0; i < 7; ++i) {
        let cell = document.createElement("td");
        cell.onclick = function () { highlightDay(cell)};
        cellText = document.createTextNode(day);
        cell.appendChild(cellText);
        row.appendChild(cell);

        if (i == 0) {
            highlight = cell;
        }
        if (day === today.getDate() && currentYear === today.getFullYear() && currentMonth === today.getMonth()) {
            highlight = cell;
        }

        ++day;
        if (day > daysInMonth(currentMonth, currentYear)) {
            day = 1;
            continue;
        }
        if (day < 1) {
            day = daysInMonth(currentMonth, currentYear);
            continue;
        }
    }
    tbl.appendChild(row); // appending each row into calendar body.

    highlightDay(highlight);
}

// check how many days in a month code from https://dzone.com/articles/determining-number-days-month
function daysInMonth(iMonth, iYear) 
{
    return 32 - new Date(iYear, iMonth, 32).getDate();
}

/*event stuff*/


function deleteEvent(toDelete, deleteID, calID) 
{
    if (calID == "pp")
    {
        toDelete.personalEvents.splice(deleteID,1);
    }
    if (calID == "ass")
    {   
        if (toDelete.assignList[deleteID].daysNeeded > 1)
        {
            for (var u = 0; u < toDelete.assignList[deleteID].daysNeeded; ++u)
            {
                var tempDay = new Day(toDelete.monthNum, (toDelete.dayNum - u), toDelete.yearNum);
                var idx = inList(tempDay);
                example[idx].assignList.splice(deleteID, 1);
                display(example[idx]);
            }
        }
        else
        {
            toDelete.assignList.splice(deleteID, 1);
        }
    }
    display(toDelete);
}


var highlight;
function highlightDay(ctrl) 
{
    highlight.style.background = "rgb(7,0,50)";
    highlight.style.border = "0px";
    highlight = ctrl;

    ctrl.style.background = "rgb(22, 52, 116)";
    ctrl.style.border = "1px solid #FFFA9D"
    ctrl.style.borderRadius = "45px";

    var sendDate;
    var flag = -1;
    sendDate = new Day(currentMonth + 1, ctrl.innerHTML, currentYear);

    for (var k = 0; k < example.length; ++k)
    {
        if(sendDate.date == example[k].date)
        {
            flag = k;
        }
    }
    if (flag == -1)
    {
        display(sendDate);
    }
    else
    {
        display(example[flag]);
    }
}

function enter() 
{
    var assignment1 = new assignment("COM S 319", "Group Report 3", "Report", "12/10/2021","11:59am","3","10","Final report for group project", "None");
    var personalEvent1 = new personalEvent("Work","12/09/2021","10:30","Mall","None")
    dec09.addPersonalEvent(personalEvent1);
    dec10.addAssignment(assignment1);
    //alert(dec09.date);
    display(dec09);
    display(dec10);

    var dayTemp = new Day(12,26,2021);

    //alert("IDX: " + example.indexOf(dec09));


    var txt = document.getElementById("date").value;
    var year = txt.substring(0, 4);
    var mon = txt.substring(5, 7);
    var day = txt.substring(8, 10);
    var color = document.getElementById("color").value;
    var title = document.getElementById("title").value;
    var cal = document.getElementById("calendarIn").value;
    var highlightDay = currentMonth+1 + "/" + "0" + highlight.innerHTML + "/" + currentYear;

    const dayIn = new Day(mon, day, year);
    const eventIn = new Event(title, color, cal);

    var flag = -1;

    for (var i = 0; i < tempDayHolder.length; ++i) 
    {
        if (tempDayHolder[i].date == dayIn.date) 
        {
            flag = i;
            break;
        }
    }

    if (flag == -1) 
    {
        dayIn.addEvent(eventIn);
        tempDayHolder.push(dayIn);
    }
    else 
    {
        tempDayHolder[flag].addEvent(eventIn);
    }
    if (highlightDay == dayIn.date)
    {
        showEvents(dayIn);
    }
}

function inList(day)
{
    for(var l = 0; l < example.length; ++l)
    {
        if (day.date == example[l].date)
        {
            return l;
        }
    }

    return -1;
}


function display(day)
{
    var events = document.getElementById("events-body");
    events.innerHTML = "";

    if((day.personalEvents.length == 0) && (day.assignList.length == 0))
    {
        let row = document.createElement("tr");
        let cell = document.createElement("td");
        cell.setAttribute("class", "eventData");
        cell.style.backgroundColor = "aliceblue";
        cellText = document.createTextNode("No events for today!");
        cell.appendChild(cellText);
        row.appendChild(cell);
        events.appendChild(row);
    }
    else
    {
        for (var i = 0; i < day.personalEvents.length; ++i)
        {
            let row = document.createElement("tr");
            let cell = document.createElement("td");
            cell.setAttribute("class", "eventData");
            cell.setAttribute("id", i);
            cell.style.backgroundColor = "lightblue";
                        
            let nameButton = document.createElement("button");
            nameButton.innerHTML = day.personalEvents[i].title;
            nameButton.onclick = function () { personalDetails(day, cell.id)};
            nameButton.setAttribute("class", "nameButton");

            let xButton = document.createElement("button");
            xButton.innerHTML = "X";
            xButton.setAttribute("class", "xEvent");
            xButton.onclick = function () { deleteEvent(day, cell.id, "pp") };
           
            cell.appendChild(nameButton);
            cell.appendChild(xButton);
            row.appendChild(cell);
            events.appendChild(row);
        }

        for (var j = 0; j < day.assignList.length; ++j)
        {
            let row = document.createElement("tr");
            let cell = document.createElement("td");
            cell.setAttribute("class", "eventData");
            cell.setAttribute("id", j);
            cell.style.backgroundColor = "pink";
                        
            let nameButton = document.createElement("button");
            nameButton.innerHTML = day.assignList[j].title;
            nameButton.onclick = function () { assignDetails(day, cell.id) };
            nameButton.setAttribute("class", "nameButton");

            let xButton = document.createElement("button");
            xButton.innerHTML = "X";
            xButton.setAttribute("class", "xEvent");
            xButton.onclick = function () { deleteEvent(day, cell.id, "ass") };
           
            cell.appendChild(nameButton);
            cell.appendChild(xButton);
            row.appendChild(cell);
            events.appendChild(row);

            if (day.assignList[j].daysNeeded > 1)
            {
                for (var z = 1; z < day.assignList[j].daysNeeded; ++z)
                {
                    var tempDay = new Day(day.monthNum, (day.dayNum - z), day.yearNum);
                    var idx = inList(tempDay);
                    var assignmentCopy = day.assignList[j];
                    assignmentCopy.date = tempDay.date;
                    example[idx].addAssignment(assignmentCopy);
                }
            }
        }
    }

}

//assignment("COM S 319", "Group Report 3", "Report", "12/10/2021","11:59am","3","10","Final report for group project", "None");

function assignDetails(day, eventidx)
{
    var details = document.getElementById("detailstbl");
    details.innerHTML = "";

    let calRow = document.createElement("tr");
    let calCell = document.createElement("td");
    calCell.setAttribute("class", "detailsData");
    calText = document.createTextNode("Calendar: " + day.assignList[eventidx].cal);
    calCell.appendChild(calText);
    calRow.appendChild(calCell);
    details.appendChild(calRow);

    let dateRow = document.createElement("tr");
    let dateCell = document.createElement("td");
    dateCell.setAttribute("class", "detailsData");
    dateText = document.createTextNode("Date: " + day.assignList[eventidx].dateDue);
    dateCell.appendChild(dateText);
    dateRow.appendChild(dateCell);
    details.appendChild(dateRow);

    let classRow = document.createElement("tr");
    let classCell = document.createElement("td");
    classCell.setAttribute("class", "detailsData");
    classText = document.createTextNode("Class: " + day.assignList[eventidx].className);
    classCell.appendChild(classText);
    classRow.appendChild(classCell);
    details.appendChild(classRow);

    let titleRow = document.createElement("tr");
    let titleCell = document.createElement("td");
    titleCell.setAttribute("class", "detailsData");
    titleText = document.createTextNode("Title: " + day.assignList[eventidx].title);
    titleCell.appendChild(titleText);
    titleRow.appendChild(titleCell);
    details.appendChild(titleRow);

    let typeRow = document.createElement("tr");
    let typeCell = document.createElement("td");
    typeCell.setAttribute("class", "detailsData");
    typeText = document.createTextNode("Type: " + day.assignList[eventidx].type);
    typeCell.appendChild(typeText);
    typeRow.appendChild(typeCell);
    details.appendChild(typeRow);

    let timeRow = document.createElement("tr");
    let timeCell = document.createElement("td");
    timeCell.setAttribute("class", "detailsData");
    timeText = document.createTextNode("Time: " + day.assignList[eventidx].time);
    timeCell.appendChild(timeText);
    timeRow.appendChild(timeCell);
    details.appendChild(dateRow);

    let daysRow = document.createElement("tr");
    let daysCell = document.createElement("td");
    daysCell.setAttribute("class", "detailsData");
    daysText = document.createTextNode("Days Needed: " + day.assignList[eventidx].daysNeeded);
    daysCell.appendChild(daysText);
    daysRow.appendChild(daysCell);
    details.appendChild(daysRow);

    let hrsRow = document.createElement("tr");
    let hrsCell = document.createElement("td");
    hrsCell.setAttribute("class", "detailsData");
    hrsText = document.createTextNode("Hours Needed: " + day.assignList[eventidx].hoursNeeded);
    hrsCell.appendChild(hrsText);
    hrsRow.appendChild(hrsCell);
    details.appendChild(hrsRow);

    let notesRow = document.createElement("tr");
    let notesCell = document.createElement("td");
    notesCell.setAttribute("class", "detailsData");
    notesText = document.createTextNode("Notes: " + day.assignList[eventidx].des);
    notesCell.appendChild(notesText);
    notesRow.appendChild(notesCell);
    details.appendChild(notesRow);

    let subRow = document.createElement("tr");
    let subCell = document.createElement("td");
    subCell.setAttribute("class", "detailsData");
    subText = document.createTextNode("Subtasks: " + day.assignList[eventidx].subTasks);
    subCell.appendChild(subText);
    subRow.appendChild(subCell);
    details.appendChild(subRow);
}

//("Personal Planner", "Work","12/09/2021","10:30","Mall","None")


function personalDetails(day, eventidx)
{
    var details = document.getElementById("detailstbl");
    details.innerHTML = "";

    let calRow = document.createElement("tr");
    let calCell = document.createElement("td");
    calCell.setAttribute("class", "detailsData");
    calText = document.createTextNode("Calendar: " + day.personalEvents[eventidx].cal);
    calCell.appendChild(calText);
    calRow.appendChild(calCell);
    details.appendChild(calRow);

    let dateRow = document.createElement("tr");
    let dateCell = document.createElement("td");
    dateCell.setAttribute("class", "detailsData");
    dateText = document.createTextNode("Date: " + day.personalEvents[eventidx].date);
    dateCell.appendChild(dateText);
    dateRow.appendChild(dateCell);
    details.appendChild(dateRow);

    let titleRow = document.createElement("tr");
    let titleCell = document.createElement("td");
    titleCell.setAttribute("class", "detailsData");
    titleText = document.createTextNode("Title: " + day.personalEvents[eventidx].title);
    titleCell.appendChild(titleText);
    titleRow.appendChild(titleCell);
    details.appendChild(titleRow);

    let timeRow = document.createElement("tr");
    let timeCell = document.createElement("td");
    timeCell.setAttribute("class", "detailsData");
    timeText = document.createTextNode("Time: " + day.personalEvents[eventidx].time);
    timeCell.appendChild(timeText);
    timeRow.appendChild(timeCell);
    details.appendChild(dateRow);

    let locRow = document.createElement("tr");
    let locCell = document.createElement("td");
    locCell.setAttribute("class", "detailsData");
    locText = document.createTextNode("Location: " + day.personalEvents[eventidx].location);
    locCell.appendChild(locText);
    locRow.appendChild(locCell);
    details.appendChild(locRow);

    let remRow = document.createElement("tr");
    let remCell = document.createElement("td");
    remCell.setAttribute("class", "detailsData");
    remText = document.createTextNode("Reminder: " + day.personalEvents[eventidx].reminder);
    remCell.appendChild(remText);
    remRow.appendChild(remCell);
    details.appendChild(remRow);
}




function showEvents(date) 
{
    let newFlag = -1;

    for (var h = 0; h < tempDayHolder.length; ++h) 
    {
        if (date.date == tempDayHolder[h].date) 
        {
            newFlag = h;
        }
    }

    var events = document.getElementById("events-body");
    events.innerHTML = "";


    if (newFlag == -1 || tempDayHolder[newFlag].events.length == 0)
    {
        let row = document.createElement("tr");
        let cell = document.createElement("td");
        cell.setAttribute("class", "eventData");
        cell.style.backgroundColor = "aliceblue";
        cellText = document.createTextNode("No events for today!");
        cell.appendChild(cellText);
        row.appendChild(cell);
        events.appendChild(row);
    }
    else 
    {
        for (var t = 0; t <= tempDayHolder[newFlag].events.length; ++t) 
        {
            if (t == tempDayHolder[newFlag].events.length) 
            {
                break;
            }
            let row = document.createElement("tr");
            let cell = document.createElement("td");
            cell.setAttribute("class", "eventData");
            cell.setAttribute("id", t);
            cell.style.backgroundColor = tempDayHolder[newFlag].events[t].color;
                        
            let nameButton = document.createElement("button");
            nameButton.innerHTML = tempDayHolder[newFlag].events[t].title;
            nameButton.onclick = function () { showDetails(tempDayHolder[newFlag], cell.id) };
            nameButton.setAttribute("class", "nameButton");

            let xButton = document.createElement("button");
            xButton.innerHTML = "X";
            xButton.setAttribute("class", "xEvent");
            xButton.onclick = function () { deleteEvent(tempDayHolder[newFlag], cell.id) };
           
            cell.appendChild(nameButton);
            cell.appendChild(xButton);
            row.appendChild(cell);
            events.appendChild(row);
        }

    }
}

function showDetails(day, eventidx)
{
    var details = document.getElementById("detailstbl");
    details.innerHTML = "";

    let calRow = document.createElement("tr");
    let calCell = document.createElement("td");
    calCell.setAttribute("class", "detailsData");
    calText = document.createTextNode("Calendar: " + day.events[eventidx].calendar);
    calCell.appendChild(calText);
    calRow.appendChild(calCell);
    details.appendChild(calRow);

    let titleRow = document.createElement("tr");
    let titleCell = document.createElement("td");
    titleCell.setAttribute("class", "detailsData");
    titleText = document.createTextNode("Title: " + day.events[eventidx].title);
    titleCell.appendChild(titleText);
    titleRow.appendChild(titleCell);
    details.appendChild(titleRow);
}