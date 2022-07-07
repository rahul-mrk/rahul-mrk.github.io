function interest(){
	var pri = document.getElementById('P').value;
	var rate = document.getElementById('r').value;
	var nti = document.getElementById('n').value;
	var time = document.getElementById('t').value;
	var d = rate/nti;
	var nt = nti*time;
	var fA = pri*(1+parseInt(d))^nt;
	document.getElementById('A').value=fA;
}