import React from "react";
import styled from "styled-components";

import breakpoint from "../layout/ScreenBreakpoints";

function Section(props) {
	return (
		<div>
			<Wrap bgImg={props.bgImg}>
				<ItemText>
					<h1 id={props.smHeading && "solar-panels-heading"}>
						{props.heading}
					</h1>
					<p className="section-paragraph">{props.description}</p>
				</ItemText>

				<HomeButtons
					id={!props.rightBtn && "homeBtn-large-height"}
				>
					<OrderButtons>
						<LeftButton
							id={!props.rightBtn && "accessories-btn"}
						>
							{props.leftBtn}
						</LeftButton>
						{/* render RightButton only if rightBtn prop is passed */}
						{props.rightBtn && (
							<RightButton>{props.rightBtn}</RightButton>
						)}
					</OrderButtons>
					{/* render DownArrow only if downArrow prop is passed */}
					{props.downArrow && (
						<DownArrow src="/images/down-arrow.svg" />
					)}
				</HomeButtons>
			</Wrap>
		</div>
	);
}

Section.defaultProps = {
	description: (
		<div>
			Order Online for{" "}
			<a href="#" className="order-link">
				Touchless Delivery
			</a>
			;
		</div>
	),
	leftBtn: "custom order",
	rightBtn: "existing inventory",
};

export default Section;

const Wrap = styled.div`
	width: 100vw;
	height: 100vh;
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	background-image: ${(props) => `url(/images/${props.bgImg})`};
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

const ItemText = styled.div`
	padding-top: 15vh;
	text-align: center;
`;

const HomeButtons = styled.div`
	height: 14rem;
	display: flex;
	flex-direction: column;
`;

const OrderButtons = styled.div`
	display: flex;
	@media only screen and (max-width: 768px) {
		flex-direction: column;
	}

	align-items: center;
	justify-content: center;
	text-transform: uppercase;
`;

const LeftButton = styled.div`
	width: 26rem;
	height: 4rem;
	margin: 1rem;
	font-size: 1.25rem;
	font-weight: 600;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 999rem;
	color: white;
	background-color: rgba(23, 26, 32, 0.8);
	opacity: 0.9;
	cursor: pointer;
`;

const RightButton = styled(LeftButton)`
	color: black;
	background-color: white;
	opacity: 0.65;
`;

const DownArrow = styled.img`
	height: 4rem;
	margin: 2rem 0;
	animation: animateHomeArrow infinite 1.5s;
`;
