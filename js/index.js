// oop
let form = document.querySelector('form');
let taskBox = document.querySelector(".task-box");
let numItem =document.querySelector(".num-item");




class Todo {
    constructor(task) {
        this.task = task;
    }
}

class UI {
    addTodo(todo) {
        let items = document.querySelectorAll(".item");
        let item = document.createElement('div');
        item.innerHTML = `
            <div class="cercl"></div>
            <p>${todo.task}</p>
            <img src="./images/icon-cross.svg" alt="cross" class='delete' />
        `;
        item.classList.add("item");
        taskBox.prepend(item);
        
        numItem.innerHTML = `${items.length + 1}`;
    }

    // Remove Todo 
    
    deleteTodo(delet) {
        if (delet.className === 'delete') {
            delet.parentElement.remove()
        }
    };

    // clear input field
    
    clearField() {
        document.getElementById('todo-value').value = '';
    };

}



form.addEventListener( 'submit' , (e) => {
    const task   = document.getElementById('todo-value').value;

    const todo = new Todo(task);
    const ui   = new UI();
    
    ui.addTodo(todo);
    ui.clearField();
    e.preventDefault();
});



taskBox.addEventListener('click' , (e) => {

    const ui = new UI();
    ui.deleteTodo(e.target);

    e.preventDefault();
})






// Dark and lighte mode

let btn = document.querySelector('.img-d-l');
let images = document.getElementById("img");
let bgImg = document.querySelector(".abs-img")
let store = localStorage.getItem('light-mode');
btn.onclick = function darkMode() {
    document.body.classList.toggle('light-mode')
    if ( document.body.classList.contains('light-mode')) {
        images.src = './images/icon-moon.svg';
        bgImg.src ='./images/bg-desktop-light.jpg';
    } else {
        images.src = './images/icon-sun.svg';
        bgImg.src ='./images/bg-desktop-dark.jpg';
    }
}