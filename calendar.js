const calendarEl = document.getElementById("calendar");
const monthYearEl = document.getElementById("month-year");
const popup = document.getElementById("event-popup");
const eventText = document.getElementById("event-text");
const selectedDateEl = document.getElementById("selected-date");

let currentDate = new Date();
let selectedDate = null;

const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function renderCalendar() {
  calendarEl.innerHTML = "";
  monthYearEl.textContent = currentDate.toLocaleString("default", {
    month: "long",
    year: "numeric",
  });

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  // Headers
  weekdays.forEach(day => {
    const header = document.createElement("div");
    header.className = "header";
    header.textContent = day;
    calendarEl.appendChild(header);
  });

  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  // Empty slots
  for (let i = 0; i < firstDay; i++) {
    const empty = document.createElement("div");
    calendarEl.appendChild(empty);
  }

  // Days
  for (let day = 1; day <= daysInMonth; day++) {
    const dayDiv = document.createElement("div");
    dayDiv.className = "day";
    dayDiv.textContent = day;

    const dateStr = `${year}-${month + 1}-${day}`;
    const events = getEventsForDate(dateStr);
    if (events.length > 0) {
      dayDiv.classList.add("has-event");
      dayDiv.title = events.join("\n");
    }

    dayDiv.onclick = () => openPopup(dateStr);
    calendarEl.appendChild(dayDiv);
  }
}

function prevMonth() {
  currentDate.setMonth(currentDate.getMonth() - 1);
  renderCalendar();
}

function nextMonth() {
  currentDate.setMonth(currentDate.getMonth() + 1);
  renderCalendar();
}

function openPopup(dateStr) {
  selectedDate = dateStr;
  selectedDateEl.textContent = `Date: ${dateStr}`;
  eventText.value = "";
  popup.classList.remove("hidden");
}

function closePopup() {
  popup.classList.add("hidden");
}

function saveEvent() {
  const text = eventText.value.trim();
  if (!text) return;

  const events = JSON.parse(localStorage.getItem("events")) || {};
  if (!events[selectedDate]) {
    events[selectedDate] = [];
  }
  events[selectedDate].push(text);
  localStorage.setItem("events", JSON.stringify(events));
  closePopup();
  renderCalendar();
}

function getEventsForDate(dateStr) {
  const events = JSON.parse(localStorage.getItem("events")) || {};
  return events[dateStr] || [];
}

renderCalendar();