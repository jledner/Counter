//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import { Home } from "./component/home.jsx";

//render your react application

var seconds = 0;
var counter;

const secondsCounter = () => {
	counter;
	seconds += 1;
	let secondsString = "000000" + seconds.toString();
	secondsString = secondsString.slice(-6);
	console.log(secondsString);
	var counter = {
		num1: secondsString.charAt(0),
		num2: secondsString.charAt(1),
		num3: secondsString.charAt(2),
		num4: secondsString.charAt(3),
		num5: secondsString.charAt(4),
		num6: secondsString.charAt(5),
	};
	ReactDOM.render(<Home counter={counter} />, document.querySelector("#app"));
};
setInterval(secondsCounter, 1000);

// 1) convert seconds to string
// 2) six zeros before first position
// 3) only grab the first six digits from the whole number
