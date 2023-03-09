const search=document.getElementById("search");
const countries=document.getElementById("Countries");
const url="https://restcountries.com/v3.1/all";


async function fetchapi(){
    const response=await fetch(url);
    var data=await response.json();
    console.log(data);
    data.forEach((element)=>{
        showcCountries(element);
    });
}

fetchapi();

function showcCountries(data){
    const country=document.createElement("div");
    country.classList.add("country");
    country.innerHTML=`<div class="country-show">
    <img src="${data.flags.png}" alt="${data.flags.alt}"/>
    <h3>${data.name.common}</h3>
    <p>Captial: ${data.capital}</p>
    <p>Continent: ${data.region}</p>
    <p>Population: ${data.population.toLocaleString()}</p>
    
    <a href="${data.maps.googleMaps}">View map</a>

    </div>`;

    countries.appendChild(country);
}

search.addEventListener("input", (e) => {
    const searchValue = e.target.value;
    const country = document.querySelectorAll(".country");
    country.forEach((element) => {
      if (element.innerText.toLowerCase().includes(searchValue.toLowerCase())) {
        element.style.display = "block";
      } else {
        element.style.display = "none";
      }
    });
  });