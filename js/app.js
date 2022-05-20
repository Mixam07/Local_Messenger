let i = 0;

function onClick1() {
	if (i == 0) {
		document.getElementById('hamburg').classList.add('open');
		document.getElementById('menu').classList.add('menu__open');
		i = 1;
	}else{
		document.getElementById('hamburg').classList.remove('open');
		document.getElementById('menu').classList.remove('menu__open');
		i = 0;
	}
}

function onClick2(){
	let select = document.getElementById('select').value;
	let text_value = document.getElementById('textarea').value;
    let name_value =  document.getElementById('select').value;
    let br = document.createElement("br");
   	let li = document.createElement("li");
   	let div = document.createElement("div");
    let text = document.createElement("div");
    let name = document.createElement("div");
	if (text_value == "") {
		alert("Введіть текст");
	}else{
		
		if (select == "None") {
			alert("Виберіть ім'я");
		}else{
   	        if (name_value == "Max") {
   	        	text.className = "screen__text__max";
                name.className = "screen__name__max";
   	        	li.className = "screen__max";
   	        	name.innerHTML =  document.getElementById('select').value + "<br/>";
                text.innerHTML =  document.getElementById('textarea').value;
   	        	div.appendChild(name);
   	            div.appendChild(text);
   	            li.appendChild(div);
   	            document.getElementById("ul").appendChild(li);
   	            document.getElementById("ul").appendChild(br);
   	            document.getElementById("textarea").value = "";
   	        }else if(name_value == "Tolya"){
   	        	text.className = "screen__text__tolya";
                name.className = "screen__name__tolya";
   	        	li.className = "screen__tolya";
   	        	name.innerHTML =  document.getElementById('select').value + "<br/>";
                text.innerHTML =  document.getElementById('textarea').value;
   	        	div.appendChild(name);
   	            div.appendChild(text);
   	            li.appendChild(div);
   	            document.getElementById("ul").appendChild(li);
   	            document.getElementById("ul").appendChild(br);
   	            document.getElementById("textarea").value = "";
   	        } 
		}
	}
}