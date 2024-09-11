function add() {
    let taskInput = document.getElementById("get_list").value;

    if (taskInput.trim() === "") {
        alert("Please enter a task.");
        return;
    }

    // Get current date and time
    let currentDate = new Date();
    let formattedDate = currentDate.toLocaleDateString();
    let formattedTime = currentDate.toLocaleTimeString();

    // Create a new task div
    let taskDiv = document.createElement("div");
    taskDiv.className = "task";

    // Create a span for the task text
    let taskSpan = document.createElement("span");
    taskSpan.textContent = taskInput;

    // Create a span for the date and time
    let timeSpan = document.createElement("span");
    timeSpan.className = "task-time";
    timeSpan.textContent = `Added on: ${formattedDate} at ${formattedTime}`;

    // Create the "Done" button
    let doneButton = document.createElement("button");
    doneButton.textContent = "Done";
    doneButton.onclick = function() {
        taskSpan.classList.toggle("done-task");
        if(doneButton.textContent == "Not Done"){
            doneButton.textContent = "Done";
        }else{doneButton.textContent = "Not Done";}
        
    };

    // Create the "Delete" button
    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.onclick = function() {
        taskDiv.remove();
    };

    // Append everything to the task div
    taskDiv.appendChild(taskSpan);
    taskDiv.appendChild(timeSpan);
    taskDiv.appendChild(doneButton);
    taskDiv.appendChild(deleteButton);

    // Append the task div to the list
    document.getElementById("List").appendChild(taskDiv);

    // Clear the input field
    document.getElementById("get_list").value = "";
}

function clearList() {
    document.getElementById("List").innerHTML = "";
}