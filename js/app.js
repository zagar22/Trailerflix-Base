document.addEventListener("DOMContentLoaded", ()=> {
   setTimeout(() => {
      obtengoContenido(URL)
   }, 1000);
})

const verDetalle = (id)=> {
   //Obtener la info de una peli o serie, guardarla en LS y redireccionar a detail.html
   const seleccion = contenidoJSON.find(c => c.id == id)
   localStorage.setItem("detalle", btoa(JSON.stringify(seleccion)))
   location.href="detail.html"
}