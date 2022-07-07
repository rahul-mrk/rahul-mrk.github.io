function process(){
	console.log('Hello World');
}

function goodmorning(){
	console.log('Good Morning All');
}

function display(){
	var fname = document.getElementById('firstName').value;
	var sname = document.getElementById('secondName').value;
	console.log(fname+sname);
}

function clone(){
	var frname = document.getElementById('firstName').value;
	document.getElementById('secondName').value = frname;
}

function clearAll(){
	document.getElementById('firstName').value = '';
	document.getElementById('secondName').value = '';
}

	//this function for reverse the text value
function reverse(){
	var fname = document.getElementById('firstName').value;
	var secName = document.getElementById('secondName').value;
	document.getElementById('firstName').value = secName;
	document.getElementById('secondName').value = fname;
}
	
	