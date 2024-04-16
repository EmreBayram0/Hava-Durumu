document.querySelector("#searchİnput").addEventListener("keypress",(e)=> {
    if (e.key === "Enter") {
        let userCity = document.querySelector("#searchİnput").value
        if (userCity != "") {
            getWeather(userCity)
        } else {
            alert("Şehri Boş Bırakamazsınız ")
        }
    }
});
function getWeather(userCity) {
    let url = `http://api.weatherapi.com/v1/current.json?key=498cc62949be4ce9a10104008241504&q=${userCity}&aqi=no`
    fetch(url)
        .then((response) => response.json())
        .then((data) => writeUIWeather(data))
        .catch((err) => {
            alert("Bağlantı Kurulamadı Ya da Yanlış Şehir İsmi Girdiniz")
        })
}
function writeUIWeather(weather) {
    document.querySelector(".city").textContent = weather.location.name
    document.querySelector(".temperature").textContent = `${weather.current.temp_c}°`
    document.querySelector("#image").src = weather.current.condition.icon
}
