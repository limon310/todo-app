import './style.css';

// DOM Elements 
const taskInput = document.getElementById('taskInput') as HTMLInputElement;
const addTaskBtn = document.getElementById('addTaskBtn') as HTMLButtonElement;
const taskList = document.getElementById('taskList') as HTMLUListElement;

// add task
function addTask(): void {
    const taskValue: string = taskInput.value.trim();

    // empty value check
    if (taskValue === '') {
        alert('Please write something!');
        return;
    }

    // li created
    const li: HTMLLIElement = document.createElement('li');
    li.className = 'task-item';

    
    const taskSpan: HTMLSpanElement = document.createElement('span');
    taskSpan.className = 'task-text';
    taskSpan.innerText = taskValue;

    
    const btnContainer: HTMLDivElement = document.createElement('div');
    btnContainer.className = 'btn-container';

    // ১. edit button
    const editBtn: HTMLButtonElement = document.createElement('button');
    editBtn.className = 'action-btn edit-btn';
    editBtn.innerText = 'Edit';
    
    // edit button logic
    editBtn.addEventListener('click', () => {
        const currentText: string = taskSpan.innerText;
        const updatedText: string | null = prompt('Update your task:', currentText);
        
        if (updatedText !== null && updatedText.trim() !== '') {
            taskSpan.innerText = updatedText.trim();
        }
    });

    // ২. delete button
    const deleteBtn: HTMLButtonElement = document.createElement('button');
    deleteBtn.className = 'action-btn delete-btn';
    deleteBtn.innerText = 'Delete';
    
    // delete button logic
    deleteBtn.addEventListener('click', () => {
        taskList.removeChild(li);
    });

    
    btnContainer.appendChild(editBtn);
    btnContainer.appendChild(deleteBtn);

  
    li.appendChild(taskSpan);
    li.appendChild(btnContainer);
    

    taskList.appendChild(li);

  
    taskInput.value = '';
}

// mouse click
addTaskBtn.addEventListener('click', addTask);

// keyboard enter button press
taskInput.addEventListener('keypress', (event: KeyboardEvent) => {
    if (event.key === 'Enter') {
        addTask();
    }
});