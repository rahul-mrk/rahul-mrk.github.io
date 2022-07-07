function sorting(){
	var a = document.getElementById('t1').value;
	var b = document.getElementById('t2').value;
	
	if(a.length>b.length){
		document.getElementById('t1').value=b;
		document.getElementById('t2').value=a;
	}
}

function Dsce(){
	
	var c = document.getElementById('t1').value;
	var d = document.getElementById('t2').value;
	
	if(c.length<d.length){
		document.getElementById('t1').value=d;
		document.getElementById('t2').value=c;
	}
}