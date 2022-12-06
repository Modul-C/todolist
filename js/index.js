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

// || offers an alternative way to declare and conditionally assign a variable (see comments below all code, lines: 80+ for more info)
let todolistItems = JSON.parse( localStorage.getItem(localStorageKey) ) || []

// loop through todolistItems array and create todolist item html elements for each of them
todolistItems.forEach((todoItem) => {
  createTodoListItem(todoItem)
})

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

  // create an object with an itemname and a unique id
  const newTodoItem = {itemName: inputText, id: Date.now()}
  // append new todolist item to todolistItems arrays
  todolistItems.push(newTodoItem)

  // add item to local storage:
  localStorage.setItem(localStorageKey, JSON.stringify(todolistItems))

  // create html elements for the new todolist item
  createTodoListItem(newTodoItem)
  
})

// creates html elements for a new todolist item
function createTodoListItem(todoItem) {
  // create todoItemWrapper
  const todoItemWrapper = document.createElement("div")
  todoItemWrapper.className = "todo-item"
  // create todoItem text
  const todoItemText = document.createElement("div")
  todoItemText.className = "todo-item-text"
  todoItemText.textContent = todoItem.itemName
  // create todoItem delete button
  const todoItemDeleteButton = document.createElement("button")
  todoItemDeleteButton.textContent = "❌"

  // add event listener to the ❌ button: 
  todoItemDeleteButton.addEventListener("click", () => {
    todoItemWrapper.remove()

    // remove item matching "todoText" from todolistItems array: (see lines 98 for a more readable longer version of the same code as below line)
    todolistItems = todolistItems.filter(todoListItem => todoListItem.id !== todoItem.id)
    // update local storage:
    localStorage.setItem(localStorageKey, JSON.stringify(todolistItems))
  })

  // append the todoItemText, todoItemDeleteButton to the todoItemWrapper
  todoItemWrapper.append(todoItemText, todoItemDeleteButton)
  // append todoItemWrapper to the todolistWrapper
  todolistWrapper.append(todoItemWrapper)
}





// Explanation about this code: let todolistItems = JSON.parse( localStorage.getItem(localStorageKey) ) || []

// As mentioned during lecture, that code does exactly the same thing as this code would:

// first declare an empty array:
// let todolistItems = []
// then set the array to data from local storage:
// let todolistItems = JSON.parse( localStorage.getItem(localStorageKey) )
// check if data from localstorage was empty, if it was set it back to an empty array:
// if (todolistItems == null) todolistItems = []

// The reason this works is because the || checks if the statement on the left side is falsy, and if it is it will use whatever is on the right side
// console.log(false || "something") // will show "something"
// console.log(false || "") // will show <empty string>
// console.log(true || []) // will show true

// for a technical explanation see here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_OR

/*
todolistItems = todolistItems.filter(function(todoListItem) {
  if (todoListItem.id !== todoItem.id) return true
  else return false
})
*/