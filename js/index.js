var buttons = document.querySelectorAll('.button'); 

function addKal(valor)
{
	kalkulator.kal.value += valor;
}

function getKal(){
	return kalkulator.kal.value;
}

function clearKal(){
	kalkulator.kal.value = "";
}

for(var i = 0; i < buttons.length; i++){

	if(buttons[i].textContent == "C")
	{
		buttons[i].addEventListener("click", function(){
			clearKal();
		});
	}
	
	else if(buttons[i].textContent == "CE")
	{
		buttons[i].addEventListener("click", function(){
			valor = getKal().slice(0, -1);
			kalkulator.kal.value = valor;
		});		
	}
	
	else if(buttons[i].textContent == "=")
	{
		buttons[i].addEventListener("click", function(){
			kalkulator.kal.value = eval(getKal());
		});			
	}
	
	else
	{
		buttons[i].addEventListener("click", function(){
			addKal(this.textContent);
		});
	}
	
}