    fetch('https://restcountries.com/v3.1/all')
    .then(response => response.json())
    .then(data => {
      // 1. Get all countries from Asia:
      const asianCountries = data.filter(country => country.region === 'Asia');
      console.log("Asian Countries:", asianCountries.map(country => country.name.common));
  
      // 2. Get countries with population less than 200,000
      const smallPopulationCountries = data.filter(country => country.population < 200000);
      console.log("Countries with population < 200,000:", smallPopulationCountries.map(country => country.name.common));
  
      // 3. Print name, capital, and flag of each small population country
      smallPopulationCountries.forEach(country => {
        console.log(`Name: ${country.name.common}, Capital: ${country.capital ? country.capital[0] : 'N/A'}, Flag: ${country.flags.svg}`);
      });
  
      // 4. Get the total population of all countries
      const totalPopulation = data.reduce((sum, country) => sum + country.population, 0);
      console.log("Total Population of All Countries:", totalPopulation);
  
      // 5. Find the country that uses US dollars as currency
      const usdCountries = data.filter(country => country.currencies && country.currencies.USD);
      console.log("Countries that use USD:", usdCountries.map(country => country.name.common));
    })
    .catch(error => console.error("Error fetching data:", error));