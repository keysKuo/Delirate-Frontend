import { useEffect } from "react";
import { Dimmer, Loader, Segment } from "semantic-ui-react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";

const apiUrl = process.env.REACT_APP_API_URL || 'http://192.168.1.7:8080'
const LoaderScreen = () => {
	const [searchParams, setSearchParams] = useSearchParams();

	const orderId = searchParams.get("order_id");

	useEffect(() => {
		const fetchDataPayment = async () => {
			await axios
				.put(`${apiUrl}/stripe-success?order_id=${orderId}`)
				.then((response) => {
					const result = response.data;
					if (result.success) {
						window.location.href = "/success";
					}
					console.log(result);
				})
				.catch((err) => {
					console.log(err);
				});
		};

        fetchDataPayment()
	}, [orderId]);
	return (
		<Segment style={{ minHeight: "100vh" }}>
			<Dimmer active>
				<Loader size="huge" />
			</Dimmer>
		</Segment>
	);
};

export default LoaderScreen;
