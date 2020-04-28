$( document ).ready(function() {

//==================================================================================
// FUNCTIONS =======================================================================

function loopForData(all_data) {

  // EMPTY ARRAYS -------------------
  var total_pop = [];
  var unsorted_total_pop = [];
  var counties = [];
  var total_reg = [];
  var group_1 = [];
  var group_2 = [];
  var group_3 = [];
  var group_4 = [];
  var group_5 = [];
  var group_6 = [];

  // BEGIN FOR LOOP ------------------------------------------------------------------------------------
  // Loops through all the data pulled from API and stores it into individual variables
  for (i=0; i < all_data.length; i++) { 

    var county_name = all_data[i].county; // COUNTY NAME (ONLY IN CALIFORNIA)
    var wholePop = all_data[i].cvap_net; // ENTIRE POPULATION PER COUNTY
    var total_reg_num = all_data[i].total_registered_voters; // TOTAL REGISTERED TO VOTE PER COUNTY
    var age18_25 = all_data[i].age_18_to_25; // OF AGE GROUP REGISTERED TO VOTE PER COUNTY
    var age26_35 = all_data[i].age_26_to_35; // "
    var age36_45 = all_data[i].age_36_to_45; // "
    var age46_55 = all_data[i].age_46_to_55; // "
    var age56_65 = all_data[i].age_56_to_65; // "
    var age66 = all_data[i].age_66_and_over; // "

    // Push all the data into their own arrays ---------------------------
    total_pop.push(wholePop); // total population of each county
    unsorted_total_pop.push(wholePop); // total population of each county (This is a duplicate. Left unsorted for later reference)
    counties.push(county_name); // county names
    total_reg.push(total_reg_num); // total registered 
    group_1.push(age18_25); // number of people registered to vote in age group
    group_2.push(age26_35); // "
    group_3.push(age36_45); // "
    group_4.push(age46_55); // "
    group_5.push(age56_65); // "
    group_6.push(age66); // "

  } // END OF FOR LOOP -----------------------------------------------------------------------------

    // Sort the total population in descending order: Using sort() and compareFunction (for ints)
    // and store in new array
    var new_total_pop = total_pop.sort( function (a, b) {
        return b-a
      });

  // DECLARATION OF EMPTY ARRAY VARIABLES FOR TOP TEN COUNTIES ----------------
  var topTenPop = [];
  var topTenIndex = [];
  var topTenCounties = [];
  var topTenReg = [];
  var topTen_Group1 =[];
  var topTen_Group2 =[];
  var topTen_Group3 =[];
  var topTen_Group4 =[];
  var topTen_Group5 =[];
  var topTen_Group6 =[];

  // BEGIN TOP TEN FOR LOOP ----------------------------------
  // Take counties with highest population 
  // Loop through array with sorted populations for each county, and save only first 10 (highest)
  for (j = 0; j < 10; j++) {

    // push TOP 10 - TOTAL POPULATION numbers to array
    topTenPop.push(new_total_pop[j]);

    // push TOP TEN - INDEX NUMBERS to array
    topTenIndex.push((unsorted_total_pop.indexOf(new_total_pop[j])));

    // push TOP 10 - COUNTY NAMES to array
    topTenCounties.push((counties[topTenIndex[j]]))

    // push TOP 10 - REGISTERED VOTERS numbers to array
    topTenReg.push((total_reg[topTenIndex[j]]))

    // push TOP 10 - GROUP 1 VOTERS numbers to array
    topTen_Group1.push((group_1[topTenIndex[j]]))

    // push TOP 10 - GROUP 2 VOTERS numbers to array
    topTen_Group2.push((group_2[topTenIndex[j]]))

    // push TOP 10 - GROUP 3 VOTERS numbers to array
    topTen_Group3.push((group_3[topTenIndex[j]]))

    // push TOP 10 - GROUP 4 VOTERS numbers to array
    topTen_Group4.push((group_4[topTenIndex[j]]))

    // push TOP 10 - GROUP 5 VOTERS numbers to array
    topTen_Group5.push((group_5[topTenIndex[j]]))

    // push TOP 10 - GROUP 6 VOTERS numbers to array
    topTen_Group6.push((group_6[topTenIndex[j]]))

    // PERCENT OF AGE GROUP REGISTERED TO VOTE PER COUNTY
    let percent_group_1 = (topTen_Group1[j] / topTenPop[j])*100;
    let percent_group_2 = (topTen_Group2[j] / topTenPop[j])*100;
    let percent_group_3 = (topTen_Group3[j] / topTenPop[j])*100;
    let percent_group_4 = (topTen_Group4[j] / topTenPop[j])*100;
    let percent_group_5 = (topTen_Group5[j] / topTenPop[j])*100;
    let percent_group_6 = (topTen_Group6[j] / topTenPop[j])*100;

  }; // END OF TOP TEN FOR LOOP -----------------------------


   

  // console.log(topTenCounties);
  // console.log(topTenReg);
  // console.log(topTen_Group1);
  // console.log(topTen_Group2);
  // console.log(topTen_Group3);
  // console.log(topTen_Group4);
  // console.log(topTen_Group5);
  // console.log(topTen_Group6);

} // END OF FUNCTION 



//==================================================================================
// AJAX CALL ===================================================================

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

//============================================================================
//==================================================================================



//==================================================================================
// PLOTY CHART ==================================================================


function plotChart() {

}

	// var TESTER = document.getElementById('tester');
	// Plotly.newPlot( TESTER, [{
	// x: [1, 2, 3, 4, 5],
	// y: [1, 2, 4, 8, 16] }], {
  // margin: { t: 0 } } );
  

//===============================================================================
//==================================================================================

});  // END OF DOCUMENT READY FUNCTION


