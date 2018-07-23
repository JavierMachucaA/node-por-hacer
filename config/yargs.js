const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Se desea crear un por hacer'
}

const posicion = {
    demand: true,
    alias: 'p',
    desc: 'Posicion en la cual se ubica la tarea a actualizar'
}

const completado = {
    alias: 'c',
    desc: 'Marca como completado'
}

const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', {
        descripcion
    })
    .command('actualizar', 'actualizar por hacer', {
        posicion,
        descripcion,
        completado
    })
    .command('borrar', 'Permite borrar una tarea por hacer', {
        posicion
    })
    .command('listar','Se desea listar las tareas por hacer',{
        completado
    })
    .help()
    .argv;
module.exports = {
    argv
}
