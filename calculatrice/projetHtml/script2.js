
$("button").click(function(){
	var input = ($(this).attr('id').charAt(4));
	console.log(input);
	$("#result2").text(input);
	var tab = [];
	$('')
	tab.push(input),
	;
})




/*

	var a = $("#").val();
	

	var b = $("#input2").val();


	var ope = $("#selectOperation").val();
	


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