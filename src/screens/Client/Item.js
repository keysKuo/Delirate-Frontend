import {  Image } from 'semantic-ui-react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import ItemCard from '../../components/Client/ItemCard';
import banner from '../../static/airplaneshop.png';
import banner2 from '../../static/airplaneshop2.png';
import QRCode from "qrcode";

const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:8080';

export default function ItemScreen() {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetchItems();
    }, []);

    const fetchItems = async () => {
        await axios
            .get(apiUrl + '/item/get_all_items')
            .then(async (response) => {
                let result = response.data;

                if (result.success) {
                    let temp = result.data;
                    for (let i = 0; i < temp.length; i++) {
                        let qrcode = await QRCode.toDataURL(`${apiUrl}/item/get_item_info/${temp[i]._id}`);
                        temp[i].qrcode = qrcode;
                    }
                    setItems([...temp]);
                    console.log(items)
                } else {
                }
            })
            .catch((err) => {
                console.error(err);
            });
    };

    return (
        <>
            {/* <h1>Product Screen</h1> */}
            <div className="center-box">
                <Image
                    style={{ width: '100%' }}
                    src={banner}
                />
                
            </div>
            

            <ItemCard items={items} />
        </>
    );
}
