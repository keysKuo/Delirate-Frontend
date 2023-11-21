import {  Image } from 'semantic-ui-react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import ItemCard from '../../components/Client/ItemCard';

const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:8080';

export default function ItemScreen() {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetchItems();
    }, [items]);

    const fetchItems = async () => {
        await axios
            .get(apiUrl + '/item/get_all_items')
            .then((response) => {
                let result = response.data;

                if (result.success) {
                    setItems([...result.data]);
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
            <div className="center-box container">
                <Image
                    style={{ maxWidth: '70%' }}
                    src="https://assets.bigcartel.com/theme_images/78110562/banner+copy.png"
                />
            </div>

            <ItemCard items={items} />
        </>
    );
}
