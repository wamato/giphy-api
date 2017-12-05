//create an array to store my topic
//generate buttons from my array
//make and on click event for the buttons
//when clicked, 10 gifs from giphy are requested
//when the image is clicked, the gif goes from still to animate

//topic array
var gamesArray = ["Call of Duty", "Heroes of the Storm", "Spyro", "Kingdom Hearts", "Zelda", "Super Smash Bro's", "Destiny", "Minecraft", "Pokemon"]

function createButtons() {

    $("#display-gif").empty();

    for (var i = 0; i < gamesArray.length; i++) {
        console.log(i);
        var queryButton = $("<button></button>");
        queryButton.addClass("game");
        queryButton.attr("data-title", gamesArray[i]);
        queryButton.text(gamesArray[i]);
        $("#display-gif").append(queryButton);
    }
}
createButtons();

$("button").on("click", function () {
    var data = $(this).attr("data-title");
    console.log(this)
    console.log(data);

    queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        data + "&api_key=dc6zaTOxFJmzC&limit=10";

    $.ajax({
            url: queryURL,
            method: "GET"
        })
        .done(function (response) {
            var gifDiv = $("<div class ='item'>")
            var results = response.data;
            console.log(response);
            
            $("#display-gif").empty();
            
            for (var i = 0; i < results.length; i++) {
            
                var rating = results[i].rating;
                var p = $("<p>").text(`Rating ${rating}`)
                console.log(p);

                var queryImage = $("<img>");
                queryImage.attr("src", results[i].images.fixed_height.url);

                gifDiv.prepend(p);
                gifDiv.prepend(queryImage);

                $("#display-gif").pe

            }
        });
});