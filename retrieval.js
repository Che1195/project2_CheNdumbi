$(document).ready(function () {
	$("#retrieve-resources").click(function () {
		var displayResources = $("#display-resources");

		var iso2code = $("#country").val();

		displayResources.text("Loading data from JSON source...");
		/* AJAX Call to RESTful Service */
		$.ajax({
			type: "GET",
			url: `https://restcountries.eu/rest/v2/alpha?codes=${iso2code}`,
			// data: { name: variable },
			success: function (result) {
				// Build output render
				var output =
					"<table><thead><tr><th>Name</th><th>Alpha 2 Code</th><th>Alpha 3 Code</th></thead><tbody>";

				console.log(result);
				// Create a for loop that will iterate over the result.RestResponse.result object and add <tr><td> element
				for (let i in result) {
					output +=
						"<tr><td>" +
						result[i].name +
						"</td><td>" +
						result[i].alpha2Code +
						"</td><td>" +
						result[i].alpha3Code +
						"</td><tr>";
				}

				output += "</tbody></table>";

				// Add data to the output render
				displayResources.html(output);

				// Add bootstrap class to the table for styling
				$("table").addClass("table");
			},
		});
	});
});
