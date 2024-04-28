let search = document.querySelector("#search");
let btn = document.getElementById("addBtn")
let selection = document.querySelector(".task1 img")

search.addEventListener('click', () => {
  console.log("search was clicked");
}
)

btn.addEventListener('click' , () => {
   console.log("Add button was clicked");
   
}
)

selection.addEventListener('click', () => {
    console.log("selected");
    selection.src = "/img/checked.png"; 
}
)

addTask = () => {
    let tasks = search.value ;
    console.log(tasks);
}
