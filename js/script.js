{
    const tasks = [
        // {
        //     content: "wstać",
        //     done: true,
        // },
        // {
        //     content: "zjeść śniadanie",
        //     done: false,
        // },
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

    const render = () => {
        let htmlString = "";
        for (const task of tasks) {
            htmlString += `
                <li class="list__item${task.done ? " list__item--done" : ""}"><button class=js-taskDone>Zrobione?</button>
                ${task.content}<button class="js-remove">Usuń</button>
                </li>
        `;
        }
        document.querySelector(".js-taskList").innerHTML = htmlString;
        addEvents() 
}
    const onFormSubmit = ((event) => {
        event.preventDefault();
        const newTaskContent = document.querySelector(".js-newTask").value.trim();
        addNewTask(newTaskContent);
    })


    const init = () => {
        render()
        const form = document.querySelector(".js-form")
        form.addEventListener("submit", onFormSubmit);
        render();

    }

    init()
}