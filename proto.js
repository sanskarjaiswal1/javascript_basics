
    var pro=function(company){
        //instance member of class
        this.acompany=company;
        this.size=20;
    }

let a=new pro("samsung")
var b=new pro("samsung")
//if we have 1000 object its difficult to assign value
//a.colour="red"
//b.colour="red"
//console.log(a.colour);
//console.log(b.colour);

//protype object(colour)attached with every object of the class,all js object inherit property and method from prototype
//prototype member
//classname.prototype.key='value';
pro.prototype.colour='red';
document.write(a.colour);
document.write(b.colour)
console.log(pro)



//__proto__ ===use to inherit
var ob1={
    name:'Ajay',
}

let ob2={
    age:20,
    __proto__:ob1
}
console.log(ob2.name)
 


var obj=new Object();
console.log(obj)

var arr=new Array();
console.log(arr)

const func=new Function();
console.log(func)  

Array.prototype.show=function(){
    return this;
}
const array=["Delhi"];
console.log(array.show());