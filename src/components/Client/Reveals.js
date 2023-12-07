import React from 'react';
import { Image, Reveal } from 'semantic-ui-react';
import logo from '../../static/near.png'

const Reveals = ({ name, price, visible, hidden }) => (
    <Reveal className='d-flex align-items-center justify-content-cenber' style={{ borderRadius: '10px' }} animated="move right">
        <Reveal.Content visible className='w-100'>
            {/* <Label attached='top right'>Code</Label> */}
            <Image
            className='mx-auto'
                style={{ width: '14em', height: '14em', }}
                src={visible ? visible : logo}
                size="tiny"
            />
        </Reveal.Content>

        <Reveal.Content hidden >
            <Image
                className='mx-auto'
                style={{ width: '14em',  borderRadius: '1.5rem' }}
                src={
                    hidden
                        ? hidden
                        : 'https://img.freepik.com/premium-vector/qr-de-isolated-white-qrcode-vector-icon_656810-475.jpg'
                }
                size="tiny"
            />
        </Reveal.Content>
    </Reveal>
);

export default Reveals;
