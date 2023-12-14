import { Container } from "semantic-ui-react";
import axios from "axios";
import { useEffect, useState } from "react";
import QRCode from "qrcode";
import Reveals from "../../components/Client/Reveals";

const apiUrl = process.env.REACT_APP_API_URL;

export default function OrderScreen() {
	const [orders, setOrders] = useState([]);
	const userJSON = localStorage.getItem('user');
	const user = JSON.parse(userJSON);


	useEffect(() => {
		const fetchData = async () => {
			try {
				if (orders.length == 0) {
					const response = await axios.get(
						`${apiUrl}/order/get_orders_by_store/${user.store._id}`
					);
					// console.log(response.data); // Assuming your data is in response.data
					const data = response.data;
					if (data.success) {
						let temp = data.data;
						for (let i = 0; i < temp.length; i++) {
							let qrcode = await QRCode.toDataURL(temp[i].link);
							temp[i].qrcode = qrcode;
						}
						setOrders([...temp]);
					}
				}
				// Process your data and set state here
			} catch (error) {
				console.error("Error fetching data:", error);
			}
		};

		fetchData();
	}, []);

	return (
		<>
			<Container style={{ transform: "translateX(10%)" }}>
				<div
					style={{
						paddingTop: "60px",
						visibility: "hidden",
						backgroundColor: "white",
					}}
				></div>
				<section class="mb-4">
					{orders.map((order, index) => {
						return (
							<div
								key={index}
								class="order-card"
								style={{ minHeight: "100px" }}
							>
								<div className="card-body">
									<div class="row">
										<div class="col-md-4 text-left pl-4 pt-2">
											<h4 class="h4-responsive">
												<i class="fas fa-barcode mr-3"></i>
												<strong>
													<span class="text-green">
														{order.ISBN_code}
													</span>
												</strong>
											</h4>
											<p>
												<small>From:</small>
											</p>
											<p>
												<strong>
													{order.store.name}
												</strong>
											</p>
											<p>{order.store.location}</p>
											<p>{order.createdAt}</p>
										</div>

										<div class="col-md-4 text-right pt-2">
											<p>
												<small>To:</small>
											</p>
											<p>
												<strong>
													{order.customer.name}
												</strong>
											</p>
											<p>{order.customer.address}</p>
											<p>{order.customer.phone}</p>
											<p>{order.customer.email}</p>
										</div>
										<div class="col-md-4 text-right pt-2">
											<Reveals hidden={order.qrcode} />
										</div>
									</div>
									<div className="table-responsive mt-3">
										<table className="table">
											<thead>
												<tr>
													<th>Item</th>
													<th>Model</th>
													<th>Quantity</th>
													<th>Unit Price</th>
													<th>Tax</th>
													<th>Cost</th>
												</tr>
											</thead>
											<tbody>
												{order.items.map(
													(item, index) => {
														return (
															<tr key={index}>
																<td>
																	<img
																		style={{
																			width: "50px",
																			height: "50px",
																		}}
																		src={`${apiUrl}/uploads/${item.info.image}`}
																	/>
																</td>
																<td
																	style={{
																		lineHeight:
																			"50px",
																	}}
																>
																	{
																		item
																			.info
																			.model
																	}
																</td>
																<td
																	style={{
																		lineHeight:
																			"50px",
																	}}
																>
																	{item.qty}
																</td>
																<td
																	style={{
																		lineHeight:
																			"50px",
																	}}
																>
																	$
																	{(item.price).toFixed(2)}
																</td>
																<td
																	style={{
																		lineHeight:
																			"50px",
																	}}
																>
																	$
																	{(item.price *
																		0.1).toFixed(2)}
																</td>
																<td
																	style={{
																		lineHeight:
																			"50px",
																	}}
																>
																	$
																	{(item.price *
																			1.1).toFixed(2)}
																</td>
															</tr>
														);
													}
												)}
											</tbody>
										</table>
									</div>

									<ul className="list-unstyled text-right px-4">
										<li>
											<strong>TOTAL:</strong>
											<span className="float-right ml-3 text-danger">
												$
												{(order.items.reduce(
													(accumulator, item) =>
														accumulator +
														Math.round(
															item.price,
															4
														),
													0
												) * 1.1).toFixed(2)}
											</span>
										</li>
									</ul>
								</div>
							</div>
						);
					})}
				</section>
			</Container>


			<Container>
				<div className="p-4"></div>
			</Container>
		</>
		// <h1>Dashboard Screen</h1>
	);
}
