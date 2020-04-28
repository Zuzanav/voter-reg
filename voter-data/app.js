$( document ).ready(function() {


// FUNCTIONS =======================================================================

function loopForData(all_data) {

  // EMPTY ARRAYS -------------------
  var total_pop = [];
  var unsorted_total_pop = [];
  var counties = [];

  // Loops through all the data pulled from API and stores it into individual variables
  for (i=0; i < all_data.length; i++) { //-----------------------------------------------

    var county_name = all_data[i].county; // COUNTY NAME (ONLY IN CALIFORNIA)
    var wholePop = all_data[i].cvap_net; // ENTIRE POPULATION PER COUNTY
    var totalReg = all_data[i].total_registered_voters; // TOTAL REGISTERED TO VOTE PER COUNTY
    var age18_25 = all_data[i].age_18_to_25; // OF AGE GROUP REGISTERED TO VOTE PER COUNTY
    var age26_35 = all_data[i].age_26_to_35; // "
    var age36_45 = all_data[i].age_36_to_45; // "
    var age46_55 = all_data[i].age_46_to_55; // "
    var age56_65 = all_data[i].age_56_to_65; // "
    var age66 = all_data[i].age_66_and_over; // "

    // Push the wholePop numbers from each county to two new arrays - " total_pop " & " unsorted_total_pop "
    total_pop.push(wholePop);
    unsorted_total_pop.push(wholePop);
    counties.push(county_name);

  } // END OF FOR LOOP --------------------------------------------------------------------

    // Sort the total population in descending order: Using sort() and compareFunction (for ints)
    // and store in new array
    var new_total_pop = total_pop.sort( function (a, b) {
        return b-a
      });

  // Take counties with highest population 
  // Loop through array with sorted populations for each county, and print only first 10 (highest)
  var topTenPop = [];
  var topTenCounties = [];


  for (j = 0; j < 10; j++) {
    topTenPop.push(new_total_pop[j]);
    topTenCounties.push((unsorted_total_pop.indexOf(new_total_pop[j])));

    console.log(counties[topTenCounties[j]]);


  };



  console.log(topTenCounties);




} // END OF FUNCTION 

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
    
    // run function for variables using all_data as argument
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

