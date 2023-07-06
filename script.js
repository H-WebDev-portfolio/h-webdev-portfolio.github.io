const proyectos = [

{
    titulo: 'E-Commerce',
    url: '/proyectos/h-e-commerce',
    imagen: '/img/e-commerce.png'
},

{
    titulo: 'Gestor de Finanzas',
    url: '/proyectos/h-easymoney',
    imagen: '/img/e-commerce.png'
}
];
const gridProyectos = document.querySelector('.grid-proyectos');
function mostrarProyectos(){
    proyectos.forEach(proyecto => {
        const div = document.createElement('div');
        div.classList.add('proyecto');
        div.innerHTML = `
        <h4>  <a href="${proyecto.url}">${proyecto.titulo}</a></h4>
        <img src="${proyecto.imagen}">
        
        `;
        gridProyectos.append(div);

    })
}
mostrarProyectos();