import React from "react";
import { formatter } from "./formatter";
const Cart = ({ menuItems, order }) => {
	return (
		<div>
			{order.quantity > 0 ? <h3>Cart</h3> : <h3>Cart Empty</h3>}
			{menuItems.map(
				(item) =>
					item.quantity > 0 && (
						<div key={item.id} className="cartitem">
							<p>{item.name}</p>
							<p>Quantity: {item.quantity}</p>
							<p>Price: {formatter.format(item.price)}</p>
						</div>
					)
			)}
			{order.quantity > 0 && (
				<div className="cartitem">
					<p>Total: {formatter.format(order.total)}</p>
					<p>Quantity: {order.quantity}</p>
					<p>Shipping: {formatter.format(order.shipping)}</p>
				</div>
			)}
		</div>
	);
};

export default Cart;
