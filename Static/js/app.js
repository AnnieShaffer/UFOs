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
}
