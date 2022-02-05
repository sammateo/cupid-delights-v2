import React from "react";
import emailjs from "emailjs-com";
import { init } from "emailjs-com";
import { formatter } from "./formatter";
init("user_I8maVpumJJ5NPgSnOdsDM");
const Checkout = ({ menuItems, order }) => {
	let body = `Order:${menuItems.map(
		(item) =>
			`\n${item.quantity} of ${item.name} @ ${formatter.format(item.price)} |`
	)} \nCost: ${formatter.format(order.total)}\nQuantity: ${
		order.quantity
	}\nShipping: ${formatter.format(order.shipping)}\nTotal: ${formatter.format(
		order.total + order.shipping
	)}`;

	body = body.replace(/,/g, "");

	function sendEmail(e) {
		e.preventDefault();
		alert("A confirmation email will be sent with payment details");
		emailjs
			.sendForm(
				"service_ghaveav",
				"template_2wf1e1f",
				e.target,
				"user_I8maVpumJJ5NPgSnOdsDM"
			)
			.then(
				(result) => {
					console.log(result.text);
				},
				(error) => {
					console.log(error.text);
				}
			);
	}

	return (
		<div>
			<form className="shippingForm" onSubmit={sendEmail}>
				<p id="form">Shipping</p>
				<label>Name</label>
				<input type="text" name="to_name" placeholder="Name" required />
				<label>Phone Number</label>
				<input
					type="tel"
					name="contact_number"
					placeholder="Phone Number"
					required
				/>
				<label>Email</label>
				<input type="email" name="to_email" placeholder="Email" required />
				<label>Address</label>
				<input type="text" name="address" placeholder="Address" required />
				<label>Postcode</label>
				<input type="text" name="postal" placeholder="Postcode" required />
				<label>Country</label>
				<input type="text" name="country" placeholder="Country" required />
				<label>Order</label>
				<textarea name="message" value={body} readOnly />
				<label>Additional Info</label>
				<textarea name="addInfo" placeholder="Notes for order" />
				<button type="submit" value="Send" className="ShippingButton">
					Submit
				</button>
			</form>
		</div>
	);
};

export default Checkout;
