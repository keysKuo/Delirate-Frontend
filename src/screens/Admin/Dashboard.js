import { MDBInput } from "mdb-react-ui-kit";
import { useEffect, useState } from "react";
import FilePicker from "../../components/Admin/FilePicker";

const apiUrl = process.env.REACT_APP_API_URL;

export default function DashboardScreen() {
    const userJSON = localStorage.getItem("user");
	const user = JSON.parse(userJSON);
    const [selectedFile, setSelectedFile] = useState(null);

    useEffect(() => {
        console.log(selectedFile);
    }, [selectedFile])

    return (
        <div className="container">    
            <div style={{ minHeight: '90vh', flexDirection: 'column'}} className="center-box">
               
                <div className="banner-box">
                    <img src={`${apiUrl}/uploads${user.store.banner}`} />
                    <FilePicker setSelectedFile={setSelectedFile} />
                </div>               
            </div>
            <div>
               </div>
        </div>
    );
}