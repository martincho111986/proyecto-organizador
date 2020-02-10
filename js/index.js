class Tarea{
    constructor(titulo){
        this.titulo = titulo;
        this.notas = [];
    }
}

// const tarea = new Tarea (InputText, [])
// tareas.push(tarea)
let tareas = [];
let ulTareas = document.getElementById('ulTareas');
let ulRecordatorio = document.getElementById('ulRecordatorio');

let listarTareas =() =>{
    ulTareas.innerHTML = '';
    tareas.forEach(function(item, index){
        console.log(item)
        ulTareas.innerHTML += `<li class="list-group-item m-2 listas">
        <a href="#" data-toggle="modal" data-target="#exampleModal" onclick="llenarModal(${index})">${item.titulo}</a>
         <button class="btn btn-primary" onclick="pasarProceso(${index})"> + </button>
        </li>`;

    })
}
listarTareas();

function llenarModal(index){
    
    let tarea = tareas[index];
    document.getElementById("exampleModalLabel").innerText = tarea.titulo;
    ulRecordatorio.innerHTML ="";
    tarea.nota.forEach((item, i)=>{
        ulRecordatorio.innerHTML += `<li>${item}</li>`;
        
    });
    document.querySelector("#botonRecordatorio").dataset.id = index;
}
function saveChanges(){
    let index = event.target.dataset.id;
    let nota = document.querySelector("#textoModal").value
    tareas[index].nota.push(nota);
   
}

let agregarTarea = ()=>{
    let inputText = document.getElementById('tareaInput').value;
    
        if(inputText) {
            const tarea = new Tarea(inputText) //para hacerlo orientado a objeto
            tareas.push(tarea)
        document.getElementById('tareaInput').value = '';
        listarTareas();
    }
}

//EN PROCESOS

let procesos = [];
let ulProcesos = document.getElementById('ulProcesos');
