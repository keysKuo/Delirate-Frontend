import { Link } from 'react-router-dom';
import '../../assets/success.css';

export default function SuccessScreen() {
	return (
		<section className="login-main-wrapper">
			<div className="main-container">
				<div className="login-process">
					<div className="login-main-container">
						<div className="thankyou-wrapper">
							<h1>
								<img
									src="http://montco.happeningmag.com/wp-content/uploads/2014/11/thankyou.png"
									alt="thanks"
								/>
							</h1>
							<p>Thank you for using our service</p>
							<Link className="btn" to="/">
								Back to home
							</Link>
							<div className="clr"></div>
						</div>
						<div className="clr"></div>
					</div>
				</div>
				<div className="clr"></div>
			</div>
		</section>
	);
}
