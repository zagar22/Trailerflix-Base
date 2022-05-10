//Variables varias a utilizar en el proyecto
let cardsAmostrar = ""
let contenidoJSON = []

const URL = `${window.location.origin}/js/trailerflix.json`
//Aquí podría ir una URL remota. Debemos generar una ficticia para provocar un error.

const contenidoDOM = document.querySelector("#contenido")
const cargandoDOM = document.querySelector("#cargando")