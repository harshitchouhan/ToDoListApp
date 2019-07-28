loadEvents();

function loadEvents() {
  // Loads every element in the page
  document.querySelector("form").addEventListener("submit", submit);
  document.getElementById("clear").addEventListener("click", clearList);
  document.querySelector("ul").addEventListener("click", deleteOrTick);
}

// Submit data function
function submit(e) {
  e.preventDefault();
  let input = document.querySelector("input");
  if (input.value != "") addTask(input.value);
  input.value = "";
}

// add tasks
function addTask(task) {
  let ul = document.querySelector("ul");
  let li = document.createElement("li");
  li.innerHTML = `<span class="delete">×</span><input type="checkbox"><label>${task}</label>`;
  ul.appendChild(li);
  console.log(ul);
  document.querySelector(".taskBoard").style.display = "block";
}

function clearList(e) {
  // setting the ul innerHML to an empty string
  let ul = (document.querySelector("ul").innerHTML = "");
  document.querySelector(".taskBoard").style.display = "none";
}

// deleteTick
function deleteOrTick(e) {
  if (e.target.className == "delete") deleteTask(e);
  else {
    tickTask(e);
  }
}

// delete task
function deleteTask(e) {
  let remove = e.target.parentNode;
  let parentNode = remove.parentNode;
  parentNode.removeChild(remove);
}

// tick a task
function tickTask(e) {
  const task = e.target.nextSibling;
  if (e.target.checked) {
    task.style.textDecoration = "line-through";
    task.style.color = "#ff0000";
  } else {
    task.style.textDecoration = "none";
    task.style.color = "#2f4f4f";
  }
}
