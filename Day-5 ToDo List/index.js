function init() {
  const today = new Date();
  const dd = today.getDate(); //returns current date
  const currentDay = getDayOfWeek(today); //returns the current day
  const currentMonth = getMonthName(today); //returns current month

  const dateHTML = document.getElementById("date-date");
  dateHTML.textContent = dd; //sets the current date

  const dayHTML = document.getElementById("date-day");
  dayHTML.textContent = currentDay; //Sets the current day

  const monthHTML = document.getElementById("date-month-year");
  monthHTML.textContent = currentMonth + ' ' + today.getFullYear(); //Sets the month and the year
}

function getDayOfWeek(date) {
  const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  return days[date.getDay()];
}

function getMonthName(date) {
  const months = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
  return months[date.getMonth()];
}

window.onload = init;

const tasks = document.querySelector('.todo-tasks');
const input = document.querySelector('.add-task button');

input.addEventListener('click', () => { //Adds a the users input as a new task in the html, whe the buttons is pressed 
  const userInput = document.querySelector('.add-task input').value;
  if (userInput === '') return;

  const div = `
      <div class="task">
        <input type="checkbox" id="checkbox">
        <p class="task-text"> ${userInput}</p>
        <button class="delete-button"><i class="fa-solid fa-trash"></i></button>
      </div>
    `;
  tasks.innerHTML += div;
});

tasks.addEventListener('click', (event) => { //if the delete button is pressed removes the task
  if (event.target.classList.contains('delete-button')) {
    event.target.parentNode.remove();
  }
});

tasks.addEventListener('change', (event) => { //When the check box is pressed cross out the text and plays a small animation
  if (event.target.type === 'checkbox') {
    const taskText = event.target.nextElementSibling;
    if (event.target.checked) {
      taskText.style.transition = '0.5s';
      taskText.style.textDecoration = 'line-through';
      taskText.style.textDecorationColor = '#fff';
    } else {
      taskText.style.textDecoration = 'none';
    }
  }
});

tasks.addEventListener('mouseover', (event) => { //when the user mouse is over a task the delete and check box appears
  const task = event.target.closest('.task');
  if (task) {
    hideAll();
    task.querySelector('.delete-button').style.opacity = 1;
    task.querySelector('input[type="checkbox"]').style.opacity = 1;
  }
});

tasks.addEventListener('mouseleave', (event) => { //when the users mouse leaves the task hide buttons and check box
  hideAll();
});

function hideAll()
{
  //when the users mouse leaves the task hide buttons and check box
  tasks.querySelectorAll('.delete-button').forEach((button) => button.style.opacity = 0);
  tasks.querySelectorAll('input[type="checkbox"]').forEach((checkbox) => checkbox.style.opacity = 0);
}