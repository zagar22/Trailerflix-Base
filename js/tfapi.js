//La lógica de AJAX va aquí
/**
    1- Instancianoms el objeto en una const
    2- Llamamos al metodo a utilizar ejemplo GET, seguido a la URL
    3- Podemos o no definir un timeout a travez de la propiedad homonima en milisegundos
    4- Invocamos al metodo send() que llama la peticion de datos remotos
    5- Activamos el addEventListener() para escuchar el evento "load"
    6- Nos ponemos a escuchar la propiedad status = 200 y la propiedad readyState = 4
    7- Los datos se almacenan dentro de la propiedad XHR.response
    8- Convertir los datos a un formato JSON 
    9- Interactuamos con ellos de la forma que consideremos necesaria
       Investigar Libreria Axios
 */

const obtengoContenido = (URL)=>{
    const xhr = new XMLHttpRequest()
          xhr.open("GET", URL, true)
          xhr.timeout = 3000
          xhr.send()
          xhr.addEventListener("load", ()=>{
              console.log(xhr.readyState)
              if(xhr.readyState == 4 && xhr.status == 200){
                  contenidoJSON = JSON.parse(xhr.response)
                  contenidoJSON.forEach(contenido => {
                  cardsAmostrar +=  retornoCardContenido(contenido)                   
                  })
                  contenidoDOM.innerHTML = cardsAmostrar
              }
          }) 
          xhr.addEventListener("error", (error)=>{
            contenidoDOM.innerHTML = retornoCardError()
            xhr.abort()
          })
          cargandoDOM.innerHTML = ''
}


//ejemplo de agregar hipérvinculos
//Ventana = (URL, Destino)=>{
//cument.createElement("a")
//a.target = Destino
//a.href = URL
//a.click()
//
//
//
//
//lector("#nuevaVentana").addEventListener("click", abrirNuevaVentana("detail.//