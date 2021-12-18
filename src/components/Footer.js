import React from "react";

const Footer = () => {
	return (
		<div className="footer">
			<div>
				<h3>Contact Information</h3>
				<p>
					Call/Whatsapp:{" "}
					<span>
						<a href="https://wa.me/447432577502">+44 7432 577502</a>
					</span>
				</p>

				<p>
					Email:{" "}
					<span>
						<a href="mailto:cupidelights@gmail.com"> cupidelights@gmail.com</a>
					</span>
				</p>

				<a
					rel="noreferrer"
					target="_blank"
					href="https://www.facebook.com/Cupid-Delights-103544264841798/?tn-str=k*F"
				>
					Facebook
				</a>
				<br></br>
				<a
					href="https://www.instagram.com/cupidelights/?hl=en"
					target="_blank"
					rel="noreferrer"
				>
					<img src="/ig.png" width={20} height={20} alt="ig"></img>
				</a>
			</div>
			<div>
				<p>
					Cupid Delights aims to satisfy your taste buds &amp; give you a taste
					of "home" with our delicious roti skins delivered straight to your
					door via our swift postal service.
				</p>
			</div>
		</div>
	);
};

export default Footer;
