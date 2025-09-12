
interface Student{
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const Student1: Student = {
    firstName: "Lelisa",
    lastName: "Hailu",
    age:20,
    location: "Addis Ababa"
}
const Student2: Student = {
    firstName: "Israel",
    lastName: "Chimgamo",
    age:22,
    location: "Nairobi"
}

const studentList: Student[] = [Student1 , Student2];

const table  = document.createElement("table");
const tableBody = document.createElement("tbody");

const headerRow = document.createElement("tr");
const firstNameHeader = document.createElement("th");
const locationHeader = document.createElement("th");

firstNameHeader.textContent = "First Name";
locationHeader.textContent = "Location";

headerRow.appendChild(firstNameHeader);
headerRow.appendChild(locationHeader);
tableBody.appendChild(headerRow);

studentList.forEach((student) => {
    const row = document.createElement("tr");
    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = student.firstName;
    const locationCell = document.createElement("td");
    locationCell.textContent = student.location;
    row.appendChild(firstNameCell);
    row.appendChild(locationCell);
    tableBody.appendChild(row);
});

table.appendChild(tableBody);
document.body.appendChild(table);

