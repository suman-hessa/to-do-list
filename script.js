let inputBox = document.querySelector(".search-bar input");
let listContainer = document.querySelector("#list");
let button = document.querySelector("#btn");

    inputBox.addEventListener("keypress", (e) => {
        if(e.key =="Enter"){
            e.preventDefault();
            button.onclick();
            console.log("enter button was pressed");
        }
    }
   , false );


function addTask(){
    if(inputBox.value === ''){
        console.log("input box cannot be left empty");
    }
    else{
       const list = document.createElement("li");
       listContainer.appendChild(list);
       let listItem = document.createTextNode(inputBox.value);
       list.appendChild(listItem);       
       let span = document.createElement("span");
       span.innerHTML = "\u00d7";
       list.appendChild(span);
    }
    inputBox.value = '';
    saveData();
}

listContainer.addEventListener('click', (e) => {
    let target = e.target.tagName;
    console.log(target);
      if(target === 'LI'){
        e.target.classList.toggle("checked");
        saveData();
      }
      else if(target === 'SPAN'){
        e.target.parentElement.remove("li");
        saveData();
      }
}
, false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showData(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showData();
