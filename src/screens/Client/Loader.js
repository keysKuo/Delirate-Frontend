import { useEffect } from "react";
import { Dimmer, Loader, Segment } from "semantic-ui-react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";

const apiUrl = process.env.REACT_APP_API_URL || 'http://192.168.1.7:8080'
const LoaderScreen = () => {
	const [searchParams, setSearchParams] = useSearchParams();

	const code = searchParams.get("code");
	const fetchDataPayment = async () => {
		await axios
			.put(`${apiUrl}/stripe-success?code=${code}`)
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
	
	return (
		<Segment style={{ minHeight: "100vh" }}>
			<Dimmer active>
				<Loader size="huge" />
			</Dimmer>
		</Segment>
	);
};

export default LoaderScreen;
