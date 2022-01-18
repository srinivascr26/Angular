var a:any//any is the type of data type it can allow any primitive / reference(userdefined)
a=1222
console.log(a);

var arr:number[]
arr=[1,2,3,4,5,6]
console.log( arr);

class user{
    firstName:string
    lastName:string
    id:number
    display(){
        console.log('inside the class');
    }
}

var obj=new user();
console.log(obj.display());
console.log( obj.firstName);
console.log('----------------------------');
//
class person{
    name:string
    id:number
     constructor(name,id){
         this.name=name
         this.id=id
     }
}
var p=new person("virat",22)
console.log( p.name);
console.log(p.id);


interface car{
    brand:string
    price:number
    result():string
}

class honda implements car{
    brand:string
    price:number
    name:string
    color:string
    result():string{
        return "abcd"
    }
}
var c=new honda()
var x=c.result()
console.log(x);

//interface as data type

var c2:car={
    brand:"honda",
    price:20000,

    result(){
        return "ab"
    },
}


 console.log( '-----enumerated data type----');
enum books{
    book1=10,
    book2,      // if not initialise it will automatically incrimented
    book3,
    book4

}

function displayBooks( ):books{
    if(true){
        return books.book3//return type is user defined data type
}}
console.log( displayBooks());


//Generics
console.log('-----------generics-----------');
// <t>  itmakes dynamical t can be any thing 
function displayValue <t>(item:t ):t {
    return item
}
 
// any type of data type can be apply
console.log( 'hello haii' );

 