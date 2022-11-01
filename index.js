const citySearch = document.getElementById("city-search");
const submit = document.getElementById("submit");
const city = document.getElementById("city");
const condition = document.getElementById("condition");
const conditionText = document.getElementById("condition-text");
const humudity = document.getElementById("humudity");
const wind = document.getElementById("wind");
const visibility = document.getElementById("visibility");




weather();
function weather() {
    const loadCity = "lagos";
   
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+`${citySearch.value||loadCity}`+'&appid=dddb3289b28de713316c6f74c4f023a5')
  .then((response) => response.json())
  .then((data) => {
    document.body.style.backgroundImage = `url('https://source.unsplash.com/featured/?${citySearch.value},random')`
      console.log(data);
      city.innerHTML = `Weather in ${data.name}`;
      temp.innerHTML = Math.ceil((`${data.main.temp}`-273)) +"°C";
      humudity.innerHTML = `Humudity: ${data.main.humidity}%`;
      wind.innerHTML = `Wind Speed: ${data.wind.speed} Km/h`;
      condition.src = "http://openweathermap.org/img/wn/"+data.weather[0].icon+"@2x.png";
      conditionText.innerHTML = data.weather[0].description;
      visibility.style.display ="block";
  })
  .catch((err) => {
    visibility.style.display ="none";
      alert('City Not Found');
      citySearch.value = "";
      
      
  });
  

}
submit.addEventListener("click", (e) => {
    e.preventDefault();

weather();
})

citySearch.addEventListener("keyup", (e) => {
    if(e.key == "Enter") {
        weather()
    }
})


