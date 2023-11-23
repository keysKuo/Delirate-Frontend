import {  Image } from 'semantic-ui-react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import ItemCard from '../../components/Client/ItemCard';
import banner from '../../static/airplaneshop.png';
import banner2 from '../../static/airplaneshop2.png';

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
            <div className="center-box">
                <Image
                    style={{ maxWidth: '100%' }}
                    src={banner2}
                />
                <div className='airplane-guide'>
                    <h1>Get your gift ready!</h1>
                    <p>We have a selection of over 100 toys in stock for all ages.</p>
                    <button style={{ backgroundColor: 'crimson', border: 'none', padding: '5px 10px'}}>Shop toys</button>
                </div>
            </div>
            <div className="center-box">
                <Image
                    style={{ maxWidth: '100%' }}
                    src={banner}
                />
            </div>

            <ItemCard items={items} />
        </>
    );
}
