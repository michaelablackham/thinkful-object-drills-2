function makeStudentReport (data) {
  var reports = [];
  for ( var i=0; i < data.length; i++ ) {
    // - [x] Get current student
    var currentStudent = data[i];
    // - [X] Gerenerate a report for that student
    var currentStudentReport = currentStudent.name + ": " + currentStudent.grade;
    // - [ ] Append it to `reports` array
    reports.push(currentStudentReport);
  }

  // - [ ] Return array contianing all student reports
  return reports;
}

// function createReport (student) {
//   return student.name + ": " + student.grade
// }

var students = [
  {name: 'Joel Wallis', grade: 'A'},
  {name: 'Michaela Blackham', grade: 'B'},
  {name: 'Jane Doe', grade: 'C'},
  {name: 'John Doe', grade: 'C'}
]
var expected = [
  'Joel Wallis: A',
  'Michaela Blackham: B',
  'Jane Doe: C',
  'John Doe: C'
]

var result = makeStudentReport(students)
console.log('result', result)
console.log('expected', expected)
