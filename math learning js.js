// Functions for interactive menu
function openNav() {
	document.getElementById("sidenav").style.width = "500px";
}

function closeNav() {
	document.getElementById("sidenav").style.width = "0";
}

var divisbtn = document.getElementById("divisbtn");

function divistest() {
	var dividend = document.getElementById("dividend").value;
	var divisor = parseFloat(document.getElementById("divisor").value);
	var output = document.getElementById("output");

	if (dividend % divisor === 0) {
		output.textContent = "Yes!";
	} else {
		output.textContent = "No!";
	}

}



divisbtn.addEventListener("click", divistest);

function qanda(qid, btnid, qval1, qval2) {
	var q = document.getElementById(qid);
	var btn = document.getElementById(btnid);
	var state = 0;
	
	function change() {
		if (state === 0) {
			q.innerHTML = qval2;
			btn.innerHTML = "Back To Question";
			state = 1;
		} else {
			q.innerHTML = qval1;
			btn.innerHTML = "See Answer";
			state = 0;
		}
	}
	
	btn.addEventListener("click", change);
	
}

qanda("pq1", "btnq1", "1. Name the numbers (between 1 and 10) that 96 are divisible by.", "A: 1, 2, 3, 4, 6, 8");
qanda("pq2", "btnq2", "2. Name the numbers (between 1 and 10) that 7 are divisible by.", "A: 1, 7");
qanda("pq3", "btnq3", "3. Name the numbers (between 1 and 10) that 70 are divisible by.", "A: 1, 2, 5, 7, 10");
qanda("pq4", "btnq4", "4. Name the numbers (between 1 and 10) that 235.3 are divisible by. ", "A: None!");

qanda("pq5", "btnq5", "1. Find the factors of 19.", "A: 1, 19");
qanda("pq6", "btnq6", "2. Find the factors of 25.", "A: 1, 25, 5");
qanda("pq7", "btnq7", "3. Find the factors of 11.", "A: 1, 11");
qanda("pq8", "btnq8", "4. Find the factors of 90.", "A: 1, 90, 2, 45, 3, 30, 5, 18, 6, 15, 9, 10");

qanda("pq9", "btnq9", "1. Is 23 prime?", "A: Yes!");
qanda("pq10", "btnq10", "2. Is 25 prime?", "A: No!");
qanda("pq11", "btnq11", "3. Is 121 prime?", "A: No!");
qanda("pq12", "btnq12", "4. Is 23,413,221 prime?", "A: No!");

qanda("pq13", "btnq13", "1. Prime factorize 25.", "A: 5 x 5");
qanda("pq14", "btnq14", "2. Prime factorize 19.", "A: Just 19. 19 is already prime.");
qanda("pq15", "btnq15", "3. Prime factorize 90.", "A: 3 x 3 x 2 x 5");
qanda("pq16", "btnq16", "4. Prime factorize 256.", "A: 2 x 2 x 2 x 2 x 2 x 2 x 2 x 2");

