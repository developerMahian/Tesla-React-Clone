import React from "react";

import styled from "styled-components";
import CloseIcon from "@mui/icons-material/Close";

function MobileNavigation({stateVar, stateFunc}) {
	return (
		<>
			<MobileMenu closeBtn={stateVar}>
				<MobileCloseWrapper onClick={() => stateFunc(false)}>
					<CloseMenu />
				</MobileCloseWrapper>

				<ol className="mobile-menu">
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
			</MobileMenu>
			<MobileMenuBg
				closeBtn={stateVar}
				onClick={() => stateFunc(false)}
			/>
		</>
	);
}

export default MobileNavigation;

const MobileCloseWrapper = styled.div`
	display: flex;
	justify-content: end;
	padding: 1rem;
	margin-bottom: 2rem;
`;

const CloseMenu = styled(CloseIcon)`
	transform: scale(1.8);
	cursor: pointer;
`;

const MobileMenu = styled.div`
	position: absolute;
	top: 0;
	right: 0;
	width: 30rem;
	height: 100vh;
	padding: 2rem 3rem;
	background-color: white;
	box-shadow: -1rem 0 4rem rgba(0, 0, 0, 0.1);
	z-index: 100;
	transform: ${(props) =>
		props.closeBtn ? "translateX(0)" : "translateX(100%)"};
	transition: transform 0.3s ease-in-out;

	li {
		display: block;
		margin: 1rem 0;
	}

	a {
		display: block;
		transition: color 0.3s ease-in-out;
	}

	a::before {
		transform: translateY(-2rem);
	}

	a:hover::before {
		transform: translateY(0);
	}
`;

const MobileMenuBg = styled.div`
	position: fixed;
	inset: 0;
	width: 100vw;
	height: 100vh;
	z-index: 50;
	background-color: rgba(0, 0, 0, 0.3);
	-webkit-backdrop-filter: blur(4px);
	backdrop-filter: blur(4px);
	opacity: ${(props) => (props.closeBtn ? "1" : "0")};
	transform: ${(props) => (props.closeBtn ? "scale(1)" : "scale(0)")};
	transition: opacity 0.4s ease-in-out;
`;
