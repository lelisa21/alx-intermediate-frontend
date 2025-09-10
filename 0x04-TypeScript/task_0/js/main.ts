interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'Laloo',
  lastName: 'Hailu',
  age: 20,
  location: 'Ethiopia'
};

const student2: Student = {
  firstName: 'Adam',
  lastName: 'Bukhari',
  age: 22,
  location: 'Kenya'
};


const studentsList: Student[] = [student1, student2];


function renderTable(): void {
  const table = document.createElement('table');
  const tbody = document.createElement('tbody');
  

  const headerRow = document.createElement('tr');
  const firstNameHeader = document.createElement('th');
  const locationHeader = document.createElement('th');
  
  firstNameHeader.textContent = 'First Name';
  locationHeader.textContent = 'Location';
  
  headerRow.appendChild(firstNameHeader);
  headerRow.appendChild(locationHeader);
  tbody.appendChild(headerRow);
  

  studentsList.forEach((student) => {
    const row = document.createElement('tr');
    
    const firstNameCell = document.createElement('td');
    const locationCell = document.createElement('td');
    
    firstNameCell.textContent = student.firstName;
    locationCell.textContent = student.location;
    
    row.appendChild(firstNameCell);
    row.appendChild(locationCell);
    tbody.appendChild(row);
  });
  
  table.appendChild(tbody);
  document.body.appendChild(table);
  
 
  table.style.borderCollapse = 'collapse';
  table.style.margin = '20px';
  table.style.border = '1px solid black';
  
  const th = table.querySelectorAll('th');
  const td = table.querySelectorAll('td');
  
  th.forEach((cell) => {
    cell.style.border = '1px solid black';
    cell.style.padding = '8px';
    cell.style.backgroundColor = '#f2f2f2';
  });
  
  td.forEach((cell) => {
    cell.style.border = '1px solid black';
    cell.style.padding = '8px';
  });
}

document.addEventListener('DOMContentLoaded', renderTable);

