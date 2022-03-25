Array.prototype.filter = function (callback) {
  var arr = this;
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    if (callback(arr[i])) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
};

Array.prototype.someRandomFunction = function () {
  console.log("Hey Arnold");
};

var someArray = ["a", "boo", "pa", "home", "choo", "pika"];

console.log(someArray);
var newArr = someArray.customFilterFunction((el) =>
  el.toLowerCase().includes("a")
);
console.log(newArr);
