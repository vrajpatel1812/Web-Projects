const input = document.querySelector(".inputTask input");
const listContainer = document.querySelector(".list");

const addTask = () => {
    if(input.value === ''){
        alert("Please!! Enter Task")
    }else{
        let task = document.createElement('li');
        task.innerHTML = input.value;
        listContainer.appendChild(task);
        let span = document.createElement('span');
        span.innerHTML = "\u00d7";
        task.append(span)
    }
    
    input.value = "";
    saveData();
} 

listContainer.addEventListener('click', (event)=>{
    if(event.target.tagName === 'LI') {
        event.target.classList.toggle('checked');
        saveData();
    }else if(event.target.tagName === 'SPAN') {
        event.target.parentElement.remove()
        saveData();
    }
}, false)

const saveData = () => {
    localStorage.setItem('data', listContainer.innerHTML);
}

const displayData = () => {
    listContainer.innerHTML = localStorage.getItem('data');
}

displayData();