document.addEventListener("DOMContentLoaded", function(){
    let tasks = [];


    function displayTask() {
        const list = document.getElementById('list-task');
        list.innerHTML = "";

        tasks.forEach((task, i) => {
            const li = document.createElement("li");
            li.textContent = task+" ";

            const btn = document.createElement("button");
            btn.textContent = "X";
            btn.addEventListener("click", () => removeTask(i));

            li.appendChild(btn);
            const btn2 = document.createElement("button");
            btn2.textContent = "✔";
            btn2.addEventListener("click", () => taskDone(list, i))
            li.appendChild(btn2);
            list.appendChild(li);
        });
    }

    function taskDone(list, i){
        list.children[i].style.color = "green";
        saveTask();
    } 


    function addTask(){
        let taskInput = document.getElementById("task");
        if (taskInput.value === ""){
            alert("Cannot add an empty task.")
            return;
        }
        tasks.push(taskInput.value);
        taskInput.value = "";
        saveTask();
        displayTask();
    }

    function removeTask(i){
        tasks.splice(i, 1);
        saveTask();
        displayTask();
    }

    function clearTask(){
        tasks.length = 0;
        saveTask();
        displayTask();
    }

    function saveTask(){
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }

    function loadTasks(){
        if (localStorage.getItem('tasks') !== null){
            tasks = JSON.parse(localStorage.getItem('tasks'));
        }
    }


    loadTasks();
    displayTask();

    document.getElementById('task').addEventListener("keydown", function(event){
        console.log(event.key);
        if (event.key === "Enter"){
            addTask();
        }
    });

    document.getElementById('add-task').addEventListener("click", addTask)
    document.getElementById('clear').addEventListener("click", clearTask)
})

