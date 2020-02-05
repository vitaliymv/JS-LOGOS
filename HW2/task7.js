class Student {
  constructor(yearOfStuding, facultyName) {
  this.yearOfStuding = yearOfStuding;
  this.facultyName = facultyName;
  }
}

let students = [
  new Student(4, "ІКТА"),
  new Student(1, "ІКНІ"),
  new Student(4, "ІАРД"),
  new Student(4, "ІСТР"),
  new Student(5, "ІКТА"),
  new Student(4, "ІНЕМ"),
  new Student(1, "ІКНІ"),
  new Student(3, "ІППО"),
  new Student(4, "ІМФН"),
  new Student(2, "ІХХТ")
  ];//1
let facultyNames = students.map(e => e.facultyName);//2
console.log(facultyNames);

let sum = students.reduce((a, b) => a + b.yearOfStuding, 0);//3
console.log("Сума всих об'єктів yearOfStuding: " + sum);
