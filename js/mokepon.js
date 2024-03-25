let ataqueJugador
let ataqueEnemigo
let vidasEnemigo = 3
let vidasJugador = 3
//Nota # 01
/*La funciona iniciarJuego, permite iniciar la selccion de las mascotas dentro del HTML y tambien las diferentes acciones que se puedan agrgar a estas.*/
function iniciarJuego(){
    let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
    sectionSeleccionarAtaque.style.display = 'none'

    let sectionReiniar = document.getElementById('reiniciar')
    sectionReiniar.style.display = 'none'

    let botonMascotaJugador = document.getElementById('boton-mascota')
    botonMascotaJugador.addEventListener('click', seleccionaMascotaJugador)

    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.addEventListener('click', ataqueFuego)
    let botonAgua = document.getElementById('boton-agua')
    botonAgua.addEventListener('click', ataqueAgua)
    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.addEventListener('click', ataqueTierra)

    let botonReiniciar = document.getElementById('boton-reiniciar')
    botonReiniciar.addEventListener('click',reiniciarJuego)
}
//Nota # 02
/*La funcion seleccionarMascotaJugador, permite manipular el DOM del HTML, para poder ver los cambio realizados segun los botones colocados en el HTML y poder definir las opciones seleccionadas.*/
function seleccionaMascotaJugador(){
    //Nota #13
    /*Desde la linea 29 hasta la linea 33 lo que hacer es esconder en el HTML la opcion de esconder pelear, esto para no pueda pelear sin tener que escoger una mascota primer, una vez escoge la mascoata esconde la opcion de escoger mascota y procede a mostrar el listado de ataques*/
    let sectionSeleccionarMascota = document.getElementById('seleccionar-mascota')
    sectionSeleccionarMascota.style.display = 'none'

    let sectionReiniar = document.getElementById('reiniciar')
    sectionReiniar.style.display = 'none'
    let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
    sectionSeleccionarAtaque.style.display = 'block'

    let inputHipodoge = document.getElementById('hipodoge')
    let inputCapipepo = document.getElementById('capipepo')
    let inputRatiguella = document.getElementById('ratigueya')
    let spanMascotaJugador = document.getElementById('mascota-jugador')
    
    if(inputHipodoge.checked){
        spanMascotaJugador.innerHTML = 'Hipodoge'
        alert('Seleccionaste a Hipodoge')
    }else if(inputCapipepo.checked){
        spanMascotaJugador.innerHTML = 'Capipepo'
        alert('Selccionaste a Capipepo')
    }else if(inputRatiguella.checked){
        spanMascotaJugador.innerHTML = 'Ratigueya'
        alert('Selccionaste a Ratigueya')
    }else{
        alert('Seleccionar un Mokepon')
    }

    seleccionarMascotaEnemigo()
}
//Nota # 03
/*La funcion seleccionarMascotaEnemigo, esta funcion permite selccionar la mascota del enemigo, esto es de manera aleatoria.*/
function seleccionarMascotaEnemigo(){
    let mascotaAleatoria = aleatorio(1,3)
    let spanMascotaEnemigo = document.getElementById('mascota-enemigo')

    if(mascotaAleatoria == 1){
        //Hipodoge
        spanMascotaEnemigo.innerHTML = 'Hipodoge'
        alert('El enemigo selecciono a Hipodogue')
    }else if(mascotaAleatoria == 2 ){
        //Capipepo
        spanMascotaEnemigo.innerHTML = 'Capipepo'
        alert('El enemigo selecciono a Capipepo')
    }else if(mascotaAleatoria == 3){
        //Ratigueya
        spanMascotaEnemigo.innerHTMLRatiguella
        alert('El enemigo selecciono a Ratiguella')
    }
}
//Nota # 04
/*Las siguentes funciones ataquefuego, ataqueAgua y ataqueTierra, permite mostrara de manear visual que se estan atacando con las descriociones mencionasdas en cada funcion.*/
function ataqueFuego(){
    ataqueJugador = "Fuego"
    ataqueAleatorioEnemigo()
}
function ataqueAgua(){
    ataqueJugador = "Agua"
    ataqueAleatorioEnemigo()
}
function ataqueTierra(){
    ataqueJugador = "Tierra"
    ataqueAleatorioEnemigo()
} 
//Nota #05
/*Esta funcion permite generar una serie de numero aleatorion, los cuales seran utilizados dentro de lo otras funciones que se crearon o se crearan.*/
function aleatorio(min,max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}
//Nota #06 
/*Esta funcion permite iniciar los campos leyendo primer la estructura HTML para poder utulizar sus input dentro del JS.*/
window.addEventListener('load', iniciarJuego)
//Nota #07
/*Funcion encargada de realizar el ataque del enemigo, este es de manera aleatoria*/
function ataqueAleatorioEnemigo(){
    ataqueAleatorio = aleatorio(1,3)

    if(ataqueAleatorio == 1){
        ataqueEnemigo = 'Fuego'
    }else if(ataqueAleatorio == 2){
        ataqueEnemigo = 'Agua'
    }else if(ataqueAleatorio == 3){
    ataqueEnemigo = 'Tierra'
    }
    combate()
}
function combate(){
    let spanVidasJugador = document.getElementById('vidas-jugador')
    let spanVidasEnemigo = document.getElementById('vidas-enemigo')

    if(ataqueJugador == ataqueEnemigo){
        crearMensaje("EMPATE")
    }else if(ataqueJugador == 'Agua' && ataqueEnemigo == 'Fuego'){
        crearMensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    }else if(ataqueJugador == 'Fuego' && ataqueEnemigo == 'Tierra'){
        crearMensaje('GANASTE')
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    }else if(ataqueJugador == 'Tierra' && ataqueEnemigo == 'Agua'){
        crearMensaje('GANASTE')
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    }else{
        crearMensaje('Perdiste')
        vidasJugador--
        spanVidasJugador.innerHTML = vidasJugador
    }
    revisarVidas()
}
//Nota #08.
/*ESta funcion permite imprimir el mensaje de la batalla mokepon*/
function crearMensaje(resultado){
    let sectionsMensajes = document.getElementById('Mensajes')
    let parrafo = document.createElement('p')

    parrafo.innerHTML = 'Tu mascota ataco con ' + ataqueJugador + ', las mascotas del enemigo ataco con ' + ataqueEnemigo + ' - '+resultado

    sectionsMensajes.appendChild(parrafo)
}

//Nota #09
/*En esta funcion se valida la cantidad de vida que se tiene*/
function revisarVidas(){
    if(vidasEnemigo == 0){
        crearMensajeFinal("¡Felicitaciones Ganaste!")
    }else if(vidasJugador == 0){
        crearMensajeFinal("Lo siento perdiste :)")
    }

}
//Nota #10
/*En esta funcion lo que se hace es imprimir un mensaje en el HTML indicando si se ha perdido o ganado*/
function crearMensajeFinal(resultadoFinal){
    let sectionsMensajes = document.getElementById('Mensajes')
    let parrafo = document.createElement('p')

    parrafo.innerHTML = resultadoFinal
    sectionsMensajes.appendChild(parrafo)
//Nota #12
/*Desde la linea 156 hasta la 161 lo que se hace es desabilitar los botones de ataque por que ya se quedo sin vida el mokepon*/ 
    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.disabled = true
    let botonAgua = document.getElementById('boton-agua')
    botonAgua.disabled = true
    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.disabled = true

    let sectionReiniar = document.getElementById('reiniciar')
    sectionReiniar.style.display = 'block'

}

//Nota #11
/*En esta funcion lo que se hara sera reiniciar el juego , borrar el listado de combate y restaurar las vidas*/
function reiniciarJuego(){
    location.reload()
}