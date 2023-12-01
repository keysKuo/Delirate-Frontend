import React from "react";
import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";
import slide1 from "../../static/SUD Games Store.png";
import slide2 from "../../static/SUD Books Store.png";
import slide3 from "../../static/SUD Art Supplies.png";
import slide4 from "../../static/SUD Furniture.png";
import slide5 from "../../static/SUD Cakes.png";
import { Link } from "react-router-dom";

export default function ExamplesScreen() {
	return (
		<>
			<div className="example-intro-container container mt-5">
				<div className="example-intro-header">
					<p className="intro-title">Our Examples</p>
					<h1 className="intro-heading">
						See how customers use{" "}
						<strong
							style={{ marginLeft: "-2px" }}
							className="text-green"
						>
							Delirate
						</strong>
					</h1>
					<p style={{ fontSize: "16px" }}>
						Delirate emerges as a groundbreaking decentralized
						application, redefining the way we think about online
						interactions and transactions. Built on the robust
						foundation of blockchain technology, Delirate offers an
						unparalleled level of security, transparency, and
						efficiency.
					</p>
				</div>

				<div className="ratio ratio-16x9 w-50 mx-3">
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

			<div className="d-flex flex-column container">
				<div className="d-flex w-100 flex-row justify-content-between">
					<MDBCarousel style={{ width: "155%" }} dark fade autoPlay>
						<MDBCarouselItem
							className="w-100 d-block"
							itemId={1}
							src={slide3}
							alt="Art Supplies"
						></MDBCarouselItem>
						<MDBCarouselItem
							className="w-100 d-block"
							itemId={2}
							src={slide1}
							alt="Games Store"
						></MDBCarouselItem>

						<MDBCarouselItem
							className="w-100 d-block"
							itemId={3}
							src={slide2}
							alt="Books Store"
						></MDBCarouselItem>
						<MDBCarouselItem
							className="w-100 d-block"
							itemId={4}
							src={slide4}
							alt="Furniture Store"
						></MDBCarouselItem>
						<MDBCarouselItem
							className="w-100 d-block"
							itemId={5}
							src={slide5}
							alt="Bakery"
						></MDBCarouselItem>
					</MDBCarousel>

					<div className="d-flex flex-column text-left px-5 py-2">
						<span className="text-uppercase intro-slider-title">
							FEATURED PROJECTS
						</span>
						<h1 style={{ marginLeft: '-5px'}} className="intro-heading">Design Templates</h1>
						<p className="">
							SUD build a creative team, Underated, needed to
							scale to keep up with the company's rapid growth.
							They required a solution that could quickly act as
							an extension of their team.
						</p>
					</div>
				</div>
			</div>

			<div
				style={{ marginTop: "100px" }}
				className="d-flex flex-row container justify-content-between"
			>
				<div className="example-item">
					<Link to="https://sud-gamestore.my.canva.site/sud-games">
						<img src={slide1} />
					</Link>
					<div className="example-body">
						<p className="example-name text-green">
							Games Store Template
						</p>
						<p className="example-desc">Website</p>
					</div>
				</div>

				<div className="example-item">
					<Link
						target="blank"
						to="https://sud-gamestore.my.canva.site/sud-books-store"
					>
						<img src={slide2} />
					</Link>
					<div className="example-body">
						<p className="example-name text-green">
							Books Store Template
						</p>
						<p className="example-desc">Website</p>
					</div>
				</div>

				<div className="example-item">
					<Link
						target="blank"
						to="https://sud-gamestore.my.canva.site/sud-art-supplies"
					>
						<img src={slide3} />
					</Link>
					<div className="example-body">
						<p className="example-name text-green">
							Art Supplies Template
						</p>
						<p className="example-desc">Website</p>
					</div>
				</div>
			</div>

			<div className="d-flex flex-row container justify-content-between">
				<div className="example-item">
					<Link
						target="blank"
						to="https://sud-gamestore.my.canva.site/sud-cakes"
					>
						<img src={slide5} />
					</Link>
					<div className="example-body">
						<p className="example-name text-green">
							Bakery Template
						</p>
						<p className="example-desc">Website</p>
					</div>
				</div>

				<div className="example-item">
					<Link
						target="blank"
						to="https://sud-gamestore.my.canva.site/sud-furniture"
					>
						<img src={slide4} />
					</Link>
					<div className="example-body">
						<p className="example-name text-green">
							Furniture Store Template
						</p>
						<p className="example-desc">Website</p>
					</div>
				</div>
			</div>
		</>
	);
}
