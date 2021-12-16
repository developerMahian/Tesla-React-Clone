import React from "react";
import Section from "./Section";

function Home() {
	return (
		<>
			<Section heading="Model S" bgImg="model-s.jpg" downArrow={true} />
			<Section heading="Model Y" bgImg="model-y.jpg" />
			<Section heading="Model 3" bgImg="model-3.jpg" />
			<Section heading="Model X" bgImg="model-x.jpg" />
			<Section
				heading="Solar Panels"
				smHeading={true}
				description="Lowest Cost Solar Panels in America"
				bgImg="solar-panel.jpg"
				leftBtn="order now"
				rightBtn="learn more"
			/>
			<Section
				heading="Solar Roof"
				description="Produce Clean Energy From Your Roof"
				bgImg="solar-roof.jpg"
				leftBtn="order now"
				rightBtn="learn more"
			/>
			<Section
				heading="Accessories"
				description={null}
				bgImg="accessories.jpg"
				leftBtn="Shop now"
				rightBtn={false}
			/>
		</>
	);
}

export default Home;
