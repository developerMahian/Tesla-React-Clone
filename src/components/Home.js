import React from "react";

import Section from "./Section";

function Home() {
	return (
		<>
			<Section
				ID="model-s"
				heading="Model S"
				bgImg="model-s.jpg"
				downArrow={true}
			/>
			<Section ID="model-y" heading="Model Y" bgImg="model-y.jpg" />
			<Section ID="model-3" heading="Model 3" bgImg="model-3.jpg" />
			<Section ID="model-x" heading="Model X" bgImg="model-x.jpg" />
			<Section
				ID="solar-panels"
				heading="Solar Panels"
				smHeading={true}
				description="Lowest Cost Solar Panels in America"
				bgImg="solar-panel.jpg"
				leftBtn="order now"
				rightBtn="learn more"
			/>
			<Section
				ID="solar-roof"
				heading="Solar Roof"
				description="Produce Clean Energy From Your Roof"
				bgImg="solar-roof.jpg"
				leftBtn="order now"
				rightBtn="learn more"
			/>
			<Section
				ID="accessories"
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
