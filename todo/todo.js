function ToDo() {
  let input_val = document.getElementById("input").value;
  if (input_val.length == 0) {
    alert("Field cannot be empty");
  } else {
    // creating element
    let todo_item = document.createElement("div");
    todo_item.innerHTML = `<span> ${input_val} </span> <input type='text'/> <button onclick='Edit(event)'>Edit</button> <button onclick="RemoVe()"> Remove </button>`;

    // adding class
    todo_item.classList.add("todo_item");

    //appending child
    document.querySelector(".todo-container").appendChild(todo_item);
  }

  document.getElementById("input").value = "";
}

function Edit(e) {
  let value = e.target.previousElementSibling.value;
  e.target.previousElementSibling.previousElementSibling.innerText = value;
}
// let a = 6;
// let b = 9;

// document.write(`the  sum of ${a} and ${b} is ${a+b} `);
