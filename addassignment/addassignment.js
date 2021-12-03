function test2()
{
    alert("test2");
}

function goHome()
{
    location.href = "file:///C:/Users/amand/OneDrive/Desktop/COMS319-%20wrkspce/StudentPlanner/home.html";
}

function addAssignment() {
    new Assignment();
    Assignment.date = getelement.id('date')
    Assignment.time = getelement.id('time')
    Assignment.type = getelement.id('type')
    Assignment.class = getelement.id('class')
 
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
