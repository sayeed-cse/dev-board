function taskFunc(id, titleId) {
    alert('Board Updated SuccessFully')
    TaskAssigned()
    const element = document.getElementById(id);
    element.disabled = true;
    TotalTaskDone();

    // showing in activity log
    const titleElement = document.getElementById(titleId);
    const title = titleElement.innerText;

    const date = new Date();
    const timeNow = date.toLocaleTimeString()

    const completedTasks = document.getElementById('Completed-tasks');
    completedTasks.innerHTML += `
    <div class="p-2 bg-sky-50 rounded-lg text-sm">
        <p>You have Complete The Task ${title} at ${timeNow}</p>
    </div>
    `

}

function TaskAssigned() {
    const taskAssigned = document.getElementById('task-assigned');
    const taskAssignedText = taskAssigned.innerText;
    const taskAssignedTextNum = parseInt(taskAssignedText);

    const newTaskAssigned = taskAssignedTextNum - 1;
    taskAssigned.innerText = '0' + newTaskAssigned;

    if (newTaskAssigned === 0) {
        alert('Congrates!!! You have completed all the current task');
    }
}

function TotalTaskDone() {
    const totalTaskDone = document.getElementById('total-task-done');
    const totalTaskDoneNum = parseInt(totalTaskDone.innerText);
    const newTotalTaskDone = totalTaskDoneNum + 1;
    totalTaskDone.innerText = newTotalTaskDone;
}


// reload page to clear prev data
function clearAll() {
    // window.location.href = './../index.html';
    const completedTasks = document.getElementById('Completed-tasks');
    completedTasks.innerHTML = '';
}

// today
const today = document.getElementById('today');

const date = new Date();
let day = date.toLocaleString('en-us', { weekday: 'short' });

const formattedDate = date.toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' }).replace(',', '');

today.innerHTML = `
<p class="font-medium text-gray-600">${day},</p>
<h5 class="font-bold">${formattedDate}</h5>
`;


function changeTheme() {
    const themeColor = ['bg-sky-100', 'bg-red-100', 'bg-green-100', 'bg-orange-100', 'bg-blue-100'];

    let randomColor = 0;
    let random = Math.round(Math.random() * 5);
    console.log(random);
    if (randomColor === random) {
        random = Math.round(Math.random() * 5);
    }
    else {
        randomColor = random;
        document.body.classList = themeColor[randomColor]

    }



    console.log(document.body.classList)
}