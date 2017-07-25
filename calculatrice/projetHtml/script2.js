/*var array = [];

$("button").click(function(){
	var input = ($(this).attr('id').charAt(4));
	
	$("#result2").text(input);
	
	
	array.push($(this).val());

})
*/
var array = [3, "*", 9];
if (array[1] === "+") {
	var result = parseInt(array[0]) + parseInt(array[2]);
	console.log(result);
}

if (array[1] === "-") {
	var result = parseInt(array[0]) - parseInt(array[2]);
	console.log(result);
}

if (array[1] === "*") {
	var result = parseInt(array[0]) * parseInt(array[2]);
	console.log(result);
}

if (array[1] === "/"  && array[2]!=0) {
	var result = parseInt(array[0]) / parseInt(array[2]);
	console.log(result);

}
/*
function addition(arg1, arg2) {
	return arg1 + arg2;
}

function soustraction(arg1, arg2) {
	return arg1- arg2;
}

function multiplication(arg1, arg2) {
	return arg1 * arg2;
}


function divide(arg1, arg2) {
	return arg1 / arg2;
}

if (ope === "+") {
	var result = addition(parseInt(a),parseInt(b));
}
else if (ope === "-") {
	var result = soustraction(a,b);
}

else if (ope === "*") {
	var result = multiplication(a,b);
}

else if (ope === "/") {
	var result = divide(a,b);
}

else {

	var result = "L'opérateur est incorrect";

}

$("#result").text(result);


})

*/
