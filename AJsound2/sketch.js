'use strict';

var bacteria;
var i;
var x;
var y;
var img;
var one;
var two;
var three;
var adlib;

var col = 0;
var value = 1;
var sike = 1;

function preload() {
	one = loadSound("data/straightup.wav");
	two = loadSound("data/skrt.wav");
	three = loadSound("data/itslit.mp3");
	img = loadImage("data/scott.png");
}

function setup() {
	createCanvas(600, 600);
	bacteria = new Array(100);
	for (var i = 0; i < bacteria.length; i++) {
		bacteria[i] = new Bacteria(random(301), random(301), col);
	}
}

function draw() {
	background(255);
	while (i < 10) {
		bacteria.push(new Bacteria(random(301), random(301), col));
		i++;
	}
	for (var i = 0; i < bacteria.length; i++) {
		bacteria[i].move(sike);
		bacteria[i].show(img);
	}
}

function keyPressed() {
	if (key == '1') {
		sike = 1;
		adlib = 0;
		while (adlib < 1) {
			one.play();
			adlib = 1;
		}
	}
	if (key == '2') {
		sike = 2;
		adlib = 0;
		while (adlib < 1) {
			two.play();
			adlib = 1;
		}
	}
	if (key == '3') {
		sike = 3;
		adlib = 0;
		while (adlib < 1) {
			three.play();
			adlib = 1;
		}
	}
}
///////////////////////////////////////////////////////////////////////////

class Bacteria {
	constructor(x, y, col, img) {
		this.x = x;
		this.y = y;
		this.col = col;
		this.img = img;
		this.sike = sike;
	}
	move(sike) {
		//var oliver = atan((mouseY - y) / (mouseX - x));
		var oliver = Math.PI * 2;
		if (sike == 1) {
			this.x += random(-5, 5);
			this.y += random(-5, 5);
			if (mouseX < this.x) {
				this.x -= cos(oliver) * 1;
				this.y -= sin(oliver) * 1;
			} else {
				this.x += cos(oliver) * 1;
				this.y += sin(oliver) * 1;
			}
		}
		if (sike == 2) {
			this.x += random(-10, 10);
			this.y += random(-10, 10);
			if (mouseX < this.x) {
				this.x -= cos(oliver) * 2;
				this.y -= sin(oliver) * 2;
			} else {
				this.x += cos(oliver) * 2;
				this.y += sin(oliver) * 2;
			}
		}

		if (sike == 3) {
			this.x += random(-20, 20);
			this.y += random(-20, 20);
			if (mouseX < x) {
				this.x -= cos(oliver) * 1;
				this.y -= sin(oliver) * 1;
			} else {
				this.x += cos(oliver) * 1;
				this.y += sin(oliver) * 1;
			}
		}
	}
	show(img) {
		image(img, this.x, this.y, 70, 70);
	}
}
