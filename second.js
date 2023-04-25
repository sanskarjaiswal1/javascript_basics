export default function(){
    console.log("hello");
}

export function youtube(name){
    console.log(`heloo ${name}`)
}

export class student{
    constructor(){
        console.log("i am consttuctor");
    }
}
export let message="hi message";

//agreegate module
function user(){
    return 'hello';
}
export{user};

//export{youtube,student,message} ;