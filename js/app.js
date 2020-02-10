//TAREAS
const listas = {tareas: [], procesos: []}
JSON.parse(localStorage.getItem("listas"))
let ulTareas = document.getElementById('ulTareas');
let ulRecordatorio = document.getElementById('ulRecordatorio');

let listarTareas =() =>{
    ulTareas.innerHTML = '';
    listas.tareas.forEach(function(item, index){
        console.log(item)
        ulTareas.innerHTML += `<li class="list-group-item m-2" id="drag1" draggable="true" ondragstart="drag(event)">
        <a href="#" data-toggle="modal" data-target="#exampleModal" onclick="llenarModal(${index}, 'tareas')">${item.titulo}</a>
         
        </li>`;
        console.log(index);

    })
}
listarTareas();

function llenarModal(index, lista){
    console.log("modal actualizado")
    let tarea = listas[lista][index];
    document.getElementById("exampleModalLabel").innerText = tarea.titulo;
    
    saveChanges(index)
}
function saveChanges(indexTarea){
    let index = typeof indexTarea == 'undefined' ? event.target.dataset.id : indexTarea;
    let nota = document.querySelector("#textoModal").value;
    document.querySelector('#textoModal').value = "";
    ulRecordatorio.innerHTML ="";
    listas.tareas[index].notas.push(nota)
    listas.tareas[index].notas.forEach((item, i)=>{
        ulRecordatorio.innerHTML += item ? `<li>${item}</li>` : '';
    });
    document.querySelector("#botonRecordatorio").dataset.id = index;

    if(nota !== ""){
        
    }
}


let agregarTarea = ()=>{
    let inputText = document.getElementById('tareaInput').value;
    // const tarea = new Tarea(inputText,[]) para hacerlo orientado a objeto
    // tareas.push(tarea)
        if(inputText) {
        listas.tareas.push({
            titulo: inputText,

            notas: []
        });
        document.getElementById('tareaInput').value = '';
        listarTareas();
    }
    localStorage.setItem("listas", JSON.stringify(listas));
}
//FIN TAREAS

//EN PROCESOS

let ulProcesos = document.getElementById('ulProcesos');

let listarProcesos = ()=>{
    ulProcesos.innerHTML ='';
        listas.procesos.forEach((item, index)=>{
        ulProcesos.innerHTML += `<li class="list-group-item m-2" id="drag1" draggable="true" ondragstart="drag(event)">
         
         <a href="#" data-toggle="modal" data-target="#exampleModal" onclick="llenarModal(${index}, 'procesos')">${item.titulo}</a>  
         <button class="btn btn-primary" onclick="pasarCompletados(${index})"> > </button>
         </li>`;
    })
}
listarProcesos();




const volverTareas = (index)=>{
    listas.tareas.push(listas.procesos[index]);
    listas.procesos.splice(index, 1);
    localStorage.setItem("listas", JSON.stringify(listas));
    listarProcesos();
    listarTareas();
}

let pasarProceso = (index) =>{
    listas.procesos.push(listas.tareas[index]);
    listas.tareas.splice(index, 1);
    localStorage.setItem("listas", JSON.stringify(listas));
    listarProcesos();
    listarTareas();
}



//FIN PROCESOS



// COMPLETADOS

let completados = JSON.parse(localStorage.getItem("agregarCompletados")) || [];
let ulCompletos = document.getElementById("ulCompletos");

let listaCompletados = () => {
    ulCompletos.innerHTML="";
    completados.forEach((item, i)=>{
    ulCompletos.innerHTML += `<li class="list-group-item m-2" id="drag1" draggable="true" ondragstart="drag(event)">
    <a href="#" >${item.titulo}</a>  
    <i class="fas fa-check"></i>
    </li>`
    
    })
}
listaCompletados();

let pasarCompletados = (i)=>{
    completados.push(listas.procesos[i]);
    listas.procesos.splice(i, 1);
    localStorage.setItem("agregarCompletados", JSON.stringify(completados));
    localStorage.setItem("listas", JSON.stringify(listas));
    listarProcesos();
    listaCompletados();
}


//MODAL
// let texto = [];
// let ingresarTexto = document.getElementById('ingresarTexto');


// let listarTexto = ()=>{
//     texto.forEach(function(item, i){
//         console.log(item);
//         ingresarTexto.innerHTML = `<p>${item.titulo}</p>`; 
//     })
// }
// listarTexto();

// let saveChanges = (i)=>{
//     let textoModal = document.getElementById('textoModal').value;
//     texto.push(textoModal);
//     // debugger
//     document.getElementById('textoModal').value = '';

//     listarTexto();
// }




// drag and drop

// const lista = document.getElementById('ulTareas');
// const lista1 = document.getElementById('ulProcesos');
// const lista2 = document.getElementById('ulCompletos');




// Sortable.create(lista, {
//     group: 'listas',
//     ghostClass: 'blue-background-class',
//     animation: 150,
//     swap: true, // Enable swap plugin
// 	swapClass: 'highlight', // The class applied to the hovered swap item

    
// });

// Sortable.create(lista1, {
//     group: 'listas',
//     ghostClass: 'blue-background-class',
//     animation: 150,
//     swap: true, // Enable swap plugin
// 	swapClass: 'highlight', // The class applied to the hovered swap item

    
// });

// Sortable.create(lista2, {
//     group: 'listas',
//     ghostClass: 'blue-background-class',
//     animation: 150,
//     swap: true, // Enable swap plugin
// 	swapClass: 'highlight', // The class applied to the hovered swap item
	
    
// });

function allowDrop(ev) {
    ev.preventDefault();
  }
  
  function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }
  function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }
  
  function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
  }

  function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
  }

 


