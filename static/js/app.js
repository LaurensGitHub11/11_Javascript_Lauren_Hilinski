// from data.js
var tableData = data;

// establish a reference to the table body
var tbody = d3.select("tbody");

// loop through each javascript object and create a row for each siteing
// then for each row/object create a cell for each key/value pair
// then for for each cell assign it the value of the value in key/value pair
tableData.forEach((siteing) => {
    var row = tbody.append("tr");
    Object.entries(siteing).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
  
// select the Filter Table button
var filter = d3.select("#filter-btn");

// make a reference to the input field
var input = d3.select('input');

// Complete the click handler for the form
filter.on("click", function() {

    // Prevent the page from refreshing
    d3.event.preventDefault();
  
    // Get the value property of the input element
    var inputValue = input.property('value');
  
    // Use the form input to filter the data by blood type
    var matchingSiteing = tableData.filter(siteing => {
      return siteing.datetime == inputValue; 
    });

    // log the matching siteings
    console.log(matchingSiteing);

    // clear the table body
    tbody.html("");

    // loop through each javascript object and create a row for each matching siteing
    // then for each row/object create a cell for each key/value pair
    // then for for each cell assign it the value of the value in key/value pair
    matchingSiteing.forEach((siteing) => {
        var row = tbody.append("tr");
        Object.entries(siteing).forEach(([key, value]) => {
          var cell = row.append("td");
          cell.text(value);
        });
      });
});
