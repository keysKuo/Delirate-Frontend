import React from 'react';
import { Avatar, Text } from 'react-ui';
import { Dropdown, Icon } from 'semantic-ui-react';
import alter from '../../static/alter.png';

export default function Profile({ showSidebar, setShowSidebar, info, ...props }) {
    // Event handler for menu item click
    const handleMenuItemClick = (itemName) => {
        // You can handle different cases based on the itemName
        switch (itemName) {
            case 'profile':
                console.log('Profile clicked');
                // Your code to handle profile click
                break;
            case 'cart':
                console.log('Cart clicked');
                // Your code to handle cart click
                break;
            case 'store':
                console.log('Store clicked');
                // Your code to handle store click
                break;
            case 'logout':
				localStorage.clear();
				window.location.href = '/';
                // Your code to handle logout
                break;
            default:
                console.log('Unknown item clicked');
        }
    };

    return (
        <>
            <Avatar
                css={{ width: '50px', height: '50px', marginRight: '10px', marginLeft: '30px' }}
                size="small"
                src={info ? info.avatar : alter}
            />
            <Dropdown icon="false" text={<Text css={{ paddingTop: '27px', minWidth: '180px', color: '#ccc' }}>{info ? info.name : 'Unknown'} <Icon name='angle down' /></Text>}>
                <Dropdown.Menu style={{ top: 60 }}>
                    <Dropdown.Item text={'Signed as ' + info.name} disabled />
                    <Dropdown.Item text="Profile" icon="user" onClick={() => handleMenuItemClick('profile')} />
                    <Dropdown.Item text="Cart" icon="shopping cart" onClick={() => handleMenuItemClick('cart')} />
                    <Dropdown.Item text="Store" icon="shopping bag" onClick={() => handleMenuItemClick('store')} />
                    <Dropdown.Divider />
                    <Dropdown.Item text="Logout" icon="sign-out" onClick={() => handleMenuItemClick('logout')} />
                </Dropdown.Menu>
            </Dropdown>
        </>
    );
}
