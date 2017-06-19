$("#submit-button").on("click", function() {
    event.preventDefault();
    $("#gif-section").empty();
    searchTerm = $("#search-input").val().trim();
    var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + searchTerm + "&api_key=dc6zaTOxFJmzC&limit=10";
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
			    $("#button-section").append(newButton);
			    newButton.attr("src", results[i].images.fixed_height.url);
			    newButton.attr("id", searchTerm);
			}
		}
    });
});

$("button").on("click", function() {
  $("#gif-section").empty();
  var person = $(this).attr("data-person");
  var queryURL = "http://api.giphy.com/v1/gifs/search?q=" +
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