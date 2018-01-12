function Student(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.courses = [];
}

Student.prototype.name = function() {
  return `${this.firstName} ${this.lastName}`;
};

Student.prototype.enroll = function(course) {
  if (!this.courses.includes(course) && !this.hasConflict(course)) {
    this.courses.push(course);
    course.addStudent(this);
  }
};

Student.prototype.courseLoad = function() {
  let result = {};
  this.courses.forEach(course => {
    if (!result[course.department]) {
      result[course.department] = course.numCredits;
    }
    else {
      result[course.department] += course.numCredits;
    }
  });
  return result;
};

Student.prototype.hasConflict = function(course) {
  for(let i = 0; i < this.courses.length; i++) {
    if (this.courses[i].conflictsWith(course)) return true;
  }
  return false;
};

function Course(courseName, department, numCredits, days, block) {
  this.courseName = courseName;
  this.department = department;
  this.numCredits = numCredits;
  this.students = [];
  this.days = days;
  this.block = block;
}

Course.prototype.addStudent = function(student) {
  if(!this.students.includes(student)) {
    this.students.push(student);
    student.enroll(this);
  }
};

Course.prototype.conflictsWith = function(course) {
  if (course.block !== this.block) return false;
  let bool = false;
  this.days.forEach(day => {
    if (course.days.includes(day)) {
      bool = true;
    }
  });
  return bool;
};

let student1 = new Student('bob', 'smith');
let student2 = new Student('jane', 'doe');
let chem = new Course('chemistry101', 'chemistry', 4, ['tue', 'thur'], 2);
let phys = new Course('phys101', 'physics', 4, ['mon', 'tue'], 2);
let bio = new Course('bio101', 'biology', 4, ['wed', 'fri'], 2);
student1.enroll(chem);
student1.enroll(bio);
student1.enroll(phys);
console.log(student1.courses);
//
// console.log(student1.courseLoad());
//
// if (result['hi']) {
// console.log("something");
// }else {
//   console.log("somethingelse");
// }
