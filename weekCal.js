/*calendar functions*/
class Event 
{
    constructor(tit, colo) 
    {
        this.title = tit;
        this.color = colo;
    }
}

class Day 
{
    constructor(month, day, year) 
    {
        this.date = month +"/"+ day +"/"+ year;
        this.events = [];
    }

    addEvent(event)
    {
        this.events.push(event);
    }

}

today = new Date();
currentMonth = today.getMonth();
currentYear = today.getFullYear();
currentWeek = (today.getDate() - today.getDay());

var tempDayHolder = [new Day(currentMonth+1, today.getDate(), currentYear)];
months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
monthAndYear = document.getElementById("monthAndYear");
showWeek(currentWeek);

var highlight;
function highlightDay(ctrl)
{  

    highlight.style.background = "rgb(7,0,50)";
    highlight.style.border = "0px";
    highlight = ctrl;

    ctrl.style.background = "rgb(22, 52, 116)";
    ctrl.style.border = "1px solid #FFFA9D"
    ctrl.style.borderRadius = "45px";

    showEvents(ctrl.innerHTML);
}

function onClick(){
    document.body.onclick = function () {
        if ((targetDomObject) && (targetDomObject.classList) && (targetDomObject.classList.contains("dycalendar-prev-next-btn"))) {

        }
    }
}

function nextWeek()
{
    if ( (currentWeek + 7) > daysInMonth(currentMonth, currentYear))
    {
        let count = 0;
        for (var i = currentWeek; i < daysInMonth(currentMonth, currentYear); ++i)
        {
            count = count + 1;
        }
        currentWeek = (7-count);
        currentYear = (currentMonth === 11) ? currentYear + 1 : currentYear;
        currentMonth = (currentMonth + 1) % 12;
    }
    else
    {
        currentWeek = currentWeek + 7;
    }
    showWeek(currentWeek);
}

function prevWeek()
{
    if ( (currentWeek-7) < 1)
    {
        let count2 = 0;
        for (var j = (currentWeek-7); j < 0; ++j)
        {
            count2 = count2 + 1;
        }
        currentYear = (currentMonth === 0) ? currentYear - 1 : currentYear;
        currentMonth = (currentMonth === 0) ? 11 : currentMonth - 1;
        currentWeek = daysInMonth(currentMonth, currentYear) - count2;
    }
    else
    {
        currentWeek = currentWeek - 7;
    }
    showWeek(currentWeek);
}

function showWeek(day)
{
    tbl = document.getElementById("calendar-body"); // body of the calendar
    tbl.innerHTML = "";
    let row = document.createElement("tr");
    monthAndYear.innerHTML = months[currentMonth] + " " + currentYear;

    for (var i = 0; i < 7; ++i)
    {
        let cell = document.createElement("td");
        cell.onclick = function(){highlightDay(cell)};
        cellText = document.createTextNode(day);
        cell.appendChild(cellText);
        row.appendChild(cell);

        if (i == 0)
        {
            highlight = cell;
        }
        if (day === today.getDate() && currentYear === today.getFullYear() && currentMonth === today.getMonth()) 
        {
            highlight = cell;
        }
        
        ++day;
        if (day > daysInMonth(currentMonth, currentYear))
        {
            day = 1;
            continue;
        }
        if (day < 1)
        {
            day = daysInMonth(currentMonth, currentYear);
            continue;
        }
    }
    tbl.appendChild(row); // appending each row into calendar body.

    highlightDay(highlight);
}

// check how many days in a month code from https://dzone.com/articles/determining-number-days-month
function daysInMonth(iMonth, iYear) {
    return 32 - new Date(iYear, iMonth, 32).getDate();
}

/*event stuff*/


function deleteEvent(toDelete, dayIdx, eventIdx)
{
    toDelete.remove();
    //alert(tempDayHolder[dayIdx].events[eventIdx-1].title);
    tempDayHolder[dayIdx].events.splice[eventIdx, 1];
}

function enter()
{
    var txt = document.getElementById("date").value;
    var year = txt.substring(0,4);
    var mon = txt.substring(5,7);
    var day = txt.substring(8,10);
    var color = document.getElementById("color").value;
    var title = document.getElementById("title").value;

    const dayIn = new Day(mon, day, year);
    const eventIn = new Event(title, color);
    var flag = -1;

    if (tempDayHolder.length == 0)
    {
        dayIn.addEvent(eventIn);
        tempDayHolder.push(dayIn);
    }
    else
    {
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
            flag = -1;
        }
    }
}


function showEvents(day)
{
    let dateName = currentMonth+1 +"/"+ day +"/"+currentYear;
    let newFlag = 0;

    for (var h = 0; h < tempDayHolder.length; ++h)
    {
        if (dateName == tempDayHolder[h].date)
        {
            newFlag = h;
        }
    }

    var events = document.getElementById("events-body");
    events.innerHTML = "";
    
    if (tempDayHolder[newFlag].events.length == 0)
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
            cell.style.backgroundColor = tempDayHolder[newFlag].events[t].color;
            cellText = document.createTextNode(tempDayHolder[newFlag].events[t].title);
            let xButton = document.createElement("button");
            xButton.innerHTML = "X";
            xButton.setAttribute("class", "xEvent");
            xButton.onclick = function(){deleteEvent(cell, newFlag, t)};
            cell.appendChild(cellText);
            cell.appendChild(xButton);
            row.appendChild(cell);
            events.appendChild(row);
        }
        
    }
}




    // let row = document.createElement("tr");
    // let cell = document.createElement("td");
    // cell.setAttribute("class", "eventData");
    // cell.style.backgroundColor = day.color;
    // cellText = document.createTextNode(day.events[i]);
    // cell.appendChild(cellText);
    // row.appendChild(cell);
    // events.appendChild(row);

/*
11-16-2021
    event1
        Title
        color
    event2
        title
        color

11-17-2021
    event1
        title
        color
    event2
        title
        color
    event3
        title
        color
*/