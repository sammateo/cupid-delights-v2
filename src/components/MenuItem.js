import React from "react";
import { formatter } from "./formatter";
import { expressShipping } from "../data/shippingdata";
import { nextDayShipping } from "../data/shippingdata";

const MenuItem = ({
	item,
	setMenuItems,
	menuItems,
	order,
	setOrder,
	shipping,
	setCheckout,
}) => {
	const evalShipping = (orderQuantity) => {
		setCheckout(false);
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
	const add = () => {
		const updatedItem = { ...item, quantity: item.quantity + 1 };
		const updatedMenu = menuItems.map((menuItem) =>
			menuItem.id === item.id ? updatedItem : menuItem
		);
		setMenuItems(updatedMenu);
		let orderQuantity = order.quantity + 1;
		let shippingval = evalShipping(orderQuantity);

		setOrder({
			...order,
			quantity: orderQuantity,
			total: order.total + item.price,
			shipping: shippingval,
		});
		// setOrder({ ...order, total: order.total + item.price });
	};

	const sub = () => {
		if (item.quantity < 1) {
			return;
		}
		setCheckout(false);
		const updatedItem = {
			...item,
			quantity: item.quantity - 1,
		};
		const updatedMenu = menuItems.map((menuItem) =>
			menuItem.id === item.id ? updatedItem : menuItem
		);
		setMenuItems(updatedMenu);
		let orderQuantity = order.quantity - 1;
		let shippingval = evalShipping(orderQuantity);
		setOrder({
			...order,
			quantity: order.quantity - 1,
			total: order.total - item.price,
			shipping: shippingval,
		});
	};
	return (
		<div className="menuitem">
			<p className="price">{formatter.format(item.price)}</p>
			<p>{item.name}</p>
			{/* <p>{item.quantity}</p> */}
			<div className="buttons">
				<button onClick={add}>+</button>
				<button onClick={sub}>-</button>
			</div>
		</div>
	);
};

export default MenuItem;
