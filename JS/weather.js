$(function () {
    $("#main").click(function () {
        var city = $('#city').val();
        var url = `https://wttr.in/${city}?format=%c+%t+%w+%ph+%+%r+%m+%v+`;

        $("#info").html('<p class="loading">Loading...</p>');

        $.get(url)
            .done(data => $("#info").html(`<h2>Weather in ${city}</h2><pre>${data}</pre>`))
            .fail(() => $("#info").html('<p class="error">Data not found</p>'));
    });
});
