const fs = require('fs');

let listadoPorHacer = [];

const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer);
    fs.writeFile('db/data.json',data,(err) =>{
        if(err) 
            throw new Error('Error al guardar la data',err);
    });
}

const cargarBd = () => {
    try {
        listadoPorHacer = require('../db/data.json');    
    } catch (error) {
        listadoPorHacer = [];
    }
};

const getListado = () =>{
    cargarBd();
    return listadoPorHacer;
};

const crear = ( descripcion ) => {
    cargarBd();

     let porHacer = {
         descripcion,
         completado: false
     };
     listadoPorHacer.push( porHacer );
     guardarDB( porHacer );
     return porHacer.descripcion;
};

const actualizar = (posicion,nuevaDescripcion,completado) => {
    cargarBd();
    let i = posicion;
    if(Number.isInteger(i)){
        if(i < listadoPorHacer.length){
            listadoPorHacer[i].descripcion = nuevaDescripcion;
            listadoPorHacer[i].completado = completado;
            console.log('Se actualiza tarea n° ',i,' - ',listadoPorHacer[i].descripcion);
            guardarDB();
            return true;
        }else{
            console.log('Tarea n°',i,' No existe');
        }
    }else{
        console.log('La posicion parametrizada no es un numero.');
    }
    return false;
    
};

const borrar = (posicion) => {
    cargarBd();
    if(Number.isInteger(posicion) && posicion<listadoPorHacer.length){
        console.log('Se borrara tarea',listadoPorHacer[posicion]);
        listadoPorHacer.splice(posicion,1);
        guardarDB();
        return true;
    }else{
        return false;
    }
}

module.exports = {
    crear,
    guardarDB,
    getListado,
    actualizar,
    borrar
}