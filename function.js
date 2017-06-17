
$("#submit-button").on("click", function() {
	event.preventDefault();
	$("#gif-section").empty();
	searchTerm = $("#search-input").val().trim();
	var queryURL = "http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=" + searchTerm;
	$.ajax({
	  url: queryURL,
	  method: "GET"
	})
	.done(function(response) {
	  var results = response.data;
	  console.log(results);
	  for (var i = 0; i < results.length; i++) {
	    var gifDiv = $("<div class='item'>");
	    var rating = results[i].rating;
	    var p = $("<p>").text("Rating: " + rating);
	    var imageUrl = response.data.image_original_url;
	    var queryImage = $("<img>");
	    queryImage.attr("src", results[i].images.fixed_height.url);
        queryImage.attr("src", imageUrl);
        queryImage.attr("alt", "gEtTin GiPhy");
	    gifDiv.prepend(p);
	    gifDiv.prepend(queryImage);
	    $("#gif-section").prepend(gifDiv);
	  }
	});
});