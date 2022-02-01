import React from "react";
import PropTypes from "prop-types";

//create your first component

export const Home = ({ counter }) => {
	return (
		<div className="container justify-content-center row">
			<div className="bg-dark text-white d-inline-flex ">
				<div className="icon col-1 mx-2">
					<i className="far fa-clock"></i>
				</div>
				<div className="col-2 mx-2">{counter.num1}</div>
				<div className="col-2 mx-2">{counter.num2}</div>
				<div className="col-2 mx-2">{counter.num3}</div>
				<div className="col-2 mx-2">{counter.num4}</div>
				<div className="col-2 mx-2">{counter.num5}</div>
				<div className="col-1 mx-2">{counter.num6}</div>
			</div>
		</div>
	);
};
Home.propTypes = {
	num1: PropTypes.string,
	num2: PropTypes.string,
	num3: PropTypes.string,
	num4: PropTypes.string,
	num5: PropTypes.string,
	num6: PropTypes.string,
};
