import React from "react";
import styled from "styled-components";

import screenSize from "../layout/ScreenBreakpoints";

function Section(props) {
	return (
		<Wrap bgImg={props.bgImg} id={props.ID}>
			<ItemText>
				<h1 id={props.smHeading && "solar-panels-heading"}>{props.heading}</h1>
				{/* conditioning for Accessories section */}
				{props.description && (
					<h2 className="section-sub-heading">{props.description}</h2>
				)}
			</ItemText>

			<HomeButtons id={!props.rightBtn && "homeBtn-large-height"}>
				<OrderButtons>
					<LeftButton id={!props.rightBtn && "accessories-btn"}>
						{props.leftBtn}
					</LeftButton>
					{/* render RightButton only if rightBtn prop is passed */}
					{props.rightBtn && <RightButton>{props.rightBtn}</RightButton>}
				</OrderButtons>
				{/* render DownArrow only if downArrow prop is passed */}
				{props.downArrow && <DownArrow src="/images/down-arrow.svg" />}
			</HomeButtons>
		</Wrap>
	);
}

Section.defaultProps = {
	description: (
		<div>
			Order Online for{" "}
			<a href="#" className="order-link">
				Touchless Delivery
			</a>
		</div>
	),
	leftBtn: "custom order",
	rightBtn: "existing inventory",
};

export default Section;

const Wrap = styled.section`
	width: 100vw;
	/* height: ${props.ID == "accessories" ? "80vh" : "100vh"}; */
	height: 100vh;
	background: ${(props) => `url(/images/${props.bgImg})`} center/cover no-repeat;
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
	@media only screen and (max-width: ${screenSize.sm}) {
		height: 18rem;
	}
	display: flex;
	flex-direction: column;
`;

const OrderButtons = styled.div`
	display: flex;
	@media only screen and (max-width: ${screenSize.sm}) {
		flex-direction: column;
	}
	align-items: center;
	justify-content: center;
	text-transform: uppercase;
`;

const LeftButton = styled.div`
	width: 26rem;
	@media only screen and (max-width: ${screenSize.sm}) {
		width: 90%;
		margin: 1rem auto;
	}
	height: 4rem;
	margin: 1rem;
	font-size: 1.25rem;
	font-weight: 500;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 999rem;
	color: white;
	background-color: rgba(23, 26, 32, 0.8);
	cursor: pointer;
`;

const RightButton = styled(LeftButton)`
	color: black;
	background-color: white;
	opacity: 0.75;
`;

const DownArrow = styled.img`
	height: 4rem;
	margin: 2rem 0;
	animation: animateHomeArrow infinite 1.5s;
`;
