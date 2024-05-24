let todoform = document.querySelector(".todo")
let container = document.querySelector(".container")
let todo = JSON.parse(localStorage.getItem('todo')) || [];

todoform.addEventListener("submit" , (e) => {

    let todos = {
        title: e.target.title.value,
        id: Math.random(),
    }

    
    todo.push(todos)

    showtodoINUI(todo);

    e.preventDefault();
})

container.addEventListener("click" , () => {

if(e.target.classList.contains("delete-btn")) {
    const data = e.target.getAttribute("data-id")
    todo = todo.filter((todo) => todo.id !== data);
    localStorage.setItem("todo" , JSON.stringify(todo))
}

})



function showtodolistsINUI(Todoset){
    Todoset.forEach(item => {
        let div = document.createElement("div");
        div.classList.add(
        "w-[260px]" ,
        "h-[70px]",
        "rounded-[25px]",
        "p-[11px]",
        "flex" ,
        "justify-between" ,
        "bg-orange-300" ,
        "items-center" ,
        "ml-[70px] ",
        "relative " ,
        "top-[150px]", 
        "z-20",
            )
div.setAttribute("id", `${item.id}`);
div.innerHTML = `<h1 class="title">${item.title}</h1>`;
let clickBtn = document.createElement("div")
let deleteBtn = document.createElement("button");
deleteBtn.classList.add(
    "fa-solid" ,
    "fa-check" ,
    "check-btn" ,
);
let checkBtn = document.createElement("button")
checkBtn.classList.add(
    "fa-solid" ,
    "fa-trash" ,
    "delete-btn" ,
);
clickBtn.appendChild(checkBtn);
clickBtn.appendChild(deleteBtn);
div.appendChild(btnsDiv);
container.appendChild("div")
    });
}