$(document).ready(function () {
    const apiKey = `http://api.openweathermap.org/data/3.0/measurements`;  // Replace with your OpenWeatherMap API key

    $('#getWeather').on('click', function () {
        let city = $('#city').val();

        if (city) {
            $.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`, function (data) {
                $('#weather').html(`
                    <p>Weather in ${data.name}: ${data.main.temp}°C</p>
                    <p>${data.weather[0].description}</p>
                `);
            }).fail(function () {
                $('#weather').html('<p class="error">City not found. Please try again.</p>');
            });
        } else {
            $('#weather').html('<p class="error">Please enter a city name.</p>');
        }
    });
});