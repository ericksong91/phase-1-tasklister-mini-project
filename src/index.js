document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector('form')
    form.addEventListener('submit', (e) => {
      e.preventDefault()
      makeToDoList(e.target.task_toDo.value)
      form.reset()
  })
});

function makeToDoList(todo){
    let li = document.createElement("li")
    let delbtn = document.createElement("button")
    delbtn.textContent = 'x'
    delbtn.addEventListener('click', handleDel)
    li.textContent = `${todo} `
    li.appendChild(delbtn)
    document.querySelector('#tasks').appendChild(li)
}

function handleDel(e){
    e.target.parentNode.remove()
}
