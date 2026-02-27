function addL (){   
    let input = document.getElementById("lInput");
    let task = input.value;

    if(task == ""){
        alert ("please enter a task!");
        return;
    }

    let li = document.createElement("li");
    li.textContent = task;

    let deleteBtn = document.createElement("Button");
    deleteBtn.textContent = "Delete";
    let editBtn = document.createElement("Edit");
    editBtn.textContent = "Edit";

    deleteBtn.onclick = function(){
        li.remove();
    };

    li.appendChild(deleteBtn);

    document.getElementById("lList").appendChild(li);

    input.value = "";
    
}