const allCountry = ()=>{
    const url = 'https://restcountries.com/v3.1/all';
    fetch(url)
             .then(res => res.json())
             .then(data => displayCountries(data))
}

const displayCountries = (data)=>{
  const countryContainer = document.getElementById('countryContainer');
    data.forEach(element => {
        console.log(element.cca3);
        const countryDiv = document.createElement('div');
        countryDiv.classList.add('country');
        countryDiv.innerHTML = `
            <h4> Name: ${element.name.common} </h4>
            <p>capital: ${element.capital ? element.capital[0] : 'No capital'}</p>
            <button onclick="loadCountryDetails('${element.cca3}')">Details</button>
      `
      ;
      countryContainer.appendChild(countryDiv);
    });
}



const loadCountryDetails = code =>{
    //  https://restcountries.com/v3.1/alpha/{code}
    const url = `https://restcountries.com/v3.1/alpha/${code}`
    fetch(url) 
             .then(res => res.json())
             .then(data => showCountryDetails(data[0]))
}

const showCountryDetails = data =>{
    const countryDetails = document.getElementById('country-details');
    const detailsDiv = document.createElement('div');
    detailsDiv.innerHTML = `
               <h4> Name: ${data.name.common} </h4>
               <p> Capital: ${data.capital ? data.capital[0] : 'NO CAPITAL'}</p>
               <img src="${data.flags.png}">
    `
    countryDetails.appendChild(detailsDiv);
}

allCountry();