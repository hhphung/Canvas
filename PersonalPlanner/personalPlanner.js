let nav = 0;
let clicked = null;
let events = localStorage.getItem('events') ? JSON.parse(localStorage.getItem('events')) : [];



const calendar = document.getElementById('calendar');
const newEventModal = document.getElementById('newEventModal');
const deleteEventModal = document.getElementById('deleteEventModal');
const backDrop = document.getElementById('modalBackDrop');
const eventTitleInput = document.getElementById('eventTitleInput');
const eventDateInput = document.getElementById('eventDateInput');
const eventTimeInput = document.getElementById('eventTimeInput');
const eventLocationInput = document.getElementById('eventLocationInput');
const eventReminder = document.getElementById('remind');


const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

var b ='';
var a = '';

let day = null;
function openModal(date) {
  clicked = date;

 var length = events.length;
 var array = [];
 for(var i = 0; i < length; i ++){
  const day = events[i].date;
  if(day === clicked){
     array.push(events[i]);
   }
 }


  const eventForDay = events.find(e => e.date === clicked);
  const hoi = array.length;

  if (eventForDay) {
    for(var i = 0; i < hoi; i ++){
    var m = array[i];
    var space =  document.createElement("P");
    space.innerHTML = "";
    var temp = document.getElementById("a");
    var newE = document.createElement("div");
    newE.setAttribute("id", "eventBox");
    const title = document.createElement("P");
    title.classList.add('eventText');
    title.innerHTML = "Title : " + m.title;
    const date = document.createElement("P");
    date.classList.add('eventDate');
    date.innerHTML = "Date: " + m.date;
    const time = document.createElement("P");
    time.classList.add('eventTime');
    time.innerHTML = "Time: " + m.time;
    const location = document.createElement("P");
    location.classList.add('eventLocation');
    location.innerHTML = "Location: " + m.location;
    const remind =document.createElement("P");
    remind.classList.add('eventRemind');
    remind.innerHTML ="Reminder: " + m.remind;
    newE.appendChild(title);
    newE.appendChild(date);
    newE.appendChild(time);
    newE.appendChild(location);
    newE.appendChild(remind);
    temp.appendChild(newE);
    temp.appendChild(space);
    }
    deleteEventModal.style.display = 'block';



    /*
    document.getElementById('eventText').innerText = "Title : " + eventForDay.title;
    document.getElementById('eventDate').innerText = "Date: " + eventForDay.date;
    document.getElementById('eventTime').innerText = "Time: " + eventForDay.time;
    document.getElementById('eventLocation').innerText = "Location: " + eventForDay.location;
    document.getElementById('eventRemind').innerText = "Reminder: " + eventForDay.remind;
   
  */
  } else {
    newEventModal.style.display = 'block';
  }

  backDrop.style.display = 'block';
}

function load() {
  const dt = new Date();

  if (nav !== 0) {
    dt.setMonth(new Date().getMonth() + nav);
  }

  const day = dt.getDate();
  const month = dt.getMonth();
  const year = dt.getFullYear();

  const firstDayOfMonth = new Date(year, month, 1);
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  
  var dateString = firstDayOfMonth.toLocaleDateString('en-us', {
    weekday: 'long',
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
  });
  const paddingDays = weekdays.indexOf(dateString.split(', ')[0]);
    
  document.getElementById('monthDisplay').innerText = 
    `${dt.toLocaleDateString('en-us', { month: 'long' })} ${year}`;

  calendar.innerHTML = '';

  for(let i = 1; i <= paddingDays + daysInMonth; i++) {
    var daySquare = document.createElement('div');

    daySquare.classList.add('day');

    const dayString = `${month + 1}/${i - paddingDays}/${year}`;
      
    if (i > paddingDays) {
      daySquare.innerText = i - paddingDays;
      const eventForDay = events.find(e => e.date === dayString);
      a = eventForDay;
      if (i - paddingDays === day && nav === 0) {
        daySquare.id = 'currentDay';
      }

      if (eventForDay) {
        var array = [];
        var length = events.length;
          for(var z = 0; z < length; z ++){
            const day = events[z].date;
              if(day === dayString){
                 array.push(events[z]);
         }
      }
        
      var length = array.length;
       for(var h = 0; h < length; h ++){  
         var e = array[h];   
        const eventDiv = document.createElement('div');
        eventDiv.classList.add('event');
        
        daySquare.appendChild(eventDiv);
    }
      }
      
      daySquare.addEventListener('click', () => openModal(dayString));
    } else {
      daySquare.classList.add('padding');
    }

    calendar.appendChild(daySquare);    
  }
}

function closeModal() {
  eventTitleInput.classList.remove('error');
  newEventModal.style.display = 'none';
  deleteEventModal.style.display = 'none';
  backDrop.style.display = 'none';
  eventTitleInput.value = '';
  eventLocationInput.value = '';
  eventTimeInput.value = '';
  eventReminder.value = eventReminder[0].value;
  var temp = document.getElementById("a");
  while (temp.firstChild) {
    temp.removeChild(temp.firstChild);
}

  load();
}

function saveEvent() {
  day = clicked;
  if (eventTitleInput.value) {
     eventTitleInput.classList.remove('error');
    events.push({
       date:day,
      title: eventTitleInput.value,
      location: eventLocationInput.value,
      time:eventTimeInput.value ,
      remind: eventReminder.value
    });
    localStorage.setItem('events', JSON.stringify(events));
    closeModal();
  } 
 
  
  else {
    
    eventTitleInput.classList.add('error');
   
    
  }
}

function deleteEvent() {
  events = events.filter(e => e.date !== clicked);
  localStorage.setItem('events', JSON.stringify(events));
  closeModal();
}
function Add(){
  closeModal();
  newEventModal.style.display = 'block';
  
}



function initButtons() {
  var next = document.getElementsByClassName('nextButton');
 
  next[0].addEventListener('click', () => {
    nav++;
    load();
  });
  
  var back = document.getElementsByClassName('backButton');
  
  back[0].addEventListener('click', () => {
    nav--;
    load();
  });

 
  document.getElementById('saveButton').addEventListener('click', saveEvent);
  document.getElementById('cancelButton').addEventListener('click', closeModal);
  document.getElementById('deleteButton').addEventListener('click', deleteEvent);
  document.getElementById('closeButton').addEventListener('click', closeModal);
  document.getElementById('addButton').addEventListener('click',  Add);
 
  
}

initButtons();
load();