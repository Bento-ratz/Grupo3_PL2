import listaUtilizadores from 'utilizadores.js';

if(!localStorage.getItem('utilizadores')){

    localStorage.setItem("utilizadores", JSON.stringify(listaUtilizadores));
   
}
