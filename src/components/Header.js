import React from "react";
import styled from "styled-components";
import CloseIcon from "@mui/icons-material/Close";

import screenSize from "../layout/ScreenBreakpoints";

function Header() {
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
							<a href="#">menu</a>
						</li>
					</ol>
				</div>

				<HamMenu>
					<HamCloseWrapper>
						<CloseMenu />
					</HamCloseWrapper>

					<ol className="ham-menu">
						<li>
							<a href="#">Existing Inventory</a>
						</li>
						<li>
							<a href="#">Used Inventory</a>
						</li>
						<li>
							<a href="#">Trade-In</a>
						</li>
						<li>
							<a href="#">Test Drive</a>
						</li>
						<li>
							<a href="#">Cybertruck</a>
						</li>
						<li>
							<a href="#">Roadster</a>
						</li>
						<li>
							<a href="#">Semi</a>
						</li>
						<li>
							<a href="#">Charging</a>
						</li>
						<li>
							<a href="#">Powerwall</a>
						</li>
						<li>
							<a href="#">Commercial Energy</a>
						</li>
						<li>
							<a href="#">Utilities</a>
						</li>
						<li>
							<a href="#">Find Us</a>
						</li>
						<li>
							<a href="#">Support</a>
						</li>
						<li>
							<a href="#">Investor Relations</a>
						</li>
					</ol>
				</HamMenu>
				<HamBg />
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

	.navigation a {
		color: var(--nav-link-color);
		font-size: 1.4rem;
		font-weight: 500;
		text-transform: capitalize;
		padding: 1rem 1.65rem;
		position: relative;
	}

	.navigation a::before {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		border-radius: 9999px;
		background-color: rgba(0, 0, 0, 0.07);
		opacity: 0;
		transform: translateX(-2rem);
		transition: all 0.3s ease-in-out;
		z-index: -1;
	}

	.navigation a:hover::before {
		opacity: 1;
		transform: translateX(0);
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

const HamMenu = styled.div`
	position: absolute;
	top: 0;
	right: 0;
	width: 30rem;
	height: 100vh;
	padding: 2rem 3rem;
	background-color: white;
	box-shadow: -1rem 0 4rem rgba(0, 0, 0, 0.1);
	overflow-y: scroll;
	z-index: 100;

	li {
		margin: 1rem 0;
	}

	a {
		display: block;
		font-size: 1.4rem;
		font-weight: 500;
		text-transform: capitalize;
		padding: 1rem 1.65rem;
		position: relative;
		transition: color 0.3s ease-in-out;
	}

	a::before {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		border-radius: 9999px;
		background-color: rgba(0, 0, 0, 0.07);
		opacity: 0;
		transform: translateY(-2rem);
		transition: all 0.3s ease-in-out;
		z-index: -1;
	}

	a:hover::before {
		opacity: 1;
		transform: translateY(0);
	}
`;

const HamCloseWrapper = styled.div`
	display: flex;
	justify-content: end;
	padding: 1rem;
	margin: 1rem 0 3rem 0;
`;

const CloseMenu = styled(CloseIcon)``;

const HamBg = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	z-index: 50;
	background-color: rgba(0, 0, 0, 0.3);
	-webkit-backdrop-filter: blur(4px);
	backdrop-filter: blur(4px);
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	inline-size: 120 vw;
	block-size: 120 vh;
`;
