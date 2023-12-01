import DividerPart from "../../components/Client/Divider";
import { Container, Grid } from "semantic-ui-react";
import { Image } from "react-ui";
import TokenDashboard from "../../components/Client/TokenDashboard";

import step1 from "../../static/search.png";
import step2 from "../../static/progress.png";
import step3 from "../../static/export.png";
import step4 from "../../static/shipping.png";
import step5 from "../../static/verification.png";

export default function HomeScreen() {
	return (
		<>
			<Container className="home-banner">
				<DividerPart />
			</Container>

			<Container className="mb-5 px-0">
				<TokenDashboard />
			</Container>

			<Container
				style={{
					width: "100%",
					height: "400px",
				}}
				className="bg-dark text-light"
			>
				<div style={{ height: "100%" }} className="center-box">
					{/* <Image style={{ width: '30%' }} src={logo} /> */}
					<Grid>
						<Grid.Column mobile={12} tablet={6} computer={3}>
							<Image
								style={{ width: "10vw", borderRadius: "50%" }}
								src={step1}
							/>
							<Container
								style={{ width: "80%", marginTop: "10px" }}
							>
								Choose which products you want to enroll.
							</Container>
						</Grid.Column>
						<Grid.Column mobile={12} tablet={6} computer={3}>
							<Image
								style={{ width: "10vw", borderRadius: "50%" }}
								src={step2}
							/>
							<Container
								style={{ width: "80%", marginTop: "10px" }}
							>
								Apply Delirate codes to your selected products.
							</Container>
						</Grid.Column>
						<Grid.Column mobile={12} tablet={6} computer={3}>
							<Image
								style={{ width: "10vw", borderRadius: "50%" }}
								src={step3}
							/>
							<Container
								style={{ width: "80%", marginTop: "10px" }}
							>
								Products will be returned from retailer to
								warehouse.
							</Container>
						</Grid.Column>
						<Grid.Column mobile={12} tablet={6} computer={3}>
							<Image
								style={{ width: "10vw", borderRadius: "50%" }}
								src={step4}
							/>
							<Container
								style={{ width: "85%", marginTop: "10px" }}
							>
								Delirate codes are scanned to ensure only
								authentic units are shipped.
							</Container>
						</Grid.Column>
						<Grid.Column mobile={12} tablet={6} computer={3}>
							<Image
								style={{ width: "10vw", borderRadius: "50%" }}
								src={step5}
							/>
							<Container
								style={{ width: "85%", marginTop: "10px" }}
							>
								Customers scan to confirm authenticity,
								regardless of where they purchase.
							</Container>
						</Grid.Column>
					</Grid>
				</div>
			</Container>

			<Container className="mt-5 w-75">
				<div className="centerbox mb-5">
					<h1 style={{ fontSize: "3rem", marginBottom: "50px" }}>
						See results with Delirate
					</h1>
					<p style={{ fontSize: "1.5rem" }}>
						Delirate uses secure, unique codes that identify
						individual units, stop counterfeits from reaching
						customers, improve customer engagement, and give brands
						valuable insights to help optimize supply chains.
					</p>
				</div>

				<Container textAlign="justified" className="w-100">
					<Grid columns={2} relaxed="very">
						<Grid.Column>
							{/* <Image src="https://m.media-amazon.com/images/G/01/brandregistry/abpm_trh1_551122.png" /> */}
							<div className="center-box w-100">
								<div className="ratio ratio-16x9 mt-2">
									<iframe
										src="https://player.vimeo.com/video/890052981?badge=0&amp;quality_selector=0&amp;player_id=0&amp;app_id=58479&amp;title=0&amp;portrait=0&amp;byline=0"
										frameborder="0"
										allow="autoplay; fullscreen; picture-in-picture"
										width="640"
										height="360"
										style={{
											height: "auto",
											width: "100%",
											aspectRatio: "640 / 360",
										}}
										allowfullscreen
										controls="false"
									></iframe>
								</div>
							</div>
						</Grid.Column>
						<Grid.Column>
							<h4 style={{ fontWeight: "700" }}>
								Verify product authenticity
							</h4>
							<p style={{ fontSize: "1em" }}>
								Ensure that only authentic units are shipped to
								customers. Whether fulfilled by us or shipped
								directly by selling partners, products cannot be
								listed on us or shipped without valid Delirate
								codes.
							</p>

							<h4 style={{ fontWeight: "700" }}>
								Engage with customers
							</h4>
							<p style={{ fontSize: "1em" }}>
								Connect with customers post-purchase, no matter
								where they bought your product. The Delirate
								Shopping app allow customers to scan Delirate
								codes to confirm authenticity and access content
								you provide.
							</p>

							<h4 style={{ fontWeight: "700" }}>
								Optimize your supply chain
							</h4>
							<p style={{ fontSize: "1em" }}>
								Gain additional insights on your items at the
								batch or lot level, helping you identify supply
								chain or other issues, diagnose their root
								cause, implement solutions, and improve products
								with minimal disruption to your business.
							</p>
						</Grid.Column>
					</Grid>
				</Container>
			</Container>

			{/* <p>Go to <Link to="/products">Product page</Link></p> */}
		</>
	);
}
