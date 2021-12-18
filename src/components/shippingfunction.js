import { expressShipping, nextDayShipping } from "../data/shippingdata";

export const evalShipping = (orderQuantity, shipping) => {
	let shippingval = 0;
	if (orderQuantity < 5) {
		shippingval = 0;
	} else if (shipping === "express") {
		expressShipping.forEach((shipping) => {
			if (orderQuantity >= shipping.start && orderQuantity <= shipping.end) {
				shippingval = shipping.price;
			}
		});
	} else if (shipping === "nextDay") {
		nextDayShipping.forEach((shipping) => {
			if (orderQuantity >= shipping.start && orderQuantity <= shipping.end) {
				shippingval = shipping.price;
			}
		});
	}

	return shippingval;
};
