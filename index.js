function addingEventListener() {
const input = document.getElementById('button');

function showAlert(){
    alert('Alert was clicked ! ');
}
input.addEventListener('click',showAlert);
}

addingEventListener();