function test2()
{
    alert("test2");
}

function goHome()
{
    location.href = "file:///C:/Users/amand/OneDrive/Desktop/COMS319-%20wrkspce/StudentPlanner/home.html";
}

function addAssignment() {
    store =  new Assignment();
    Assignment.date = document.getElementById('date');
    Assignment.time = document.getElementById('time');
    Assignment.type = document.getElementById('type');
    Assignment.assignclass = document.getElementById('class');
 
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
