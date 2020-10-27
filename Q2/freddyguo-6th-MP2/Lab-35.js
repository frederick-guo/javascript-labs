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
        console.log(`${student.getFirstNameLastName()} ${student.q1} ${student.q2} ${student.average}`)
    }
}

const readline = require('readline-sync');

students = [];

while(true){
    firstName = readline.question("Enter the person's name: ")
    if(firstName === ''){
        break;
    }

    lastName = readline.question("Enter the person's last name: ")

    q1 = Number(readline.question("Enter the student's q1 grade: "))
    q2 = Number(readline.question("Enter the student's q2 grade: "))

    student = new Student(firstName,lastName, q1, q2);
    students.push(student);
}

printStudents(students);

