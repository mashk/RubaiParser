function showr(){
	var blank_rubai = document.getElementById("rubai").value
	
	var rubai = blank_rubai.replace(/[\n\r](?!\s)/gi,'').split(/\r?\n/);

	var formatted_rubai = {
		one		: rubai[0],
		two		: rubai[1],
		three	: rubai[2],
		four 	: rubai[3]
	}

	// document.getElementById('output').innerHTML = JSON.stringify(formatted_rubai, null, '\t');
	var element = document.createElement('p')
	var text = document.createTextNode(JSON.stringify(formatted_rubai, null, '\t'))
	element.appendChild(text)

	document.getElementById('output').appendChild(element)
}