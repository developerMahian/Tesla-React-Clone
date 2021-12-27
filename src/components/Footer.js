import React from "react";
import styled from "styled-components";

function Footer() {
	return (
		<FooterEl>
			<NavBar>
				<ul>
					<li>
						<a href="#">tesla &copy; 2021</a>
					</li>
					<li>
						<a href="#">privacy & legal</a>
					</li>
					<li>
						<a href="#">contact</a>
					</li>
					<li>
						<a href="#">careers</a>
					</li>
					<li>
						<a href="#">news</a>
					</li>
					<li>
						<a href="#">engage</a>
					</li>
					<li>
						<a href="#">locations</a>
					</li>
				</ul>
			</NavBar>
		</FooterEl>
	);
}

export default Footer;

const FooterEl = styled.footer`
	text-align: center;
	padding: 2.4rem 4rem;
`;

const NavBar = styled.nav`
	ul {
		display: flex;
		justify-content: center;
		gap: 1.6rem;
	}

	a {
		font-size: 1.2rem;
		font-weight: 500;
		text-transform: capitalize;
	}
`;
