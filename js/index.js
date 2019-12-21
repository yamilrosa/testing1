import fetchJsonp from 'fetch-jsonp';
import { Client } from "@petfinder/petfinder-js";


if (module.hot) {
    module.hot.accept()
  }

  const petForm = document.querySelector('#pet-form');

  petForm.addEventListener('submit', fetchAnimals);

  //Fetch Animals From API
  function fetchAnimals(e) {
    e.preventDefault();
    
    //Get User Input
    const animal = document.querySelector('#animal').value;
    const zip = document.querySelector('#zip').value;

    console.log(animal);
    console.log(zip)

    //API Key & API sS
    const apiKey = 'Jl0MmQgBZsoEUzoCQTGrlsedOmu1qscsN1XqfiuoKDIyRE6Ruc';
    const apiSecret = 'NAMylQ5UTbSRJYD0xJD6MYGONSsScruhPjPxeyA7'


    //Fetch Pets
    const client = new Client({apiKey: apiKey, secret: apiSecret});

    client.animal.search({type: animal})
      .then(response => {
      // Do something with resp.data.animals
        console.log(response.data.animals)
        showAnimals(response.data.animals)
       
      })
      .catch(function (error) {
          // Handle the error
          console.log(error)
      });







    //Fetch Pets
    // fetchJsonp(`http://api.petfinder.com/pet.finder?format=json&key=${key}&animal=${animal}&location=${zip}&callback=callback`, {
    //   jsonpCallbackFunction: 'callback'
    // })
    // .then(res => res.json())
    // .then(data => console.log(data))
    // .then(err => console.log(err))

  }

function showAnimals(pets) {
  const results = document.querySelector('#results');
  
  //Clear First 
  results.innerHTML = "";

  //Loop Through Pets 
  pets.forEach(pet => {
    if(pet.photos.length){
       results.innerHTML += `
       <div class="row">
      <div class="col-sm-6">
        <h4 class="mb4">${pet.name.toUpperCase()}</h4>
        <img class="img-fluid" src=${pet.photos[0]["medium"]}></img>
      </div>
    </div>`
    }
    console.log(pet)
    // results.innerHTML = `
    // <div class="row">
    //   <div class="col-sm-6">
    //     <h4>${pet.}</h4>
    //   </div>
    // </div>

    // <img src=${pet.photos[0]["medium"]}></img>
    // `
  })
}

