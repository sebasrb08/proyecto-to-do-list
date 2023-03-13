const divnew=document.querySelector('.agregado')
const pendientes=document.querySelector('.pendientes')
cont=0
pendientes.innerHTML=`tareas realizadas ${cont} y tareas pendientes ${cont}`
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
    cont++

})
agregado.addEventListener('click',(event)=>{
    if(event.target.className=='eliminar'){
        const papa = event.target.parentElement
        agregado.removeChild(papa)
        cont--
    }
})
