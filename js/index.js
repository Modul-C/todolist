const appElement = document.getElementById("app")
// grab the input field element:
const todoInput = document.getElementById("note-input")
// grab the create note button:
const createNoteButton = document.getElementById("create-note-button")
// grab the todolist wrapper div element:
const todolistWrapper = document.querySelector(".wrapper-todolist")
// grab the error element:
const errorElement = document.querySelector(".form-error")

// local storage key:
const localStorageKey = "todolist"
// array containing all todolist items:
let todolistItems = []

// load items from localStorage:
todolistItems = JSON.parse(
  localStorage.getItem(localStorageKey)
)


// add click event listener to createNoteButton
createNoteButton.addEventListener("click", function() {
  // get the text from the input field:
  let inputText = todoInput.value
  // error check
  if (inputText.length < 2) {
    errorElement.textContent = "Please enter at least 2 characters."
    return
  }
  // reset error element to empty string:
  errorElement.textContent = ""

  // append new todolist item to todolistItems arrays
  todolistItems.push(inputText)

  // add item to local storage:
  localStorage.setItem(localStorageKey, JSON.stringify(todolistItems))

  // create todoItemWrapper
  const todoItemWrapper = document.createElement("div")
  todoItemWrapper.className = "todo-item"
  // create todoItem text
  const todoItemText = document.createElement("div")
  todoItemText.className = "todo-item-text"
  todoItemText.textContent = inputText
  // create todoItem delete button
  const todoItemDeleteButton = document.createElement("button")
  todoItemDeleteButton.textContent = "❌"

  // add event listener to the ❌ button: 
  todoItemDeleteButton.addEventListener("click", () => {
    todoItemWrapper.remove()
  })

  // append the todoItemText, todoItemDeleteButton to the todoItemWrapper
  todoItemWrapper.append(todoItemText, todoItemDeleteButton)

  // append todoItemWrapper to the todolistWrapper
  todolistWrapper.append(todoItemWrapper)
})

console.log(localStorage.getItem(localStorageKey))


// local storage:
//let todolistcount = 1
//localStorage.clear()

// let todoListArray = ["code", "testcode", "testmorecode"]

//console.log(todoListArray[1])

// convert Javascript array to JSON string:
// let todoListAsJSON = JSON.stringify(todoListArray)

// convert JSON to javascript object / array:
// let todoListAsArray = JSON.parse(todoListAsJSON)

// console.log(todoListAsArray)


// create item in local storage:
//localStorage.setItem("todolist", todoListArray)

// read contents from local storage:
//let temporaryStorage = localStorage.getItem("todolist")

// console.log(typeof temporaryStorage)










/*

// temporary counter:
let count = 0


// innerHTML problem #1: users can insert html tags, or even run javascript
// <img src="a@14@%^" onerror="alert('Hacked');">
// innerHTML problem #2: it removes any existing event listeners from all child-elements the container it is attached to

  todolistWrapper.innerHTML += `
    <div class="todo-item" id="todo-id-${count}">
      <div class="todo-item-text">
        ${inputText}
      </div>
      <button id="button-delete-${count}">❌</button>
    </div>`;

  // add event listener to the ❌ button:
  const todoButtonDelete = document.getElementById(`button-delete-${count}`)
  todoButtonDelete.addEventListener("click", function() {
    const todoItemElement = document.getElementById(`todo-id-${count}`)
    todoItemElement.remove()
  })
*/