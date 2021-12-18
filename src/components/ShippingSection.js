import React from "react";
import ShippingTile from "./ShippingTile";
import { expressShipping } from "../data/shippingdata";
import { nextDayShipping } from "../data/shippingdata";

const ShippingSection = () => {
	return (
		<div className="shippingcontainer">
			<ShippingTile details={expressShipping} type={"Express Shipping"} />
			<ShippingTile
				details={nextDayShipping}
				type={"Guaranteed Next Day Shipping"}
			/>
		</div>
	);
};

export default ShippingSection;
