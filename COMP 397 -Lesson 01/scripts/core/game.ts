/// <reference path="_references.ts" />
import Person = objects.Person;
import Student = objects.Student;
console.log("Gamming.....");
var person: Person = new Person("Amandeep Kaur");
person.speaks();
var student: Student = new Student("Mike", 12353);
student.studies();
student.speaks();