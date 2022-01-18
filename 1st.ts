console.log( 'hello haii');
// string number boolean
function add(n1:number,n2:number,showResult:boolean) { 
    return n1+n2
} 
const num1=22;
const num2=23;
const printresult=true
console.log( typeof(num1));
let result =add(num1,num2,printresult)
console.log(result);

console.log(' -----object---');

const person={
    names:'naveen',
    age:23
}
console.log( person.age);


console.log(' -----array---');

const per={
    names:'srinivas',
    age:21,
    hobbies:['sketch','drawing']
};
let favoriteActivity:any[]// if we use any add any type of value
favoriteActivity=['22','srini',12]
console.log( favoriteActivity);

for(const nan of per.hobbies){
    console.log( nan.toLowerCase());
  //  console.log( nan.map());//error occur map not support for the string 
}

console.log(' -----Tuple---');


