
// import some polyfill to ensure everything works OK
import "babel-polyfill"

// import bootstrap's javascript part
import 'bootstrap';

// import the style
import "./style.scss";

/*
  Put the JavaScript code you want below.
*/

import axios from 'axios';

async function getBeer(){
	let response = await axios.get("https://api.punkapi.com/v2/beers");
	console.log(response.data);
	for (let i = 0; i < 9; i++) {
		let beer = document.createElement("div");
		let beerImg = document.createElement("img");
		beerImg.setAttribute("width", "150px");
		beerImg.setAttribute("height", "500px");
		beerImg.setAttribute("src", response.data[i].image_url);
 		let para1 = document.createElement("p");
 		let text = document.createTextNode(response.data[i].name);
 		para1.appendChild(text);
 		let para2 = document.createElement("p");
 		text = document.createTextNode(response.data[i].first_brewed);
 		para2.appendChild(text);
 		let para3 = document.createElement("p");
 		text = document.createTextNode(response.data[i].tagline);
 		para3.appendChild(text);
 		console.log(para1, para2, para3);
 		beer.appendChild(beerImg);
 		beer.appendChild(para1);
 		beer.appendChild(para2);
 		beer.appendChild(para3);
 		document.querySelector(".beers").appendChild(beer);
	}
}

window.onload = function () {getBeer()};