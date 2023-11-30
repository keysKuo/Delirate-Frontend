import "../../assets/checkout.css";
import { MDBInput, MDBRadio, MDBIcon, MDBTextArea } from "mdb-react-ui-kit";
import logo from "../../static/airplaneshop2.png";
import { useOutletContext } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { Form } from "semantic-ui-react";	
import { Image } from "react-ui";

const apiUrl = process.env.REACT_APP_API_URL || "http://192.168.1.7:8080";

export default function CheckoutScreen() {
	const { cartItems, totalPrice } = useOutletContext();
	const [customer, setCustomer] = useState({
		name: "",
		email: "",
		phone: "",
		address: "",
		note: "",
	});
	const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("");
	const [requestedNearPayment, setRequestedNearPayment] = useState(false);
	const [qrcode, setQrcode] = useState("");
	const [orderId, setOrderId] = useState("");
	const [isLoading, setIsLoading] = useState(false);

	const handlePaymentMethodChange = (event) => {
		setSelectedPaymentMethod(event.target.value);
	};

	useEffect(() => {
		const fetchDataPayment = async () => {
			await axios.get(`${apiUrl}/order/check-payment/${orderId}`)
				.then(response => {
					const result = response.data;
					if(result.success) {
						setIsLoading(true);
						localStorage.removeItem('cartItems');
						setTimeout(() => {
							window.location.href = '/success'
						}, 1000)
					}
					console.log(result)
				})
				.catch(err => {
					console.log(err);
				})
		}
		
		
		setInterval(() => {
			if(requestedNearPayment) {
				fetchDataPayment()
			}
				
		}, 3000)

	}, [orderId, requestedNearPayment])


	const handleCheckout = () => {
		setIsLoading(true);
		const fetchDataCheckOut = async () => {
			await axios
				.post(apiUrl + "/checkout", {
					items: cartItems,
					store_id: "6558be56f9a4f960f57af04b",
					name: customer.name,
					email: customer.email,
					phone: customer.phone,
					address: customer.address,
					note: customer.note,
					total_price: totalPrice,
					payment_type: selectedPaymentMethod,
				})
				.then((response) => {
					const result = response.data;
					if (result.success) {
						
						if (selectedPaymentMethod !== "Crypto") {
							setTimeout(() => {
								setIsLoading(false);			
								window.location.href = result.url;
							}, 1000);
						} 
						else {
							setTimeout(() => {
								setIsLoading(false);
								setRequestedNearPayment(true);
								setQrcode(result.url);
								setOrderId(result.order_id)
							}, 1000);	
						}
					}
					console.log(result);
				})
				.catch((err) => {
					setTimeout(() => {
						setIsLoading(false);

						alert(err);
					}, 1000);
				});
		};

		fetchDataCheckOut();
	};

	return (
		<Form {...(isLoading && { loading: true })} style={{ boxShadow: 'none'}} className="checkout-page w-100">
			<div className="checkout-form w-100">
				<div className="checkout-wrap">
					<div className="row">
						<div className="checkout-main">
							<div className="checkout-header">
								<div className="text-center">
									<a href="#">
										<img
											style={{ width: "100%" }}
											src={logo}
										/>
									</a>
								</div>
							</div>

							<div className="checkout-content">
								<div className="row customer-info-container">
									<div className="col-md-6 col-sm-12">
										<section>
											<div className="section-header">
												<div className="layout-flex">
													<h2 className="section-title">
														Delivery information
													</h2>
												</div>
											</div>
											<div className="section-content">
												<div className="fieldset">
													<div className="field">
														<MDBInput
															wrapperClass="my-3"
															label="Full name"
															type="text"
															onChange={(e) =>
																setCustomer({
																	...customer,
																	name: e
																		.target
																		.value,
																})
															}
														/>
														<MDBInput
															wrapperClass="mb-4"
															label="Email"
															type="email"
															onChange={(e) =>
																setCustomer({
																	...customer,
																	email: e
																		.target
																		.value,
																})
															}
														/>
														<MDBInput
															wrapperClass="mb-4"
															label="Phone"
															type="text"
															onChange={(e) =>
																setCustomer({
																	...customer,
																	phone: e
																		.target
																		.value,
																})
															}
														/>
														<MDBInput
															wrapperClass="mb-4"
															label="Address"
															type="text"
															onChange={(e) =>
																setCustomer({
																	...customer,
																	address:
																		e.target
																			.value,
																})
															}
														/>
														<MDBTextArea
															label="Note"
															id="textAreaExample"
															rows={3}
															onChange={(e) =>
																setCustomer({
																	...customer,
																	note: e
																		.target
																		.value,
																})
															}
														/>
													</div>
												</div>
											</div>
										</section>
									</div>

									<div className="col-md-6 col-sm-12">
										<section>
											<div className="section-header">
												<div className="layout-flex">
													<h2 className="section-title">
														Payment method
													</h2>
												</div>
											</div>

											<div className="section-content">
												<div
													style={{
														marginTop: "1.78em",
													}}
													className="content-box"
												>
													<div className="content-box__row">
														<MDBRadio
															name="flexRadioDefault"
															id="flexRadioDefault1"
															label="COD (Cash on delivery)"
															value="Cash"
															onChange={
																handlePaymentMethodChange
															}
														/>
														<MDBIcon
															className="mr-3"
															fas
															icon="money-bill-alt"
															size="lg"
														/>
													</div>
													<div className="content-box__row">
														<MDBRadio
															name="flexRadioDefault"
															id="flexRadioDefault2"
															label="Internet Banking"
															value="Banking"
															onChange={
																handlePaymentMethodChange
															}
														/>
														<MDBIcon
															className="mr-3"
															fas
															icon="money-check-alt"
															size="lg"
														/>
													</div>
													<div className="content-box__row">
														<MDBRadio
															name="flexRadioDefault"
															id="flexRadioDefault3"
															label="Near Wallet"
															value="Crypto"
															onChange={
																handlePaymentMethodChange
															}
														/>
														<MDBIcon
															className="mr-3"
															fas
															icon="money-check"
															size="lg"
														/>
													</div>
												</div>
											</div>
										</section>
									</div>
								</div>
							</div>
						</div>

						<div className="checkout-sidebar text-left">
							<div class="sidebar__header">
								<h2 class="sidebar__title">Your order</h2>
							</div>

							<div
								style={{ minHeight: "500px" }}
								className="sidebar-container"
							>
								<div className="sidebar-item-container">
									{requestedNearPayment ? (
										<div
											style={{ flexDirection: "column" }}
											className="center-box w-100 h-100"
										>
											<Image
												css={{ width: "300px" }}
												src={qrcode}
											/>
											<p
												className="text-green"
												style={{ fontSize: "14px" }}
											>
												Scan from Delirate app for Near
												Wallet{" "}
											</p>
										</div>
									) : (
										cartItems.map((item, index) => {
											return (
												<div
													key={index}
													className="sidebar-item"
												>
													<a
														href="#"
														className="sidebar-image"
													>
														<img
															width="80"
															height="80"
															src={
																apiUrl +
																"/uploads" +
																item.image
															}
														/>
													</a>
													<div className="sidebar-info">
														<div
															style={{
																marginBottom:
																	"5px",
															}}
														>
															<a
																className="text-green"
																href="#"
															>
																{item.model}
															</a>
															<span className="variant-title">
																{item.sku}
															</span>
															<div
																style={{
																	display:
																		"flex",
																	flexDirection:
																		"row",
																	justifyContent:
																		"space-between",
																}}
															>
																<span className="variant-title text-grey">
																	x
																	{
																		item.quantity
																	}
																</span>
																<span className="sidebar-price variant-title">
																	$
																	{item.price *
																		item.quantity}
																</span>
															</div>
														</div>
													</div>
												</div>
											);
										})
									)}
								</div>

								<div class="sidebar-footer">
									<div class="cart_subtotal">
										<div class="w-50 float-left">
											Total:
										</div>
										<div class="w-50 float-left text-right">
											<span class="total_price">
												${totalPrice}
											</span>
										</div>
									</div>
									<div class="cart_btn-checkout">
										{requestedNearPayment ? (
											<button>
												Check Payment
											</button>
										) : (
											<button onClick={handleCheckout}>
												Checkout
											</button>
										)}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Form>
	);
}
