interface Student {
firstName: string;
lastName: string;
age: number;
location: string;
}

let student1: Student = {
firstName: "Felix",
lastName: "G",
age: 25,
location: "Naivasha"
}

let student2: Student = {
firstName: "Mercy",
lastName: "Atieno",
age: 22,
location: "Kinangop"
}

let studentsList = [student1, student2];

let table = document.createElement("table");

for (let student of studentsList) {
let row = document.createElement("tr");
let firstName = document.createElement("td");
let location = document.createElement("td");

firstName.innerHTML = student.firstName;
location.innerHTML = student.location;

row.appendChild(firstName);
row.appendChild(location);
table.appendChild(row);
}

document.body.appendChild(table);
