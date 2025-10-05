import Logo from "../assets/images/Logo/Logo-portfolio.png";
import { navLinks } from "../../constants/index.js";
import { useState } from "react";

function Navbar() {
	const [menuOpen, setMenuOpen] = useState(false);
	const [isClosing, setIsClosing] = useState(false);

	const handleMenuToggle = () => {
		if (menuOpen) {
			setIsClosing(true);
			setTimeout(() => {
				setMenuOpen(false);
				setIsClosing(false);
			}, 800);
		} else {
			setMenuOpen(true);
		}
	};

	const handleLinkClick = () => {
		// Close the menu when a link is clicked
		if (menuOpen) {
			setIsClosing(true);
			setTimeout(() => {
				setMenuOpen(false);
				setIsClosing(false);
			}, 800);
		}
	};

	return (
		<>
			<div className="navbar-blur-backdrop"></div>
			<nav className="navbar">
				<div className="navbar-left">
					<p>2025.</p>
				</div>

				<div className="navbar-center">
					<a href="./">
						<img src={Logo} alt="logo" className="logo" />
					</a>
				</div>

				<div className="navbar-right">
					<button className={`menu-button ${menuOpen ? "active" : ""}`} onClick={handleMenuToggle}>
						Menu
						<div className="menu-icon">
							<span></span>
							<span></span>
							<span></span>
						</div>
					</button>
				</div>

				{menuOpen && (
					<div className={`desktop-menu ${isClosing ? "closing" : "open"}`}>
						<ul>
							{navLinks.map((link) => (
								<li key={link.id}>
									<a href={link.id} onClick={handleLinkClick}>
										{link.name}
									</a>
								</li>
							))}
						</ul>
					</div>
				)}
			</nav>
		</>
	);
}

export default Navbar;
