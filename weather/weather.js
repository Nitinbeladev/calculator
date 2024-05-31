function Getweather() {
  const userInput = document.getElementById("input").value;

  fetch(
    `https://api.weatherapi.com/v1/current.json?key=80783fd590ab46fc8fc100621240101&q=${userInput}&aqi=yes`
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      document.getElementById("city").innerHTML = data.location.name;
      document.getElementById("temp").innerHTML = data.current.temp_c;
    });
}
