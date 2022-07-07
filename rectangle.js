function rectangle(){
	var w = document.getElementById('Width').value;
	var l = document.getElementById('length').value;
	var ar = w*l;
	console.log(ar);
	var p = 2*(parseInt(w)+parseInt(l));
	document.getElementById('Area').value =ar;
	document.getElementById('perimeter').value= p;
}