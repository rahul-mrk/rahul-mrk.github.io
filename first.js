

function printAdd(){
	var fnumber = document.getElementById('first').value;
	var lnumber = document.getElementById('last').value;
	const sum = parseInt(fnumber) + parseInt(lnumber)
	console.log(sum);
}
function printSubtract(){
	var fnumber = document.getElementById('first').value;
	var lnumber = document.getElementById('last').value;
	console.log(fnumber - lnumber);
}
function printmultiply(){
	var fnumber = document.getElementById('first').value;
	var lnumber = document.getElementById('last').value;
	const multiply = fnumber * lnumber;
	console.log(multiply);
}
function printdivision(){
	const fnumber = document.getElementById('first').value;
	const lnumber = document.getElementById('last').value;
	const division = fnumber / lnumber;
	console.log(division);
}