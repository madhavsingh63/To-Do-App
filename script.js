const inputText = document.querySelector("#input-box");
const listContainer = document.querySelector(".list-container");

showTask();
function addTask(){
    if(inputText.value === ''){
        alert("You must write something!");
    }
    else{
        let li = document.createElement('li');
        li.innerText = inputText.value;
        listContainer.appendChild(li);

        let span = document.createElement('span');
        span.innerText = "\u00d7"
        li.appendChild(span);
    }
    inputText.value = '';
    saveData();
}

listContainer.addEventListener('click',  function(e)  {
    if(e.target.tagName === "LI"){
        e.target.classList.toggle('checked');
        saveData();
    }
    else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
        saveData();
    }
}, false);





function saveData(){
    localStorage.setItem('data', listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem('data');
}