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
							<>
								<ShippingSection />
								<Menu />
								<Link to="/gallery">
									<button className="ShippingButton navBtn">To Gallery</button>
								</Link>
							</>
						}
					/>
					<Route
						path="/gallery"
						element={
							<>
								<Gallery />
								<Link to="/">
									<button className="ShippingButton navBtn">To Home</button>
								</Link>
							</>
						}
					/>
				</Routes>
				<Footer />
			</Router>
		</div>
	);
}

export default App;
