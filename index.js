var a; //any is the type of data type it can allow any primitive / reference(userdefined)
a = 1222;
console.log(a);
var arr;
arr = [1, 2, 3, 4, 5, 6];
console.log(arr);
var user = /** @class */ (function () {
    function user() {
    }
    user.prototype.display = function () {
        console.log('inside the class');
    };
    return user;
}());
var obj = new user();
console.log(obj.display());
console.log(obj.firstName);
console.log('----------------------------');
//
var person = /** @class */ (function () {
    function person(name, id) {
        this.name = name;
        this.id = id;
    }
    return person;
}());
var p = new person("virat", 22);
console.log(p.name);
console.log(p.id);
var honda = /** @class */ (function () {
    function honda() {
    }
    honda.prototype.result = function () {
        return "abcd";
    };
    return honda;
}());
var c = new honda();
var x = c.result();
console.log(x);
//interface as data type
var c2 = {
    brand: "honda",
    price: 20000,
    result: function () {
        return "ab";
    }
};
console.log('-----enumerated data type----');
var books;
(function (books) {
    books[books["book1"] = 10] = "book1";
    books[books["book2"] = 11] = "book2";
    books[books["book3"] = 12] = "book3";
    books[books["book4"] = 13] = "book4";
})(books || (books = {}));
function displayBooks() {
    if (true) {
        return books.book3; //return type is user defined data type
    }
}
console.log(displayBooks());
//Generics
console.log('-----------generics-----------');
// <t>  itmakes dynamical t can be any thing 
function displayValue(item) {
    return item;
}
// any type of data type can be apply
console.log('hello haii');
