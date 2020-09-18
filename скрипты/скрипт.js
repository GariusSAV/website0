window.onload = init;

function init() {
	var jeans = document.getElementById("джинсы");
	jeans.onmouseenter = bigImage0;
	jeans.onmouseleave = normalImage0;
	var pants = document.getElementById("брюки");
	pants.onmouseenter = bigImage1;
	pants.onmouseleave = normalImage1;
	var costumes = document.getElementById("костюмы");
	costumes.onmouseenter = bigImage2;
	costumes.onmouseleave = normalImage2;
	var bikes = document.getElementById("байки");
	bikes.onmouseenter = bigImage3;
	bikes.onmouseleave = normalImage3;
	var shirts = document.getElementById("рубашки");
	shirts.onmouseenter = bigImage4;
	shirts.onmouseleave = normalImage4;
	var jackets = document.getElementById("куртки");
	jackets.onmouseenter = bigImage5;
	jackets.onmouseleave = normalImage5;
	var tshirts = document.getElementById("майки");
	tshirts.onmouseenter = bigImage6;
	tshirts.onmouseleave = normalImage6;
}

function message() {
	alert("36 - 54 размеры");
}

function bigImage0() {
	var image = document.getElementById("bigImg0");
	image.style.display = "initial";
}

function normalImage0() {
	var bigImg = document.getElementById("bigImg0");
	bigImg.style.display = "none";
}

function bigImage1() {
	var image = document.getElementById("bigImg1");
	image.style.display = "initial";
}

function normalImage1() {
	var bigImg = document.getElementById("bigImg1");
	bigImg.style.display = "none";
}

function bigImage2() {
	var image = document.getElementById("bigImg2");
	image.style.display = "initial";
}

function normalImage2() {
	var bigImg = document.getElementById("bigImg2");
	bigImg.style.display = "none";
}

function bigImage3() {
	var image = document.getElementById("bigImg3");
	image.style.display = "initial";
}

function normalImage3() {
	var bigImg = document.getElementById("bigImg3");
	bigImg.style.display = "none";
}

function bigImage4() {
	var image = document.getElementById("bigImg4");
	image.style.display = "initial";
}

function normalImage4() {
	var bigImg = document.getElementById("bigImg4");
	bigImg.style.display = "none";
}

function bigImage5() {
	var image = document.getElementById("bigImg5");
	image.style.display = "initial";
}

function normalImage5() {
	var bigImg = document.getElementById("bigImg5");
	bigImg.style.display = "none";
}

function bigImage6() {
	var image = document.getElementById("bigImg6");
	image.style.display = "initial";
}

function normalImage6() {
	var bigImg = document.getElementById("bigImg6");
	bigImg.style.display = "none";
}



