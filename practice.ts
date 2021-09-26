class Person {
  name: string;
  email: string;
  city: string;

  constructor() {
    console.log("I am the CONSTRUCTOR!!");
  }

  SayMyName() {
    console.log(this.name);
  }
}
class Student extends Person {
  academicyear: number;
}

let person = new Person();
person.name = "Jack";

let student = new Student();
student.name = "Raghad";
student.academicyear = 2021;

student.SayMyName();
console.log(student);
