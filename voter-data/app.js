$( document ).ready(function() {



// FUNCTIONS =======================================================================

function loopForData(all_data) {

  console.log(all_data);

  var org_total_pop = [];
  var unsorted_total_pop = [];

  // Loops through all the data pulled from API and stores it into individual variables
  for (i=0; i < all_data.length; i++) { //-----------------------------------------------

    var county = all_data[i].county; // COUNTY NAME (ONLY IN CALIFORNIA)
    var wholePop = all_data[i].cvap_net; // ENTIRE POPULATION PER COUNTY
    var totalReg = all_data[i].total_registered_voters; // TOTAL REGISTERED TO VOTE PER COUNTY
    var age18_25 = all_data[i].age_18_to_25; // OF AGE GROUP REGISTERED TO VOTE PER COUNTY
    var age26_35 = all_data[i].age_26_to_35; // "
    var age36_45 = all_data[i].age_36_to_45; // "
    var age46_55 = all_data[i].age_46_to_55; // "
    var age56_65 = all_data[i].age_56_to_65; // "
    var age66 = all_data[i].age_66_and_over; // "

    // Push the wholePop number from each county to new array - " total_pop "
    org_total_pop.push(wholePop);
    unsorted_total_pop.push(wholePop);

    // PERCENT OF AGE GROUP REGISTERED TO VOTE PER COUNTY
    let percent_group_1 = (age18_25 / totalReg)*100; 
    let percent_group_2 = (age26_35 / wholePop)*100;
    let percent_group_3 = (age36_45 / wholePop)*100;
    let percent_group_4 = (age46_55 / wholePop)*100;
    let percent_group_5 = (age56_65 / wholePop)*100;
    let percent_group_6 = (age66 / wholePop)*100;

    // PERCENT OF POPULATION REGISTERED TO VOTE PER COUNTY
    //console.log(percent_group_1 + percent_group_2 + percent_group_3 + percent_group_4 + percent_group_5 + percent_group_6);

  } // END OF FOR LOOP --------------------------------------------------------------------

    // Sort the total population in descending order: Using sort() and compareFunction (for ints)
    // and store in new array
    var new_total_pop = org_total_pop.sort( function (a, b) {
        return b-a
      });

      console.log(unsorted_total_pop);

  // Take counties with highest population 
  // Loop through array with sorted populations for each county, and print only first 10 (highest)
  var topTen = [];

  for (j = 0; j < 10; j++) {
    topTen.push(new_total_pop[j]);
    console.log( unsorted_total_pop.indexOf(new_total_pop[j]))
  };
  console.log(topTen);


 



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

