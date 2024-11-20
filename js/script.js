let countryData = [];
let body = "";

fetch(`https://restcountries.com/v3.1/all`)
  .then((res) => res.json())
  .then((data) => {
    countryData = data; 
    displayCountries(countryData);
  });

  function displayCountries(countries) {
    body = ""; 
  
    countries.forEach((element) => {
      body += `
        <div class="col">
        <div class="card shadow-sm" data-aos="flip-left">
        <img src="${element.flags.png}" alt="">
        <div class="card-body">
            <h5 class="card-text">${element.name.common}</h5>
            <h5 class="card-text">Capital : ${element.capital}</h5>
            <h5 class="card-text">Region : ${element.region}</h5>
            <h5 class="card-text">Population : ${element.population}</h5>
            <a href="${element.maps.googleMaps}" class="btn btn-primary">View on Google Map</a>
            <div class="d-flex justify-content-between align-items-center">
            </div>
        </div>
        </div>
        </div> 
        `;
      console.log(element);
    });
    document.getElementById("row").innerHTML = body;
  }

  function searchCountry() {
    const searchInput = document.getElementById("country-input").value.toLowerCase(); 
  
    const filteredCountries = countryData.filter(country =>
      country.name.common.toLowerCase().includes(searchInput)
    );
    
    displayCountries(filteredCountries);
  }

