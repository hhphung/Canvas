/*calendar functions*/
today = new Date();
currentMonth = today.getMonth();
currentYear = today.getFullYear();
selectYear = document.getElementById("year");
selectMonth = document.getElementById("month");

prev = new Date();

currentWeek = (today.getDate() - today.getDay());
dayWeek = today.getDay();

months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];

monthAndYear = document.getElementById("monthAndYear");
showWeek(currentWeek);


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
        cell = document.createElement("td");
        cellText = document.createTextNode(day);
        cell.appendChild(cellText);
        row.appendChild(cell);
        ++day;

        if (day > daysInMonth(currentMonth, currentYear))
        {
            day = 1;
            continue;
        }
        if (day < 1)
        {
            var monthCopy = currentMonth;
            monthCopy = (currentMonth === 0) ? 11 : currentMonth - 1;
            day = daysInMonth(monthCopy, currentYear);
            continue;
        }
        
    }
    tbl.appendChild(row); // appending each row into calendar body.

    
}

// check how many days in a month code from https://dzone.com/articles/determining-number-days-month
function daysInMonth(iMonth, iYear) {
    return 32 - new Date(iYear, iMonth, 32).getDate();
}
