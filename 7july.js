function submitt(){
	
	var no = document.getElementById('t1').value;
	var n = 2*no;
	console.log(n);
	
}
function cleara(){
	var v = document.getElementById('t1').value;
	var n = 2*v;
	document.getElementById('t1').value= n;
	document.getElementById('result').textContent = 'Result is '+n;
}