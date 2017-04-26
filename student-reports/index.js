function makeStudentsReport(data) {
  // - [X] create a container to put all the reports in to
  var reports = [];

  // create for loop to run through all the potential data
  for (var i=0; i < data.length; i++) {
    // - [X] Get current student
    var currentStudent = data[i];
    // - [X] Generate a report for that student
    var currentReport = currentStudent.name + ": " + currentStudent.grade;
    // - [X] Append it to `reports` array
    reports.push(currentReport);
  }

  // - [X] Return array containing all student reports
  return reports;
}


/* From here down, you are not expected to
   understand.... for now :)

   Nothing to see here!

*/


// tests

function testIt() {

  var testData = [
    {name: 'Jane Doe', grade: 'A'},
    {name: 'John Dough', grade: 'B'},
    {name: 'Jill Do', grade: 'A'}
  ];

  var expectations = [
    'Jane Doe: A',
    'John Dough: B',
    'Jill Do: A'
  ];

  var results = makeStudentsReport(testData);

  if (!(results && results instanceof Array)) {
    console.error(
      'FAILURE: `makeStudentsReport` must return an array');
    return
  }
  if (results.length !== testData.length) {
    console.error(
      'FAILURE: test data had length of ' + testData.length +
      ' but `makeStudentsReport` returned array of length ' + results.length);
    return
  }
  for (var i=0; i < expectations.length; i++) {
    var expect = expectations[i];
    if (!results.find(function(item) {
      return item === expect;
    })) {
      console.error(
        'FAILURE: `makeStudentsReport` is not ' +
        'producing expected strings'
      );
      return
    }
  }
  console.log('SUCCESS: `makeStudentsReport` is working');
}

testIt();
