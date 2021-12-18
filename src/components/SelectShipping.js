import React from "react";
import { evalShipping } from "./shippingfunction";
const SelectShipping = ({ setShipping, order, setOrder }) => {
	const changeShipType = (e) => {
		// console.log(e.target.id);
		setShipping(e.target.id);
		let shippingval = evalShipping(order.quantity, e.target.id);
		setOrder({
			...order,
			shipping: shippingval,
		});
	};
	return (
		<div>
			<label htmlFor="nextDay">Shipping Type</label>
			<p>
				<input
					type="radio"
					id="express"
					name="nextDay"
					onChange={changeShipType}
				></input>
				<span>Express</span>
			</p>
			<p>
				<input
					type="radio"
					id="nextDay"
					name="nextDay"
					onChange={changeShipType}
				></input>
				<span>Guaranteed Next Day</span>
			</p>
		</div>
	);
};

export default SelectShipping;
