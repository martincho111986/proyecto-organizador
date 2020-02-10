let tareas =JSON.parse( localStorage.getItem("tareas")) || [];
let ulTarea = document.getElementById('ulTarea');
let listarTarea = () => {
    console.log(tareas)
    ulTarea.innerHTML = '';
    tareas.forEach((tarea, i) =>{
       console.log(tarea,i);
       ulTarea.innerHTML += `
        <li>
            <a href="" data-toggle="modal" data-target="#exampleModal" onclick="llenarModal(${i})">${tarea.titulo}</a>
            <button class="btn btn-primary" onclick ="agregarEnProgreso(${i})"> Next <i class="fas fa-arrow-alt-circle-right"></i>  </button>
        </li>`;
    })
}
function llenarModal(index){
    let ulRecordatorio = document.querySelector("#ulRecordatorio");
    let tarea = tareas[index];
    document.getElementById("exampleModalLabel").innerText = tarea.titulo;
    tarea.notas.forEach((item, i) => {
        ulRecordatorio.innerHTML += `<li>${item}</li>`;
    })
    document.querySelector("#btnRecordatorio").dataset.id = index;
}
function agregarRecordatorio(){
    let index = event.target.dataset.id;
    let nota = document.querySelector("#inputRecordatorio").value
    tareas[index].notas.push(nota);
}
let agregarTarea = () =>{
    let tareaAgregada = document.getElementById('inpuTarea').value;
    tareas.push({ 
        titulo: tareaAgregada,
        notas: []
    });
    localStorage.setItem("tareas", JSON.stringify(tareas));
    listarTarea();
}
let enProgreso =JSON.parse( localStorage.getItem("enProgreso")) || [ ];
let ulEnProgreso = document.getElementById('ulEnProgreso');
let agregarEnProgreso = (index) =>{
    enProgreso.push(tareas[index]);
    tareas.splice(index,1);
    localStorage.setItem("enProgreso", JSON.stringify(enProgreso));
    localStorage.setItem("tareas", JSON.stringify(tareas));
    listarTarea();
    listarEnprogreso();
}
let  listarEnprogreso = () => {
    ulEnProgreso.innerHTML = '';
    enProgreso.forEach(function(tareas,i) {
      console.log(tareas,i);                                                            
      ulEnProgreso.innerHTML += `<li> <button class="btn btn-info" onclick="regresarATareas(${i})"> To return  <i class="fas fa-arrow-alt-circle-left"></i> </button> ${tareas.titulo} <button class="btn btn-primary" onclick = "agregarACompletados(${i})"> Next <i class="fas fa-arrow-alt-circle-right"></i>  </button> </li> `;
    
    })
}
let regresarATareas = (index) =>{
    tareas.push(enProgreso[index]);
    enProgreso.splice(index,1);
    localStorage.setItem("enProgreso", JSON.stringify(enProgreso));
    localStorage.setItem("tareas", JSON.stringify(tareas));
    listarTarea();
    listarEnprogreso();
}
let completados =  JSON.parse(localStorage.getItem("agregarACompletados")) || [];
let ulCompletados = document.getElementById('ulCompletados');
let agregarACompletados = (index) => {
    completados.push(enProgreso[index]);
    enProgreso.splice(index,1);
    localStorage.setItem("agregarACompletados",JSON.stringify(completados));
    localStorage.setItem("enProgreso", JSON.stringify(enProgreso));
    listarTarea();   
    listarEnprogreso();
    listarCompletados();
}
let listarCompletados = (i) => {
    ulCompletados.innerHTML = '';
    completados.forEach(function(enProgreso,index){
         console.log(enProgreso,i)
         ulCompletados.innerHTML += `<li> ${enProgreso} <button onclick = "regresarEnProgreso(${i})"> <i class="far fa-check-circle"></i></buttton> </li>  `;
    })
}
let regresarEnProgreso = () => {
    enProgreso.push(completados[i]);
    completados.splice(index,1);
    listarTarea();
    listarEnprogreso();
     listarCompletados();
}
listarTarea();
listarEnprogreso();
listarCompletados();