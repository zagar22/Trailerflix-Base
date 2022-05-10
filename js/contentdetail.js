//Obtener el detalle de una peli o serie y mostrarlo

const detalleDOM = document.querySelector("#detalle")
const trailerDOM = document.querySelector("#trailer")
const btnVolver = document.querySelector("a")

document.addEventListener("DOMContentLoaded", ()=>{
    contenidoAlmacenado = localStorage.getItem("detalle")
    if (contenidoAlmacenado == null) {
        detalleDOM.innerHTML = retornoCardError()
        return
    }

    let contenido = JSON.parse(atob(contenidoAlmacenado))
    detalleDOM.innerHTML = retornoDetalle(contenido)
    contenido.trailer != undefined && contenido.trailer != ""
    ? trailerDOM.innerHTML = retornoTrailer(contenido.tailer)
    : trailerDOM.innerHTML = ""
})

btnVolver.addEventListener("click", ()=>{
    localStorage.removeItem("detalle")
    location.target = "_self"
    location.href = "index.html"
})