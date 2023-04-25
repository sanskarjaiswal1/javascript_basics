function *generateit(){
  console.log("first para")
  yield "fisrt yeild";
  console.log("second para")    
    yield "second ywild";             //pause the function yeild

}
let g=generateit();
console.log(g.next());
console.log(g.next().value);              
console.log(g.next());