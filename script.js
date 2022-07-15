let histori = [];
	function deleteItem(event) {
		let currentString = event.target.innerHTML;
		let index = histori.indexOf(currentString);
		histori.splice(index,1);
		localStorage.setItem("histori", JSON.stringify(histori));
		updatehistoriList();
	}
	function updatehistoriList() {
		historiList = document.getElementById("histori");
		historiList.innerHTML = "";
		for(let i=0; i<histori.length; i++){
			let item = document.createElement("li");
			item.addEventListener("click", deleteItem);
			item.innerHTML = histori[i];
			historiList.append(item);
		}
	}



	function calculate() {
		let number_1 = parseInt(document.getElementById("firstNumber").value);
		let number_2 = parseInt(document.getElementById("secondNumber").value);
		let myResult = document.getElementById("result");
		let operator = document.getElementById("operator").value;
		let resultString = "";


		if (operator == "+") {
			let result = number_1 + number_2;
			myResult.innerHTML = result;
			resultString = number_1 + "+" + number_2 + "=" + result;
		}
		if (operator == "-") {
			let result = number_1 - number_2;
			myResult.innerHTML = result;
			resultString = number_1 + "-" + number_2 + "=" + result;
		}
		if (operator == "*") {
			let result = number_1 * number_2;
			myResult.innerHTML = result;
			resultString = number_1 + "*" + number_2 + "=" + result;
		}
		if (operator == "/") {
			let result = number_1 / number_2;
			myResult.innerHTML = result;
			resultString = number_1 + "/" + number_2 + "=" + result;
		}
		histori.push(resultString);
		localStorage.setItem("histori", JSON.stringify(histori));
		updatehistoriList();

	}

	function loadhistori() {
		if (localStorage.getItem("histori") != null){
			histori = JSON.parse(localStorage.getItem("histori"));
		}else{
			histori = [];
		}updatehistoriList();
	}

	function deletehistori(){
		histori = [];
		localStorage.setItem("histori", JSON.stringify(histori));
		updatehistoriList();
	}



	document.getElementById("button").addEventListener("click", calculate);
	document.getElementById("delete").addEventListener("click", deletehistori);
	document.addEventListener("DOMContentLoaded", loadhistori);