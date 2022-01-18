console.log('hello haii');
// string number boolean
function add(n1, n2, showResult) {
    return n1 + n2;
}
var num1 = 22;
var num2 = 23;
var printresult = true;
console.log(typeof (num1));
var result = add(num1, num2, printresult);
console.log(result);
console.log(' -----object---');
var person = {
    names: 'naveen',
    age: 23
};
console.log(person.age);
console.log(' -----array---');
var per = {
    names: 'srinivas',
    age: 21,
    hobbies: ['sketch', 'drawing']
};
var favoriteActivity; // if we use any add any type of value
favoriteActivity = ['22', 'srini', 12];
console.log(favoriteActivity);
for (var _i = 0, _a = per.hobbies; _i < _a.length; _i++) {
    var nan = _a[_i];
    console.log(nan.toLowerCase());
}
