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
    const render = () => {
        let htmlString = "";
        for (const task of tasks) {
            htmlString += `
                <li class="list__item${task.done ? " list__item--done":"" }">
                ${task.content}
                </li>
        `;
        }
        document.querySelector(".js-taskList").innerHTML = htmlString;
    }
    const addNewTask = (newTaskContent) =>{
        tasks.push({
            content: newTaskContent,
        }); 
        render();
    };
    const onFormSubmit = ((event) =>{
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