//Seleção de elementos 
const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const todoList= document.querySelector("#todo-list");
const editForm = document.querySelector("#edit-Form");
const editInput = document.querySelector("#edit-input ");
const cancelEditBtn = document.querySelector("#cancel-Edit");

//Funções
todoForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const inputValue = todoInput.value;

    if(inputValue){
        //save todo
        console.log(inputValue)
    }
})
