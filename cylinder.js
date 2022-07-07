function areaVolume(){
	var rad = document.getElementById('Radius').value;
	var ht = document.getElementById('Height').value;
	var a = 2*3.14*rad*ht;
	var b = 2*3.14*(rad*rad);
	var v = 3.14*(rad*rad)*ht;
	var ar = parseInt(a)+parseInt(b);
	document.getElementById('area').value=ar;
	document.getElementById('volume').value=v;
}



