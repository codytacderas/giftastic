var buttons = [];

$("#submit-button").on("click", function() {
    event.preventDefault();
    $("#gif-section").empty();
    searchTerm = $("#search-input").val().trim();
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + searchTerm + "&api_key=dc6zaTOxFJmzC&limit=10";
    $.ajax({
      url: queryURL,
      method: "GET"
    })
    .done(function(response) {
		var results = response.data;
		for (var i = 0; i < results.length; i++) {
			var gifDiv = $('<div class="item">');
			var rating = results[i].rating;
			var p = $("<p>").text("Rating: " + rating);
			var imageUrl = results[i].images.fixed_height.url;
			var queryImage = $("<img>");
			queryImage.attr("src", imageUrl);
			queryImage.attr("alt", "gEtTin GiPhy");
			gifDiv.append(p);
			gifDiv.append(queryImage);
			$("#gif-section").append(gifDiv);
			function createButton() {
			    var newButton = document.createElement("button");
			    buttons.push(newButton);
			    $("#button-section").append(newButton);
			    button.attr("src", queryURL);
			    button.attr("id", searchTerm);
			    document.getElementById(searchTerm).innerHTML = searchTerm;
			}
			createButton();
		}
    });
});

$("button").on("click", function() {
  $("#gif-section").empty();
    var person = $(this).attr("data-person");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
      person + "&api_key=dc6zaTOxFJmzC&limit=10";
    $.ajax({
      url: queryURL,
      method: "GET"
      })
    .done(function(response) {
      var results = response.data;
      for (var i = 0; i < results.length; i++) {
        var gifDiv = $('<div class="item">');
        var rating = results[i].rating;
        var p = $("<p>").text("Rating: " + rating);
        var personImage = $("<img>");
        personImage.attr("src", results[i].images.fixed_height.url);
        gifDiv.append(p);
        gifDiv.append(personImage);
        $("#gif-section").append(gifDiv);
      }
    });
});