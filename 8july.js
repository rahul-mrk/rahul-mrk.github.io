function f1(){
	console.log('hiii');
	var t = document.getElementById('t1').value;
	document.getElementById('s1').textContent='Result is : '+t;
}

function f2(){
	var tex = 'Mango';
	tex = tex +'Banana';
	tex = tex + 'Orange';
	document.getElementById('s1').textContent = tex;
}

function f3(){
	var a = 1;
	a = a+3;
	a = a+1;
	a++;
	a=a+2;
	a=a +' is my lucky number';
	document.getElementById('s1').textContent = a;
}

function f4(){
	var a = 0;
	var t = 'Rahul ';
	var c = document.getElementById('t1').value;
	for (a=1; a<=c; a++){
		t=t+'<br>'+a+' x ' + ' 3 ' + ' = '  +(a*3);
		
	}
	document.getElementById('s1').innerHTML = t;
	console.log(t);
}
function f5(){
	var a=0;
	var t='Rahul';
	var c= document.getElementById('t1').value;
	var d= document.getElementById('t2').value;
	for(a=1; a<=d; a++){
		t = t + '<br>' + c + ' x ' + a + ' = ' + (c*a);
	}
	document.getElementById('s1').innerHTML = t;
	
}
	