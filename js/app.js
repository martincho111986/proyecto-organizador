//TAREAS
const listas = {tareas: [], procesos: []}
let ulTareas = document.getElementById('ulTareas');
let ulRecordatorio = document.getElementById('ulRecordatorio');

let listarTareas =() =>{
    ulTareas.innerHTML = '';
    listas.tareas.forEach(function(item, index){
        console.log(item)
        ulTareas.innerHTML += `<li class="list-group-item m-2" id="listas">
        <a href="#" data-toggle="modal" data-target="#exampleModal" onclick="llenarModal(${index}, 'tareas')">${item.titulo}</a>
         <button class="btn btn-primary" onclick="pasarProceso(${index})"> + </button>
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
}
function listarNotas(){
    
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
}
//FIN TAREAS

//EN PROCESOS

let ulProcesos = document.getElementById('ulProcesos');

let listarProcesos = ()=>{
    ulProcesos.innerHTML ='';
        listas.procesos.forEach((item, index)=>{
        ulProcesos.innerHTML += `<li class="list-group-item m-2" id="listas1">
         <button class="btn btn-primary" onclick="volverTareas(${index}, 'tareas')"></button>
         <a href="#" data-toggle="modal" data-target="#exampleModal" onclick="llenarModal(${index}, 'procesos')">${item.titulo}</a>  
         <button class="btn btn-primary" onclick="pasarCompletados(${index})"></button>
         </li>`;
    })
}
listarProcesos();




const volverTareas = (index)=>{
    listas.tareas.push(listas.procesos[index]);
    listas.procesos.splice(index, 1);
    listarProcesos();
    listarTareas();
}

let pasarProceso = (index) =>{
    listas.procesos.push(listas.tareas[index]);
    listas.tareas.splice(index, 1);
    listarProcesos();
    listarTareas();
}
//MODAL


//FIN PROCESOS



// COMPLETADOS

let completados = [];
let ulCompletos = document.getElementById("ulCompletos");

let listaCompletados = () => {
    ulCompletos.innerHTML="";
    completados.forEach((item, i)=>{
    ulCompletos.innerHTML += `<li class="list-group-item m-2" id="listas2">
    <a href="#" >${item.titulo}</a>  
    <i class="fas fa-check"></i>
    </li>`
    
    })
}
listaCompletados();

let pasarCompletados = (i)=>{
    completados.push(listas.procesos[i]);
    listas.procesos.splice(i, 1);
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

// const lista = document.getElementById('listas');
// const lista1 = document.getElementById('listas1');
// const lista2 = document.getElementById('listas2');




// new Sortable(lista, {
//     group: 'shared', // set both lists to same group
//     animation: 150
// });

// new Sortable(lista1, {
//     group: 'shared',
//     animation: 150
// });

// new Sortable(lista2, {
//     group: 'shared',
//     animation: 150
// });
