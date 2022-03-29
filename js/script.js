{
    const tasks = [
        
    ];

    const addNewTask = (newTaskContent) => {
        tasks.push({
            content: newTaskContent,
        });
        render();
    };
    const removeTask = (index) => {
        tasks.splice(index, 1);
        render();
    }

    const toggleDone = (index) => {
        tasks[index].done = !tasks[index].done;
        render();
    }

    const addEvents = () => {
        const removeButtons = document.querySelectorAll(".js-remove")
        removeButtons.forEach((removeButton, index) => {
            removeButton.addEventListener("click", () => {
                removeTask(index);
            });
        });
    
    const taskDoneButtons = document.querySelectorAll(".js-taskDone");
    taskDoneButtons.forEach((taskDoneButton, index) => {
        taskDoneButton.addEventListener("click", () => {
            toggleDone(index);
        });
    });
    }
    const clear = (taskInput) => {

        taskInput.value = "";
        taskInput.focus();
    }
    
    const render = () => {
        let htmlString = "";
        for (const task of tasks) {
            htmlString += `
                <li class="list__item"><button class="js-taskDone list__button">${task.done ? "✓" : ""}</button><span class="list__text${task.done ? " list__text--done" : ""}">${task.content}</span>
                <button class="js-remove list__button list__button--remove">🗑</button>
                </li>
        `;
        }
        document.querySelector(".js-taskList").innerHTML = htmlString;
        addEvents() 
}
    const onFormSubmit = ((event) => {
        event.preventDefault();
        const newTaskContent = document.querySelector(".js-newTask").value.trim();
        const taskInput = document.querySelector(".js-newTask")
        addNewTask(newTaskContent);
        clear(taskInput);
    })


    const init = () => {
        render()
        const form = document.querySelector(".js-form")
        form.addEventListener("submit", onFormSubmit);
        render();

    }

    init()
}