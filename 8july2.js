function gets(){
	
var str = '<table>';
for(i=1; i<=9; i++){
	str = str +'<tr><td>Apple'+ i +'</td><tr>';
	
	}
	str = str + '</table>';
	
	document.getElementById('s1').innerHTML = str;
}

function gio(){
	console.log('fffffff');
	var num1 = document.getElementById('t1').value;
	var num2 = document.getElementById('t2').value;
	var str ='<table class="table table-hover" <tbody><thead class ="bg-warning">';
	
	for(i=parseInt(num1); i<=parseInt(num2); i++){
		str = str + '<tr><td>'+(i*1)+'</td><td>'+(i*2)+'</td><td>'+(i*3)+'</td></tr>';
	}
	str=str+'</thead></tbody></table>';
	document.getElementById('s1').innerHTML = str;
}
