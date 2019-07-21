
let range = document.getElementById("range");
let answer = document.getElementById("answer");
let clear = document.getElementById("clear");
let calculate = document.getElementById("calculate");

calculate.addEventListener("click", calculate_circular);
clear.addEventListener("click", clear_input);

function calculate_circular() {
	if(range.value){
		range.style.borderColor = "initial";
		answer.value = list_circular_prime(range.value) + "AM I HIRED?";
	}
	else {
		range.style.borderColor = "red";
	}
}

function clear_input() {
	range.value = answer.value = "";
}

//functions for circular prime
function is_prime(n) {
	if (n == 1) return false;
	for (let x = 2; x * x <= n; x++) {
		if (n % x == 0) return false;
	}
	return true;
}

function circular_prime(n) {
	let digits = n.toString().length - 1;
	let cp = n;
	while (is_prime(cp)) {
		let rm = cp % 10;
		let div = (cp / 10) | 0;
		cp = Math.pow(10, digits) * rm + div;
		if (cp == n) return true;
	}
	return false;
}

function list_circular_prime(l) {
	let array = [];
	let count = 0;
	for (let n = 1; n <= l; n++) {
		if (circular_prime(n)) {
			array.push(n);
			count++;
		}
	}
	return array;
}

