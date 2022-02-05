import Header from "./components/Header";
import ShippingSection from "./components/ShippingSection";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import Gallery from "./Gallery";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
	return (
		<div className="App">
			<Router>
				<Header />
				<Routes>
					<Route
						path="/"
						element={
							<div
								style={{
									background: 'url("/gallery/roll.jpg")',
									backgroundPosition: "center",
									backgroundRepeat: "no-repeat",
									backgroundSize: "cover",
									paddingBottom: "10px",
								}}
							>
								<ShippingSection />
								<Menu />
								<Link
									to="/gallery"
									style={{
										display: "block",
										width: "fit-content",
										margin: "auto",
									}}
								>
									<button className="ShippingButton navBtn">To Gallery</button>
								</Link>
							</div>
						}
					/>
					<Route
						path="/gallery"
						element={
							<div style={{ paddingBottom: "10px" }}>
								<Gallery />
								<Link
									to="/"
									style={{
										display: "block",
										width: "fit-content",
										margin: "auto",
									}}
								>
									<button className="ShippingButton navBtn">To Home</button>
								</Link>
							</div>
						}
					/>
				</Routes>
				<Footer />
			</Router>
		</div>
	);
}

export default App;
