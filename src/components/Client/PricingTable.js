import React from "react";
import "../../assets/pricing.css";
import PricingContent from "./PricingContent";

const items = [
	["One image per product","Sell online in person", "Multiple payment options", "Shipment tracking"],
	[
		"Two images per product",
		"Use a custom domain",
        "Theme code editing",
		"Google Analytics",
        "Multiple payment options", 
		"Shipment tracking",
	],
	[
		"Five images per product",
		"Free customizable themes",
		"Use a custom domain",
        "Theme code editing",
		"Google Analytics",
		"Shipment tracking",
		"Offer discounts run promos",
        "Multiple payment options", 
		"Sales tax autopilot",
	],
];

const PricingTable = () => {
	return (
		<div className="">
			<div className="row">
				<div className="col-md-4 col-sm-6 col-xs-12">
					<div className="pricing-plan text-light">
						<div className="mb-3">
							<span className="pricing-title">Personal</span>
						</div>
						<div className="mb-3">
							<span className="pricing-amount">Always Free</span>
						</div>
						<PricingContent list={items[0]} />
						
					</div>
				</div>
				<div className="col-md-4 col-sm-6 col-xs-12">
					<div className="pricing-plan text-light">
						<div className="mb-3">
							<span className="pricing-title">
								Commercial
							</span>
						</div>
						<div className="mb-3">
							<span className="pricing-amount">$9.99 <span className="text-light h5">/month</span></span>
						</div>
						<PricingContent list={items[1]} />
						
					</div>
				</div>
				<div className="col-md-4 col-sm-6 col-xs-12">
					<div className="pricing-plan text-light">
						<div className="mb-3">
							<span className="pricing-title">
								Enterprise
							</span>
						</div>
						<div className="mb-3">
							<span className="pricing-amount">
								$29.99 <span className="text-light h5">/month</span>
							</span>
						</div>
						<PricingContent list={items[2]} />
						
					</div>
				</div>
			</div>
		</div>
	);
};

export default PricingTable;
