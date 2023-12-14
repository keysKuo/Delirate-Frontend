const apiUrl = process.env.REACT_APP_API_URL;

export default function DashboardScreen() {
    const userJSON = localStorage.getItem("user");
	const user = JSON.parse(userJSON);


    return (
        <div className="container">    
            <div style={{ minHeight: '90vh'}} className="center-box">
                <img src={`${apiUrl}/uploads${user.store.banner}`} />
            </div>
        </div>
    );
}