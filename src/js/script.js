
var tasks = [];


const event1 = document.querySelector('#button').addEventListener("click", (e)=>{
    e.preventDefault();
    var tarefa = document.querySelector('#text').value;
    document.querySelector('.head-text input').value ="";
    AddTarefa(tarefa);
});



function AddTarefa(tarefa1) {
    nun = tasks.length;
    let newtasks = tasks.push({id: nun + 1, tarefa:tarefa1});
    showtarefa(tasks,newtasks,nun);
}

function showtarefa (tasks,index, nun) {

        let charItem = document.querySelector(".modelo").cloneNode(true);
        charItem.querySelector('.tare').innerHTML = tasks[nun].tarefa;
        charItem.querySelector('.posi').innerHTML = nun+1;
        charItem.querySelector('.delet').setAttribute('id',nun+1);
        charItem.querySelector('.edit').setAttribute('id',nun+1);
        charItem.querySelector(".body-tarefa").setAttribute('id',nun+1);
        document.querySelector('.body').append(charItem.querySelector('.body-tarefa'));  
        
}


function deletar(id) {
        console.log(id);

        tasks.splice(id,1);
        document.getElementById(`${id}`).remove()
}

function editar(id) {
    

}