import React, { useState } from "react";
import { menu } from "../data/menudata";
import MenuItem from "./MenuItem";
import SelectShipping from "./SelectShipping";
import Cart from "./Cart";
import Checkout from "./Checkout";
const Menu = () => {
	const [menuItems, setMenuItems] = useState(menu);
	const [shipping, setShipping] = useState("express");
	const [order, setOrder] = useState({
		total: 0,
		quantity: 0,
		shipping: 0,
	});
	const [checkout, setCheckout] = useState(false);
	const checkoutFunction = () => {
		order.quantity >= 5 && order.quantity <= 40
			? setCheckout(true)
			: setCheckout(false) && alert("Minimum Order is 5 roti skins");
	};
	let logosize = 100;
	return (
		<div className="menu">
			<img
				src="/logo.jpeg"
				style={{ borderRadius: "50%", marginTop: "5px" }}
				width={logosize}
				height={logosize}
				alt="logo"
			></img>

			<h3>Order Here</h3>
			<p style={{ color: "red" }}>Note:</p>

			<p>Minimum Order is 5 roti skins</p>
			<p>Shipping done on Tuesdays</p>
			<p>Buss Up Shot contains dairy products</p>

			{menuItems.map((item) => (
				<MenuItem
					key={item.id}
					item={item}
					setMenuItems={setMenuItems}
					menuItems={menuItems}
					order={order}
					setOrder={setOrder}
					shipping={shipping}
					setCheckout={setCheckout}
				/>
			))}

			<SelectShipping
				setShipping={setShipping}
				order={order}
				setOrder={setOrder}
			/>

			<Cart menuItems={menuItems} order={order} />
			<button className="ShippingButton" onClick={checkoutFunction}>
				Checkout
			</button>
			{checkout && <Checkout menuItems={menuItems} order={order} />}
		</div>
	);
};

export default Menu;
