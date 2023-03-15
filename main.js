const divnew=document.querySelector('.agregado')
const pendientes=document.querySelector('.pendientes')
let cont3=0
let cont2=0
pendientes.innerHTML=`Tareas realizadas ${cont2} y tareas pendientes ${cont3}`

agregar.addEventListener('click',()=>{
    const divnew2 =document.createElement('div')
    const eliminar2=document.createElement('button')
  
    eliminar2.className='eliminar'
    eliminar2.style.backgroundImage='url(./imagenes/basura.svg)'
    divnew2.style.backgroundColor='white'
    divnew2.className='tarea2'
    divnew2.textContent=tarea.value
    divnew.append(divnew2)
    divnew2.append(eliminar2)
    cont3++
    pendientes.innerHTML=`Tareas realizadas ${cont2} y tareas pendientes ${cont3}`


})
agregado.addEventListener('click',(event)=>{
    if(event.target.className=='eliminar'){
        const papa = event.target.parentElement
        agregado.removeChild(papa)
        cont2++
        cont3--
        pendientes.innerHTML=`Tareas realizadas ${cont2} y tareas pendientes ${cont3}`
    }
})
tarea.addEventListener('click',()=>{
    tarea.value=''
})