import { Subjects.ts } from './subjects';
import { Cpp.ts } from './subjects';
import { Java.ts } from './subjects';
import { React.ts } from './subjects';

const cpp = new Subjects.Cpp();
const java = new Subjects.Java();
const react = new Subjects.React();

console.log('C++');
cpp.setTeacher(cTeacher);
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

console.log('Java');
java.setTeacher(cTeacher);
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

console.log('React');
react.setTeacher(cTeacher);
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());
