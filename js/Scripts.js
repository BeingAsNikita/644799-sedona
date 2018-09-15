var link = document.querySelector(".search-btn");
var popup = document.querySelector(".search-form");
	link.addEventListener("click", function(evt) {
	evt.preventDefault ();

	popup.classList.toggle("search-form-show");
});

//* счетчик *//

var minusAd = document.getElementById("adults-btn-minus");
var plusAd = document.getElementById("adults-btn-plus");
var numberAd = document.getElementById("adults");
var unitsAd = numberAd.value.replace(/\d/g, "");
	minusAd.onclick = function () { 
			numberAd.value = parseInt(numberAd.value)-1+unitsAd; 
};

	plusAd.onclick = function () {
		numberAd.value = parseInt(numberAd.value)+1+unitsAd;
	};
		

var minusCh = document.getElementById("children-btn-minus");
var plusCh = document.getElementById("children-btn-plus");
var numberCh = document.getElementById("children");
var unitsCh = numberCh.value.replace(/\d/g, '');
	minusCh.onclick = function () {
		numberCh.value = parseInt(numberCh.value)-1+unitsCh;
	};

	plusCh.onclick = function () {
		numberCh.value = parseInt(numberCh.value)+1+unitsCh;
	};