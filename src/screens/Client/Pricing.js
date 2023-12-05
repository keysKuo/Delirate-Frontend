import React from "react";
import { Container, Divider } from "semantic-ui-react";
import PricingTable from "../../components/Client/PricingTable";
import temp from "../../static/business.png";
import temp2 from "../../static/business2.png";

export default function PricingScreen() {
	return (
		<>
			<Container
				style={{ width: "70%", marginTop: "150px" }}
				textAlign="center"
			>
				<h1 style={{ fontSize: "2.5rem" }}>
					Create the decentralized online store for your creative
					business
				</h1>
				<Divider style={{ margin: "20px 0" }} />
			</Container>
			<Container style={{ width: "50%" }}>
				<p style={{ fontSize: "1.2rem" }}>
					Get online with our easy store builder, website themes for
					artists and creators, and expert customer support. By
					signing up, you’ll be supporting an indie business that
					cares about you.
				</p>
				<button className="btn btn-success bg-x">Get Started</button>
			</Container>
			<Container style={{ width: "90%", marginTop: "60px" }}>
				<PricingTable />
			</Container>

			<Container style={{ width: "60%", marginTop: "100px" }}>
				<p style={{ fontSize: "1.2rem" }}>ROYALTY-FREE - WORRY-FREE</p>

				<p style={{ fontSize: "2rem" }}>
					All content published during a trial or active subscription
					will stay cleared forever.
				</p>
			</Container>

			<div
				style={{ marginTop: "100px" }}
				className="d-flex flex-column container"
			>
				<div className="d-flex w-100 flex-row justify-content-between">
					<div className="col-md-7 col-sm-12  ">
						<img src={temp} />
					</div>

					<div className="d-flex flex-column align-items-center justify-content-center text-left px-5 py-2">
						<span className="d-block text-uppercase intro-slider-title h2">
							There’s a plan for everyone
						</span>

						<p className="d-block">
							Just getting started? Turning side gigs into main
							gigs? Got more advanced needs such as monetizing
							multiple channels, working with clients or
							soundtracking tv shows and ads? Either way, we’ve
							got the perfect plan.
						</p>
					</div>
				</div>
			</div>

			<div className="d-flex flex-column container mt-5">
				<div className="d-flex w-100 flex-row justify-content-between">
					<div className="d-flex flex-column align-items-center justify-content-center text-left px-5 py-2">
						<span className="text-uppercase intro-slider-title h2">
							System Track everywhere
						</span>

						<p className="">
							The Commercial plan covers up to three channels per
							platform, meaning less back and forth when editing
							channels and more time to focus on telling your
							story.
						</p>
						<p>
							If you’re producing content for others, it’s easy to
							safelist content published on their channels.{" "}
						</p>
					</div>

					<div className="col-md-7 col-sm-12">
						<img src={temp2} />
					</div>
				</div>
			</div>
		</>
	);
}
