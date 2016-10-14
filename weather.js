// $.ajax // generic ajax call - all the options
// $.get // makes a GET request
// $.post // makes a POST request
$("#weather-btn").click(function() {
    // Get the value from the textbox
    var city = $("#city").val();
    // Make GET request
    $.getJSON("http://api.openweathermap.org/data/2.5/weather",
        {
            q: city,
            appid: "84bee75ccc48d73cd18de3a8c2d85c8e",
            units: "imperial"
        },
        function(data) {
            console.log(data);
            // Print city name
            console.log(data.name);
            $("#name").html(data.name);
            // Print temperature
            console.log(data.main.temp);
            $("#temp").html(data.main.temp);
            // Print description
            console.log(data.weather[0].description);
            $("#description").html(data.weather[0].description);
            // Display wind speed
            $("#speed").html(data.wind.speed);
            // Display longitude and latitude
            $("#lon").html(data.coord.lon);
            $("#lat").html(data.coord.lat);
            // Display humidity
            $("#humidity").html(data.main.humidity);
            if(data.main.temp > 50) {
                $("body").css('background', 'red');
            } else {
                $("body").css('background', 'blue');
            }
            // Print icon code
            console.log("http://openweathermap.org/img/w/" + data.weather[0].icon + ".png" );
            $("#icon").attr('src', "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png");           
        });
});
