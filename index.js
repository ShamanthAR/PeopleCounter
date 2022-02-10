function Increment() {
	var peopleCount = document.getElementById("Count");
	var count = peopleCount.innerText;
	count++;
	peopleCount.innerHTML = count;
}

function Add() {
	var peopleCount = document.getElementById("Count");
	var count = peopleCount.innerText;

	var Previous = (document.getElementById("previousEntries").innerHTML +=
		count + " - ");

	peopleCount.innerHTML = 0;
}
