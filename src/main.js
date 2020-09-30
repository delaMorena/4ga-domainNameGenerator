/* DEPENDENCIAS estilo*/
require('./style.css')


window.onload = function() {
    let pronombre = ["nuestra","la","aquella"]
    let adjetivo = ["alucinante","intrigante","explosiva"]
    let nombre = ["vida","aventura","perra"]
    for (i = 0; i< pronombre.length; i++) {    
        for (j = 0; j < adjetivo.length; j++) {    
            for (k = 0; k < nombre.length; k++) {      
                let nuestraPagina = pronombre[i] + adjetivo[j] + nombre[k] + ".com";
                console.log(nuestraPagina);
            }
        }
    }
};