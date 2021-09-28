
// Fonction appelée lors du click du bouton
function start() {
  // Création de l'objet apiWeather
  const apiWeather = new API_WEATHER();
  // Appel de la fonction fetchTodayForecast

  apiWeather

      .getThreeDayForecast()

    .then(function(response) {
      // Récupère la donnée d'une API
      const data = response.data;
      console.log(data);



      // On récupère l'information principal
      const main = data.list[0].weather[0].main;
      const description = data.list[0].weather[0].description;
      const temp = data.list[0].temp.day;
      const icon = apiWeather.getHTMLElementFromIcon(data.list[0].weather[0].icon);

      const main2 = data.list[1].weather[0].main;
      const description2 = data.list[1].weather[0].description;
      const temp2 = data.list[1].temp.day;
      const icon2 = apiWeather.getHTMLElementFromIcon(data.list[1].weather[0].icon);

      const main3 = data.list[2].weather[0].main;
      const description3 = data.list[2].weather[0].description;
      const temp3 = data.list[2].temp.day;
      const icon3 = apiWeather.getHTMLElementFromIcon(data.list[2].weather[0].icon);

      const main4 = data.list[3].weather[0].main;
      const description4 = data.list[3].weather[0].description;
      const temp4 = data.list[3].temp.day;
      const icon4 = apiWeather.getHTMLElementFromIcon(data.list[3].weather[0].icon);

      // Modifier le DOM
      document.getElementById('today-forecast-main').innerHTML = main;
      document.getElementById('today-forecast-more-info').innerHTML = description;
      document.getElementById('icon-weather-container').innerHTML = icon;
      document.getElementById('today-forecast-temp').innerHTML = `${temp}°C`;

      document.getElementById('tomorrow-forecast-main').innerHTML = main2;
      document.getElementById('tomorrow-forecast-more-info').innerHTML = description2;
      document.getElementById('t-icon-weather-container').innerHTML = icon2;
      document.getElementById('tomorrow-forecast-temp').innerHTML = `${temp2}°C`;

      document.getElementById('after-tomorrow-forecast-main').innerHTML = main3;
      document.getElementById('after-tomorrow-forecast-more-info').innerHTML = description3;
      document.getElementById('at-icon-weather-container').innerHTML = icon3;
      document.getElementById('after-tomorrow-forecast-temp').innerHTML = `${temp3}°C`;

      document.getElementById('aafter-tomorrow-forecast-main').innerHTML = main4;
      document.getElementById('aafter-tomorrow-forecast-more-info').innerHTML = description4;
      document.getElementById('aat-icon-weather-container').innerHTML = icon4;
      document.getElementById('aafter-tomorrow-forecast-temp').innerHTML = `${temp4}°C`;

    })
    .catch(function(error) {
      // Affiche une erreur
      console.error(error);
    });
}


function start2(){
    const apiWeather = new API_WEATHER();

    apiWeather

        .getThreeDayForecast()

        .then(function(response)
        {
            // Récupère la donnée d'une API
            const data = response.data;


            const main = data.weather[1].main;
            const description = data.weather[0].description;
            const temp = data.main.temp;
            const icon = apiWeather.getHTMLElementFromIcon(data.weather[0].icon);

            d
        })

        .catch(function(error)
        {
                // Affiche une erreur
                console.error(error);
        });

}