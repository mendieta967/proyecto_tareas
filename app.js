const input = document.getElementById('ingresar-tarea')
const boton = document.querySelector('button')
const listaDeTareas = document.getElementById('lista-tareas')

// Función para crear y agregar una tarea a la lista
function crearTarea(textoTarea) {
    //crear tarea
    let tareaNueva = document.createElement('div')
    tareaNueva.classList.add('tarea');

    //texto ingresado por el usuario
    let texto = document.createElement('p')
    texto.innerText = textoTarea
    tareaNueva.appendChild(texto);

    //crear y agregar el contenedor de los iconos
    let iconos = document.createElement('div')
    iconos.classList.add('iconos')
    tareaNueva.appendChild(iconos);

    //iconos
    let completar = document.createElement('i')
    completar.classList.add('bi', 'bi-check-circle-fill', 'icono-completar');
    completar.addEventListener('click', completarTarea)

    let eliminar = document.createElement('i')
    eliminar.classList.add('bi', 'bi-trash3-fill', 'icono-eliminar');
    eliminar.addEventListener('click', eliminarTarea)

    iconos.append(completar, eliminar);

    //agregar tarea nueva a la lista
    listaDeTareas.appendChild(tareaNueva)
}

function agregarTarea() {
    if (input.value) {
        crearTarea(input.value)
        //limpiar el campo de entrada
        input.value = ''
    } else {
        alert('Ingresa una tarea esperancita')
    }
}

function completarTarea(e) {
    let tarea = e.target.parentNode.parentNode
    tarea.classList.toggle('completada');
}

function eliminarTarea(e) {
    let tarea = e.target.parentNode.parentNode
    tarea.remove();
}

// Agregar tareas predeterminadas al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    const tareasPredeterminadas = [
        'Lavar la ropa',
        'Barrer la casa',
        'Sacar a pasear a las perras',
        'cocinar cosas ricas'
    ];
    tareasPredeterminadas.forEach(tarea => crearTarea(tarea));
});

boton.addEventListener('click', agregarTarea)
input.addEventListener('keydown', (e) => {
    if(e.key === 'Enter'){
        agregarTarea();
    }
})
