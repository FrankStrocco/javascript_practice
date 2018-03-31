//simple funcitons

// console.log("up and running");


// (function() {
//   alert("yo yo");
// }())

// Returns from functions
// function findBiggestFraction(a, b) {
//   let result;
//   return a > b ? result = ["firstFraction", a] : result = ["secondFraction", b]
//
// }
//
// var firstFraction = 3/4;
// var secondFraction = 5/7;
//
// var biggestFraction = findBiggestFraction(firstFraction, secondFraction);
// console.log("firstFraction is ", firstFraction);
// console.log("secondFraction is ", secondFraction);
// console.log(`Fraction named, "${biggestFraction[0]}" has the largest value which is: ${biggestFraction[1]}.`);


//Anonymous functions

// var a = 3/4;
// var b = 5/7;
//
// var theBiggest = function(a, b){
//   var result;
//   a > b ? result = ["a", a] : result = ["b", b];
//   return result;
// }
//
// console.log(theBiggest(7/9, 13/25));


// immediately invoked functions



// var a = 3/4;
// var b = 5/7;



// var theBiggest = (function(a, b){
//   var result;
//   a > b ? result = ["a", a] : result = ["b", b];
//   return result;
// })(firstFraction, secondFraction);
//
// console.log("theBiggest", theBiggest);

// objects


// var course = new Object();
//
// course.title = "JavaScript Essential Training";
// cousr...

// var course = {
//   title: "JavaScript Essential Training",
//   instructor: "Frank Strocco",
//   level: 1,
//   published: true,
//   views: 0,
//   updateViews: function() {
//     return ++course.views;
//   }
//
// }
//
// console.log(course);
// console.log(course.views);
// course.updateViews();
//
// console.log(course.views);
//
//
// // new instance of date object;
//
// // var currentDate = new Date();
// // console.log(currentDate);
//
// // OBJECT CONSTRUCTORS
//
// function Course(title, instructor, level, published, views) {
//   this.title = title;
//   this.instructor = instructor;
//   this.level = level;
//   this.published = published;
//   this.views = views;
//   this.updateViews = function(){
//     return ++this.views;
//   }
// }
//
// var courses = [new Course("javascript", "frank", 2, true, 10), new Course("flowers", "bob", 4, false, 0)]
// console.log(courses[0]);
//
//
// console.log(courses[1]);
//
// console.log(courses[0].views);
// courses[0].updateViews();
// console.log(courses[0].views);
// courses[0].updateViews();
// console.log(courses[0].views);

// CLOSURES

// function doSomeMath() {
//   var a = 5;
//   var b = 4;
//   var sum = a + b;
//
//   function multiply(){
//     var result = a * b;
//     return result;
//   }
//
//   return multiply;
// }
//
// var theResult = doSomeMath();
// console.log("The result: ", theResult());

function giveMeEms(pixels) {
  var baseValue = 16;

  function doTheMath() {
    return pixels/baseValue;
  }

  return doTheMath;

}

var smallSize = giveMeEms(12);
var mediumSize = giveMeEms(18);
var largeSize = giveMeEms(24);
var xlargeSize = giveMeEms(32);


console.log("Small size: ", smallSize());
console.log("Medium size: ", mediumSize());
console.log("Large size: ", largeSize());
console.log("Extra Large size: ", xlargeSize());


















//
