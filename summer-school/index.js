var studentData = [
  {
    name: 'Tim',
    status: 'Current student',
    course: 'Biology'
  },
  {
    name: 'Sue',
    status: 'Withdrawn',
    course: 'Mathematics'
  },
  {
    name: 'Liz',
    status: 'On leave',
    course: 'Computer science'
  }
];

//BY CHANGING THE STATUS EASILY - worked on this one myself
function enrollInSummerSchoolMine(students) {
  // - create a container to put all the student in to
  var summerStudents = [];
  // - create for loop to run through all the potential data
  for ( var i = 0; i < students.length; i++ ) {
    //push and change updated information into the summer students array
    var student = students[i];

    summerStudents.push({
      name: student.name,
      status: 'In Summer School',
      course: student.course
    })
  }

  // - Return array containing all all the in summer school students and their courses
  console.log(summerStudents)
  return summerStudents;
}

//BY CHANGING THE STATUS WITH MAP -- got to work on maps
function enrollInSummerSchool(students) {
  return students.map(function(student) {
    return {
      name: student.name,
      status: 'In Summer school',
      course: student.course
    }
  });
}


/* From here down, you are not expected to understand.... for now :)
  Nothing to see here!

*/

// tests


function testIt() {
  var testData = [
    {
      name: 'Burt',
      status: 'Playing hooky',
      course: 'Biology'
    },
    {
      name: 'Melanie',
      status: 'Sick',
      course: 'Mathematics'
    },
    {
      name: 'Leonard',
      status: 'AWOL',
      course: 'Computer science'
    }
  ];

  var results = enrollInSummerSchool(testData);

  if (!(results && results instanceof Array)) {
    console.error('FAILURE: `enrollSummerSchool` must return an array');
    return
  }

  for (var i=0; i<testData.length; i++) {
    var result = results.find(function(_result) {
      return (
        _result.name === testData[i].name &&
        _result.course === testData[i].course &&
        _result.status === 'In Summer school');
    });
    if (!result) {
      console.error(
        'FAILURE: `enrollSummerSchool` should return ' +
        'original key/value pairs for each student, and ' +
        'update `status` to "In Summer school"');
      return
    }
  }
  console.info('SUCCESS: `enrollSummerSchool` is working');
}

testIt();
