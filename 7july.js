function submitt(){
	
	var no = document.getElementById('t1').value;
	var n = no;
	console.log(n);
	
}
function cleara(){
	var v = document.getElementById('t1').value;
	var n = 2*v;
	
	document.getElementById('result').textContent = 'Result is '+n;
}