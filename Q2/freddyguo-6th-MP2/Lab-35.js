class Student{

    constructor(firstName, lastName, q1, q2){
        this.firstName = firstName
        this.lastName = lastName
        this.q1 = q1
        this.q2 = q2
        this.average = (q1 + q2) / 2
    }
    getFirstNameLastName(){
        return this.firstName + " " + this.lastName;
    }
}

function printStudents (students){
    for(let i = 0; i < students.length; i++){
        console.log(`${students[i].getFirstNameLastName()} ${students[i].q1} ${students[i].q2} ${students[i].average}`)
    }
}

function findTheStudentWithTheHighesAverage(students){
    let studentWithHighestAverage = students[0]

    for(let i = 1; i < students.length; i++){
        if (students[i].average > studentWithHighestAverage.average){
            studentWithHighestAverage = students[i]
        }
    }

    return studentWithHighestAverage;
}

const readline = require('readline-sync');

students = [];

while(true){
    firstName = readline.question("\nEnter the person's first name: ")
    if(firstName === ''){
        break;
    }

    lastName = readline.question("Enter the person's last name: ")

    q1 = Number(readline.question("Enter the student's q1 grade: "))
    q2 = Number(readline.question("Enter the student's q2 grade: "))

    student = new Student(firstName,lastName, q1, q2);
    students.push(student);
}

console.log('\nList of Students: \n');

printStudents(students);

//I'm not sure if there's a function for javascript that can replicate "attrgetter" for python

console.log('\nStudent with the Highest Average: ')

console.log(findTheStudentWithTheHighesAverage(students).firstName + ' ' + findTheStudentWithTheHighesAverage(students).lastName);