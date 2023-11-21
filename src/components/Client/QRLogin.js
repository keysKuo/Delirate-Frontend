import { Image, Text, Alert } from 'react-ui';
import logo from '../../static/delirate_new.png';
import alter from '../../static/alter.png';

export default function QRLogin({ msg, qrcode, info, ...props }) {
    return (
        <>
            <Image css={{ width: '350px', marginTop: '10px' }} src={logo} />
            <div
                className="container my-3"
                style={
                    info
                        ? {
                              width: '220px',
                              height: '220px',
                              paddingTop: 'px',
                            //   border: '5px solid #134E5E',
                              borderRadius: '50%',
                          }
                        : {
                              width: '320px',
                              height: '320px',
                              paddingTop: 'px',
                              border: '5px solid #134E5E',
                              borderRadius: `${info ? '50%' : '20px'}`,
                          }
                }
            >
                <div className="center-box w-100 h-100">
                    {info ? (
                        <Image css={{ width: '200px', borderRadius: '50%' }} src={info.avatar || alter} />
                    ) : (
                        <Image css={{ width: '300px' }} src={qrcode} />
                    )}
                </div>
            </div>

            <Alert css={info ? { border: '0', color: `#000`, fontSize: 25, paddingTop: 0 } : { border: '0', color: `${msg.color}` }} variant="success">
                {info ? info.name : msg.content }
            </Alert>
            <div style={{ color: `${info ? '#71B280' : '#134E5E'}` }} className="py-2 pb-4">
                <Text>
                    {info ? 'Authenticated - Waiting for permission' : 'Use Scanner from Delirate app to login'}
                </Text>
            </div>
        </>
    );
}
