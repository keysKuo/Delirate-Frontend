import { useState } from "react";

const apiUrl = process.env.REACT_APP_API_URL || 'http://192.168.1.7:8080'
export default function CartItem({ item, index, delFromCart, updateQuantity }) {
	const [ quantity, setQuantiy ] = useState(item.quantity);

	return (
		<>
			<div className="cart_item">
				<a href="#" className="cart_image">
					<img style={{ width: "80px" }} src={apiUrl + '/uploads' + item.image} />
				</a>
				<div className="cart_info">
					<div className="cart_name">
						<a className="text-green" href="#">{item.model}</a>
						<span className="variant-title text-dark">{item.sku}</span>
					</div>
					<div className="grid">
						<div className="w-50 cart_select">
							<p className="cart_quantity text-grey">Quantity</p>
							<div className="ajaxcart__qty input-group-btn">
								<button
									type="button"
									className="ajaxcart__qty-adjust ajaxcart__qty--minus items-count"
									data-id=""
									data-line="1"
									aria-label="-"
                                    onClick={() => {
										setQuantiy((prev) => prev -= 1)
                                        updateQuantity(index, '-')
                                    }}
									{...(quantity == 1 && { disabled: true })}
								>
									-
								</button>
								<input
									type="text"
									name="updates[]"
									className="ajaxcart__qty-num number-sidebar"
									maxLength="3"
									readOnly
                                    value={quantity}
									min="1"
									data-id=""
									data-line="1"
									aria-label="quantity"
									pattern="[0-9]*"
								/>
								<button
									type="button"
									className="ajaxcart__qty-adjust ajaxcart__qty--plus items-count"
									data-id=""
									data-line="1"
									aria-label="+"
                                    onClick={() => {
										setQuantiy((prev) => prev += 1)
                                        updateQuantity(index, '+')
                                    }}
									
								>
									+
								</button>
							</div>
						</div>
						<div className="w-50 text-right">
							<span className="cart_price">${item.price * item.quantity}</span>
							<p onClick={() => delFromCart(index)} className="cart__btn-remove">Xóa</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
