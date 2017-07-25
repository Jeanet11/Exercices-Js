$("#buttonForm").click(function(){
// on déclare 3 variables correspondant aux input 
	var a = $("#input1").val();
	

	var b = $("#input2").val();


	var ope = $("#selectOperation").val();
	


function addition(arg1, arg2) {
	return parseInt(arg1) + parseInt(arg2);
}

function soustraction(arg1, arg2) {
	return parseInt(arg1) - parseInt(arg2);
}

function multiplication(arg1, arg2) {
	return parseInt(arg1) * parseInt(arg2);
}


function divide(arg1, arg2) {
	if(arg2 != 0) {
		return parseInt(arg1) / parseInt(arg2);
	}
	 {
		return "error";
	}
}

if (ope === "+") {
	var result = addition(a, b);
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
//on affiche le résultat de l'opération dans une balise html dédiée
$("#result").text(result);

})


