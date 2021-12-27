import React, { useState } from "react";
import styled from "styled-components";

import screenSize from "../layout/ScreenBreakpoints";
import MobileNavigation from "./MobileNavigation";

function Header() {
	const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

	document.addEventListener("keydown", (e) => {
		if (e.key === "Escape" && isMobileMenuOpen) {
			setMobileMenuOpen(false);
		}
	});

	return (
		<header>
			<Container>
				<div className="nav-logo">
					<a href="./index.html">
						<img src="./images/logo.svg" />
					</a>
				</div>

				<div className="navigation nav-middle-menu">
					<ol>
						<li>
							<a href="#">modal s</a>
						</li>
						<li>
							<a href="#">modal 3</a>
						</li>
						<li>
							<a href="#">modal x</a>
						</li>
						<li>
							<a href="#">modal y</a>
						</li>
						<li>
							<a href="#">solar roofs</a>
						</li>
						<li>
							<a href="#">solar panels</a>
						</li>
					</ol>
				</div>

				<div className="navigation nav-right-menu">
					<ol>
						<span className="hide-right-menu">
							<li>
								<a href="#">shop</a>
							</li>
							<li>
								<a href="#">account</a>
							</li>
						</span>
						<li>
							<a
								href="#"
								onClick={(e) => {
									e.preventDefault();
									setMobileMenuOpen(true);
								}}
							>
								menu
							</a>
						</li>
					</ol>
				</div>

				<MobileNavigation
					stateVar={isMobileMenuOpen}
					stateFunc={setMobileMenuOpen}
				/>
			</Container>
		</header>
	);
}

export default Header;

const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	min-height: 54px;
	padding: 2rem 2.5rem;

	.nav-logo {
		padding-left: 2rem;
	}

	.nav-logo img {
		width: 12rem;
		height: 1.65rem;
	}

	.navigation li {
		display: inline-block;
	}

	.nav-middle-menu {
		margin-left: 5.5rem;
	}

	@media only screen and (max-width: ${screenSize.lg}) {
		.hide-right-menu,
		.nav-middle-menu {
			display: none;
		}
	}
`;
