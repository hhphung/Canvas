let nav = 0;
let clicked = null;
let events = localStorage.getItem('events') ? JSON.parse(localStorage.getItem('events')) : [];

var mysql = require('mysql');

var con = mysql.createConnection({
  host: "coms-309-017.cs.iastate.edu",
  user: "g19",
  password: "coms319"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});


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
var newE = document.createElement("div");
function openModal(date) {
  clicked = date;

  const eventForDay = events.find(e => e.date === clicked);

  if (eventForDay) {
    document.getElementById('eventText').innerText = "Title : " + eventForDay.title;
    document.getElementById('eventDate').innerText = "Date: " + eventForDay.date;
    document.getElementById('eventTime').innerText = "Time: " + eventForDay.time;
    document.getElementById('eventLocation').innerText = "Location: " + eventForDay.location;
    document.getElementById('eventRemind').innerText = "Reminder: " + eventForDay.remind;
    deleteEventModal.style.display = 'block';
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
        
        const eventDiv = document.createElement('div');
        eventDiv.classList.add('event');
        eventDiv.innerText = eventForDay.title;
        daySquare.appendChild(eventDiv);
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
  clicked = null;
  load();
}

function saveEvent() {
  if (eventTitleInput.value) {
     eventTitleInput.classList.remove('error');
    events.push({
       date: clicked,
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