function areaPeri(){
	var rad = document.getElementById('radius').value;
	var are = (3.14*rad*rad);
	var peri = 2*3.14*rad;
	document.getElementById('area').value = are;
	document.getElementById('perimeter').value = peri;
	
}

/*Circle Area / Parameter
    Input = radius
    1 button - calculate Area and perimeter both
    Output = 2 txt box viz. 1 for area, 2 for perimeter
    Area = (PI=3.14) * r^2
    Perimeter = 2 (PI) r
	*/