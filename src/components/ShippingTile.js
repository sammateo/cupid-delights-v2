import React from "react";
import { formatter } from "./formatter";
const ShippingTile = ({ details, type }) => {
	return (
		<div className="shippingtile">
			<h4 className="shippingtype">{type}</h4>
			{details.map((info, index) => (
				<div key={index} className="pricelayout">
					<div>{info.range} </div>
					<div>{formatter.format(info.price)}</div>
				</div>
			))}
			{type === "Express Shipping" ? (
				<p>Contact us for larger orders</p>
			) : (
				<p>Guaranteed 12 noon next day</p>
			)}
		</div>
	);
};

export default ShippingTile;
