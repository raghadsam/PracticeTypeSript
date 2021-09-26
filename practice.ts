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

//Student: Derived Class
//Person: Base Class
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

//interface

interface Notifier {
  SendNotification(message, address);
}

class Pollution {
  GetPollution(n: Notifier) {
    ///
    ///
    ///
    if (pollution > 30) {
      //send SMS
      //send Email
      n.SendNotification("", "");
    }
  }
}
//Client

class SMSNotifier implements Notifier {
  SendNotification(message, address) {
    /// send sms
  }
}

class EmailNotifier implements Notifier {
  SendNotification(message, email) {
    /// send email
  }
}
let sms = new SMSNotifier();
let m = new Pollution();
m.GetPollution(sms);

let email = new EmailNotifier();
let r = new Pollution();
r.GetPollution(email);
