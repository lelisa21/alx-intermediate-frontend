/// <reference path="subjects/Cpp.ts" />
/// <reference path="subjects/Java.ts" />
/// <reference path="subjects/React.ts" />
export var cpp = new Subjects.Cpp();
export var java = new Subjects.Java();
export var react = new Subjects.React();
export var cTeacher = {
    firstName: "Abeba",
    lastName: "Tola",
    experienceTeachingC: 10
};
console.log("C++");
cpp.setTeacher(cTeacher);
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());
console.log("");
console.log("Java");
java.setTeacher(cTeacher);
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());
console.log("");
console.log("React");
react.setTeacher(cTeacher);
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());
/* outputs i got
C++
Here is the list of requirements for Cpp
Available Teacher: Abeba

Java
Here is the list of requirements for Java
No available teacher

React
Here is the list of requirements for React
No available teacher */
//# sourceMappingURL=main.js.map