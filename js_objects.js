// js objects challenge 1
let students = [
    {name: 'Remy', cohort: 'Jan'},
    {name: 'Genevieve', cohort: 'March'},
    {name: 'Chuck', cohort: 'Jan'},
    {name: 'Osmund', cohort: 'June'},
    {name: 'Nikki', cohort: 'June'},
    {name: 'Boris', cohort: 'June'}
];
var str = [];

for (var i=0; i < students.length; i++){
  for (var stu in students[i]) {
    str.push(stu + " : " + students[i][stu]);
  }
  console.log(str[0] + ", " + str[1]);
  str = [];
};

// js objects challenge 2
let users = {
    employees: [
        {'first_name':  'Miguel', 'last_name' : 'Jones'},
        {'first_name' : 'Ernie', 'last_name' : 'Bertson'},
        {'first_name' : 'Nora', 'last_name' : 'Lu'},
        {'first_name' : 'Sally', 'last_name' : 'Barkyoumb'}
    ],
    managers: [
       {'first_name' : 'Lillian', 'last_name' : 'Chambers'},
       {'first_name' : 'Gordon', 'last_name' : 'Poe'}
    ]
 };
var arr = [];

for (var us in users) {
  console.log(us.toUpperCase());
  for (var i = 0; i < users[us].length; i++) {
    arr[i] = [];
    var sum = 0;
    for (var ind in users[us][i]) {
      arr[i].push(users[us][i][ind]);
      sum += users[us][i][ind].length;
    }
    arr[i].push(sum);
  }
  for (var j = 0; j < arr.length; j++) {
    console.log(j+1 + " - " + arr[j][1] + ", " + arr[j][0] + " - " + arr[j][2]);
  }
  arr = [];