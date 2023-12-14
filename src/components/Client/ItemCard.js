import React, { useEffect } from "react";
import { useOutletContext } from "react-router-dom";

import {
	MDBContainer,
	MDBRow,
	MDBCol,
	MDBCard,
	MDBCardBody,
	MDBCardImage,
	MDBCardTitle,
	MDBIcon,
	MDBPopover,
	MDBPopoverBody,
} from "mdb-react-ui-kit";

import nearToken from "../../static/near.png";
import Reveals from "./Reveals";

const apiUrl = process.env.REACT_APP_API_URL || "http://192.168.1.7:8080";

function ItemCard({ items }) {
	const { setIsShowCart, cartItems, addToCart, updateQuantity } =
		useOutletContext();

	useEffect(() => {
		localStorage.setItem("cartItems", JSON.stringify(cartItems));
		// console.log(cartItems);
	}, [cartItems]);

	const AddToCart = (item) => {
		let newItem = {
			_id: item._id,
			store: item.distributor,
			model: item.model,
			sku: item.sku,
			image: item.image,
			price: item.price,
			quantity: 1,
		};

		// console.log(newItem);
		const foundIndex = cartItems.findIndex((element) => {
			return element.sku === newItem.sku;
		});

		if (foundIndex !== -1) {
			// updateQuantity(foundIndex, '+');
		} else {
			addToCart(newItem);
		}
		setIsShowCart(true);
	};

	return (
		<MDBContainer fluid className="mt-5 w-75">
			<MDBRow className="justify-content-center">
				{items.map((item, index) => {
					return (
						<MDBCol key={index} md="4" sm="12">
							<MDBCard className="text-black align-items-center hover-zoom">
								<MDBPopover
									tag="span"
									btnClassName="d-inline-block mb-0"
									btnChildren={
										<Reveals visible={apiUrl + "/uploads" + item.image} hidden={item.qrcode} />
									}
									
									placement="right"
									dismiss
								>
									<MDBPopoverBody	
										dangerouslySetInnerHTML={{
											__html: item.desc,
										}}
									></MDBPopoverBody>
								</MDBPopover>

								<MDBCardBody>
									<div className="text-center">
										<MDBCardTitle>{item.sku}</MDBCardTitle>
										<p className="text-muted mb-4">
											{item.model}
										</p>
									</div>
									<div>
										<div className="d-flex justify-content-between">
											<span>Buy with Near</span>
											<span>
												<span
													style={{
														color: "lightcoral",
														textDecoration:
															"line-through",
													}}
												>
													-10%
												</span>{" "}
												{Math.round(
													item.price * 0.9 * 100
												) / 100}
												<img
													alt=""
													className="pb-1"
													src={nearToken}
												/>
											</span>
										</div>
										<div className="d-flex justify-content-between">
											<span>Buy with USD</span>
											<span
												style={{
													paddingRight: "2.5px",
												}}
											>
												{item.price}$
											</span>
										</div>
										<div className="d-flex justify-content-between mb-2">
											<div className="ms-auto text-warning mt-1">
												<i class="fas fa-star"></i>
												<i class="fas fa-star"></i>
												<i class="fas fa-star"></i>
												<i class="fas fa-star"></i>
												<i class="fas fa-star"></i>
											</div>
										</div>
									</div>
									<div className="d-flex justify-content-center align-items-center total font-weight-bold mt-4">
										<button
											style={{
												backgroundColor: "#71B280",
											}}
											className="btn text-light mt-3"
											onClick={() => {
												AddToCart(item);
											}}
										>
											{/* <i className="fas fa-cart-shopping fa-lg"></i>{" "} */}
											Add to cart
										</button>
									</div>
								</MDBCardBody>
							</MDBCard>
						</MDBCol>
					);
				})}
			</MDBRow>
		</MDBContainer>
	);
}

export default ItemCard;
