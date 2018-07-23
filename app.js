const argv = require('./config/yargs').argv;
const porHacer = require('./por-hacer/por-hacer');
const colors = require('colors');

let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        
        console.log('Se ha creado la tarea : "',tarea,'"');
        break;

    case 'listar':
        console.log('Listar por hacer');
        
        const listado = porHacer.getListado();
        let cont = 0;
        console.log("==========POR HACER =========".green);
        for(let tarea of listado){
            if(argv.completado)
            let opcion=( argv.completado == 'true');
            if(typeof(opcion)!=='undefined'){
                let completado = tarea.completado;//+"";
                if(completado==opcion){
                    console.log('Tarea n°',cont);
                    console.log(tarea.descripcion);
                    console.log("=============================".green);
                }
            }else{
                console.log('Tarea n°',cont);
                console.log(tarea.descripcion);
                console.log('Estado:',tarea.completado);
                console.log("=============================".green);
            }
            
            cont++;
            
        }
        break;

    case 'actualizar':
        const actualizado = porHacer.actualizar(argv.posicion,argv.descripcion,argv.completado);    
        if(actualizado){
            console.log('Se ha actualizado correctamente la tarea.');
        }
        break;
    case 'borrar':
        console.log('Se desea borrar tarea n° ',argv.posicion);
        const borrar = porHacer.borrar(argv.posicion);
        if(borrar){
            console.log('Se ha borrado exitosamente la tarea n°',argv.posicion);
        }else{
            console.log('Ocurrio un error al borrar la tarea');
        }
        break;
    default:
        break;
}