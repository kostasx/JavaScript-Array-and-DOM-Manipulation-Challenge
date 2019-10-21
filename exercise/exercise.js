/* ARGUMENTS SHOULD NOT BE MUTATED */

/*
Write a function which, if the introduction paragraph has the class "highlight",
it will be removed; otherwise the class "highlight" is added.
*/
var toggleHighlight = function(){

}
// toggleHighlight(); //uncomment me to test


/*
Write a function which returns all text content of the introduction paragraph
*/
var getText = function(){

}
console.log( getText() ); //uncomment me to test

/*
Write a function which takes a string, and returns true if the introduction
paragraph contains that string, and false if it doesn't.
*/
var containsString = function( str ){

}
// console.log( containsString( "proident" ) ); // uncomment me to test: should return true
// console.log( containsString( "existence" ) ); // uncomment me to test: should return false

/*
Write a function which returns the value in the `firstName` text input
*/
var getFirstNameValue = function(){


}
// console.log( getFirstNameValue() ); //uncomment me to test


/*
Write a function which takes a string, `inputName`, and returns the value in the input which
has `inputName` as the name attribute
*/
var getValue = function(inputName){

}
// console.log( getValue( "firstName" ) ); //uncomment me to test
// console.log( getValue( "lastName" ) );  //uncomment me to test
// console.log( getValue( "email" ) );     //uncomment me to test


/*
Write a function which takes an object,`formState`, and a string, `inputName`,
and returns a copy of the object, but with an `inputName` key on the object
whose value is taken from the input element with that name.
*/
var updateStateValue = function (formState, inputName){


}

// console.log(
//     updateStateValue({ id: 10, nonce: 38573 }, "email" )
// ); //uncomment me to test

/*
Write a function which takes an object,`formState`, and an array of string
`inputNames`, and returns a copy of the object, which stores the values of each
input with name in `inputNames` array.
*/
var updateStateValues = function(formState, inputNames){

}
// console.log(
//     updateStateValues({ id: 10, nonce: 38573 }, [ "email", "lastName" ]) //uncomment me to test
// );


/*
Write a function which returns an **array** of values of inputs with a given class
*/
var getInputValues = function(className){

}
// console.log( "DEBUG", getInputValues( "test" ) ); //uncomment me to test


/*
Write a function, `generateUl`, which takes an array of strings, and returns a
`ul` htmlElement containing `li` elements for each array element. Each `li'
should contain the value of the array element.
*/
var generateUl = function(array){

}
// document.body.appendChild( generateUl([ "one", "two", "three" ]) ); //uncomment me to test