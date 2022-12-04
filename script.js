let botonDado = document.querySelector(".botonDado");
    
botonDado.addEventListener("click", function(){
    location.reload();
})

botonDado.addEventListener("mouseover", function(){
    botonDado.classList.add("dinamico");   
})

botonDado.addEventListener("mouseout", function(){
    botonDado.classList.remove("dinamico");   
})