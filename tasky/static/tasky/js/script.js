
function addTask(){
    console.log('event fired')
    const element = document.getElementsByClassName('add-task')
    const button = document.getElementsByClassName('add-task onclick')[0]
    element[0].outerHTML = '<input type="text" placeholder="Add your task"/>'
    button.style.display = 'block'
}

function downloadTodoList(){
    
    const elements = document.getElementsByClassName('download-btn format')
    for(i=0; i< elements.length; i++){
        elements[i].style.display = 'block'
    }
}