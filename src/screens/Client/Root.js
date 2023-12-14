import { Link, Outlet } from "react-router-dom";
import Header from "../../components/Client/Header";
import classes from "../../assets/root.module.css";
import Footer from "../../components/Client/Footer";
import { useState, useEffect } from "react";
import { MDBIcon } from "mdb-react-ui-kit";
import Loader from "../../components/Client/Loader.js";
import CartItem from "../../components/Client/CartItem";

export default function RootLayout({ isLoading, loadingTime }) {
	const [isShowCart, setIsShowCart] = useState(false);
	// localStorage.clear();
	const [cartItems, setCartItems] = useState(() => {
		const cartItemsJson = localStorage.getItem("cartItems") || "[]";
		return JSON.parse(cartItemsJson);
	});
	const [loading, setLoading] = useState(isLoading);

	setTimeout(() => {
		setLoading(false);
	}, loadingTime);

	const [totalPrice, setTotalPrice] = useState(() => {
		return cartItems.reduce((accumulator, item) => {
			return accumulator + item.price * item.quantity;
		}, 0);
	});

	// Effect to update localStorage when cartItems changes
	useEffect(() => {
		localStorage.setItem("cartItems", JSON.stringify(cartItems));
		localStorage.setItem("totalPrice", JSON.stringify(totalPrice));
	}, [cartItems, totalPrice]);

	const addToCart = (newItem) => {
		setCartItems((prevItems) => [...prevItems, newItem]);
		setTotalPrice((prevPrice) => prevPrice + newItem.price);
	};

	const delFromCart = (index) => {
		setCartItems((prevItems) =>
			prevItems.filter((item, idx) => index !== idx)
		);
		setTotalPrice(
			(prevPrice) =>
				prevPrice - cartItems[index].price * cartItems[index].quantity
		);
	};

	const updateQuantity = (index, ops) => {
		if (ops === "+") {
			const newCartItems = cartItems.map((element, idx) => {
				return index === idx
					? { ...element, quantity: element.quantity + 1 }
					: element;
			});
			setCartItems([...newCartItems]);
			setTotalPrice((prevPrice) => prevPrice + cartItems[index].price);
		} else {
			const newCartItems = cartItems.map((element, idx) => {
				return index === idx
					? {
							...element,
							quantity:
								element.quantity > 1
									? element.quantity - 1
									: element.quantity,
					  }
					: element;
			});
			setCartItems([...newCartItems]);
			setTotalPrice((prevPrice) => prevPrice - cartItems[index].price);
		}
	};

	return (
		<>
			<Header isShowCart={isShowCart} setIsShowCart={setIsShowCart} />
			<main className={classes.content}>
				<Outlet
					context={{
						setIsShowCart,
						cartItems,
						setCartItems,
						addToCart,
						updateQuantity,
						delFromCart,
						totalPrice,
					}}
				/>
			</main>
			<div
				style={
					isShowCart
						? {
								transform: "translateX(0%)",
								visibility: "visible",
						  }
						: {
								transform: "translateX(100%)",
								visibility: "hidden",
						  }
				}
				className="cart"
			>
				<div className="cart_heading">
					<h4 style={{ fontWeight: "bold" }} className="cart_title">
						Your cart
					</h4>
					<div
						onClick={() => {
							setIsShowCart(
								(prevState) => (prevState = !prevState)
							);
						}}
						className="cart_btn-close"
					>
						<MDBIcon fas icon="times" />
					</div>
				</div>
				<div className="drawer__inner">
					<div className="cart_container">
						{cartItems.map((item, index) => {
							return (
								<CartItem
									updateQuantity={updateQuantity}
									delFromCart={delFromCart}
									index={index}
									key={index}
									item={item}
								/>
							);
						})}
					</div>
					<div className="cart_footer">
						<div className="cart_subtotal">
							<div className="w-50 float-left">Total:</div>
							<div className="w-50 float-left text-right">
								<span className="total_price">
									${(totalPrice).toFixed(2)}
								</span>
							</div>
						</div>
						<div className="cart_btn-checkout">
							<button
								onClick={() => {
									setIsShowCart(false);
									window.scrollTo(0, 0)
								}}
							>
								<Link
									to="/checkout"
									className="d-block w-100 text-light"
								>
									Check out
								</Link>
							</button>
						</div>
					</div>
				</div>
			</div>

			<Footer />

			<div
				onClick={() => {
					setIsShowCart(false);
				}}
				style={
					isShowCart
						? {
								opacity: "0.5",
								visibility: "visible",
						  }
						: {
								opacity: "0",
								visibility: "hidden",
						  }
				}
				className="backdrop"
			></div>

			<div
				style={
					loading
						? { visibility: "visible", opacity: 1 }
						: { visibility: "hidden", opacity: 0 }
				}
				className="loader-layer"
			>
				<Loader />
			</div>
		</>
	);
}
