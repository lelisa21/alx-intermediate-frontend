var Student1 = {
    firstName: "Lelisa",
    lastName: "Hailu",
    age: 20,
    location: "Addis Ababa"
};
var Student2 = {
    firstName: "Israel",
    lastName: "Chimgamo",
    age: 22,
    location: "Nairobi"
};
var studentList = [Student1, Student2];
var table = document.createElement("table");
var tableBody = document.createElement("tbody");
var headerRow = document.createElement("tr");
var firstNameHeader = document.createElement("th");
var locationHeader = document.createElement("th");
firstNameHeader.textContent = "First Name";
locationHeader.textContent = "Location";
headerRow.appendChild(firstNameHeader);
headerRow.appendChild(locationHeader);
tableBody.appendChild(headerRow);
studentList.forEach(function (student) {
    var row = document.createElement("tr");
    var firstNameCell = document.createElement("td");
    firstNameCell.textContent = student.firstName;
    var locationCell = document.createElement("td");
    locationCell.textContent = student.location;
    row.appendChild(firstNameCell);
    row.appendChild(locationCell);
    tableBody.appendChild(row);
});
table.appendChild(tableBody);
document.body.appendChild(table);
//# sourceMappingURL=main.js.map
