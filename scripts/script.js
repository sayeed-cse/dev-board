function taskFunc(id){
    TaskAssigned()
    // console.log(id);
    const element = document.getElementById(id);
    element.disabled = true;
    TotalTaskDone()
}

function TaskAssigned(){
    const taskAssigned = document.getElementById('task-assigned');
    const taskAssignedText = taskAssigned.innerText;
    const taskAssignedTextNum = parseInt(taskAssignedText);
    
    const newTaskAssigned = taskAssignedTextNum -1;
    taskAssigned.innerText = '0'+ newTaskAssigned
}

function TotalTaskDone(){
    const totalTaskDone = document.getElementById('total-task-done');
    const totalTaskDoneNum = parseInt(totalTaskDone.innerText);
    const newTotalTaskDone = totalTaskDoneNum +1;
    totalTaskDone.innerText = newTotalTaskDone;
}