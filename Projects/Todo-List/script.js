const form = document.getElementById('form')
const input = document.getElementById('input')
const todos = document.querySelector('.todos')

// Store data in local Storage

const todo = JSON.parse(localStorage.getItem('todos'))

if(todo) {
    todo.forEach(todo1 => addTodo(todo1))
}

form.addEventListener('submit', (e) => {
    e.preventDefault()

    addTodo()
})


form.addEventListener('submit', (e) => {
    e.preventDefault()

    addTodo()
})

function addTodo(todo) {
    let todoText = input.value

    if(todo){
        todoText = todo.text
    }
    
    if(todoText){
        const todoEl = document.createElement('li')

        if(todo && todo.completed){
            todoEl.classList.add('completed')
        }

        todoEl.innerText = todoText

        // For completed the task
        todoEl.addEventListener('click', () => {
            todoEl.classList.toggle('completed')
        })

        // for removing the task
        todoEl.addEventListener('contextmenu', (e) => {
            e.preventDefault() // for prevent from open inspect option

            todoEl.remove()
        })

        todos.appendChild(todoEl)

        input.value = ''

        updateLS()
    }
}

// for saving item in local Storage

function updateLS() {
    todosEl = document.querySelectorAll('li')

    const todos = []

    todosEl.forEach(todoEl => {
        todos.push({
            text: todoEl.innerText,
            completed: todoEl.classList.contains('completed')
        })
    })

    localStorage.setItem('todos', JSON.stringify(todos))
}