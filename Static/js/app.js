// import the data from data.js
const tableData = data;

// Reference the HTML table using D3
var tbody = d3.select("tbody");

function buildTable(data) {
    
    // Clear existing data
    tbody.html("");

    // Loop through each object and append a row and calls for each value
    data.forEach((dataRow) => {
        // Append a row to the table body
        let row = tbody.append("tr");
        //Loop through each field and add each value as a table cell
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);
            }
        );
    });
};

function handleClick() {
    // Get datetime value from the filter
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;
    // Check the if a date was entered and filter by that date
    if (date) {
        // Apply filter to the table data to only keep rows where
        // the datetime value matches the filter value
        filteredData = filteredData.filter(row => row.datetime === date);
    };
    // Rebuild the table using the filtered data
    buildTable(filteredData);
};

// Attach an event to listen for the form button
d3.selectAll("#filter-btn").on("click", handleClick);

// Build a table when the page loads
buildTable(tableData);