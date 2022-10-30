function getImage() {
 console.log("function called...");

 let data


 fetch('https://api.unsplash.com/photos/random', {
        method: 'GET',
        headers: {
            "Content-type": "application/json",
            "Authorization": "Client-ID WoQ1uG4s2WbJceUvu5yJkkCe3lFwmOQibGjOuJjBGko"
    }}).then(response => response.json())
    .then(json => {cargarImagen(json)})

}

function cargarImagen(pData){
    console.info(pData) 
  
    document.getElementById('my-image').src=pData.urls.regular;
}

     