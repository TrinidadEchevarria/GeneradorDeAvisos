window.onload = function() {
    fetch('https://api.adviceslip.com/advice')
        .then(function(response){
            return response.json();
        }) 
        .then(function(data){
            let id = data.slip.id;
            let advice = data.slip.advice;
            document.querySelector('.tituloAviso').innerHTML += id;
            document.querySelector('.textoAviso').innerHTML = '"' + advice + '"';
        })
        .catch(error => console.log(error))
}
