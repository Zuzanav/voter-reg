$( document ).ready(function() {



// FUNCTIONS =======================================================================

/* Loops through all the data pulled from API and stores it into individual
    variables into a useful way for plotting */
function loopForData(all_data) {
  for (i=0; i < all_data.length; i++) {
    var county = all_data[i].county;
    var wholePop = all_data[i].cvap_net;
    var totalReg = all_data[i].total_registered_voters;
    var age18_25 = all_data[i].age_18_to_25;
    var age26_35 = all_data[i].age_26_to_35;
    var age36_45 = all_data[i].age_36_to_45;
    var age46_55 = all_data[i].age_46_to_55;
    var age56_65 = all_data[i].age_56_to_65;
    var age66 = all_data[i].age_66_and_over;
  }
}

//==================================================================================

// URL TO JSON ARRAY -------------------------------------------
var queryURL = "https://zuz-vol-s3.s3-us-west-2.amazonaws.com/voter_data.json";

// FUNCTION RUNS AJAX TO RETRIEVE DATA FROM API ----------------

  $.ajax({
    url: queryURL,
    method: "GET",
  }).then(function(response) {
    // store all the data into all_data variable 
    var all_data = response;
    console.log(all_data);

    // run function for variables 
    loopForData(all_data);





  });





// PLOTLY CHART --------------------------------------------------


function plotChart() {

}

	// var TESTER = document.getElementById('tester');
	// Plotly.newPlot( TESTER, [{
	// x: [1, 2, 3, 4, 5],
	// y: [1, 2, 4, 8, 16] }], {
	// margin: { t: 0 } } );


});

