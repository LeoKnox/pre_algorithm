1
console.log(hello);
var hello = 'world';
// var hello;
// console.log(hello);
// logs undefined

2
var needle = 'haystack';
test();
function test(){
	var needle = 'magnet';
	console.log(needle);
}
// function test() get hoisted to top
// below needle
// test logs magnet

3
varcopy brendan = 'super cool';
function print(){
	brendan = 'only okay';
	console.log(brendan);
}
console.log(brendan);
//function print get hoisted before console.log
//print is not called
//console logs 'super cool'

4
var food = 'chicken';
console.log(food);
eat();
function eat(){
	food = 'half-chicken';
	console.log(food);
	var food = 'gone';
}
//function eat gets hoisted before it is called
//logs 'chicken' to console
//function eat hoists var food
//assigns var food to half-chicken
//logs 'half-chicken' to console

5
mean();
console.log(food);
var mean = function() {
	food = "chicken";
	console.log(food);
	var food = "fish";
	console.log(food);
}
console.log(food);
//function mean is not hoisted because it is defined in function
//function mean is still not defined at time of call
//error given

6
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
	genre = "rock";
	console.log(genre);
	var genre = "r&b";
	console.log(genre);
}
console.log(genre);
// var genre gets hoisted, but is not defined
// 'undefined' is logged to console
// function rewiend is hoisted before rewind is called
// var genre in function is hoisted
// genre is set to rock
// 'rock' logged to console
// genre is set to r&b
// 'r&b' is logged to console
// genre is called outside of function scope
// 'dsco' is logged to console

7
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
	dojo = "seattle";
	console.log(dojo);
	var dojo = "burbank";
	console.log(dojo);
}
console.log(dojo);
// function is hoisted
// dojo is defined by function
// dojo set to san jose
//'san jose' is logged to console
//learn is called
// dojo declaration is hoisted
//dojo is set to seattle
//'seattle' is logged to console
//dojo is set to burbank
//'burbank' is logged to console
//dojo is not scoped outside of function
//'sanjose is logged to console

8
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
        const dojo = {};
        dojo.name = name;
        dojo.students = students;
        if(dojo.students > 50){
            dojo.hiring = true;
        }
        else if(dojo.students <= 0){
            dojo = "closed for now";
        }
        return dojo;
}
//makedojo is hoisted to top
//makeDojo is called
//dojo is defined as const
//attempting to edit a const is an error