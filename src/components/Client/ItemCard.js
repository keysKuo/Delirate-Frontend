import React from 'react';
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBCardTitle,
    MDBIcon,MDBPopover, MDBPopoverBody
} from 'mdb-react-ui-kit';

import nearToken from '../../static/near.png';

const apiUrl = process.env.REACT_APP_API_URL || 'http://192.168.1.7:8080';

function ItemCard({ items }) {
    return (
        <MDBContainer fluid className="mt-5 w-75">
            <MDBRow className="justify-content-center">
                {items.map((item, index) => {
                    return (
                        <MDBCol key={index} md="4">
                            <MDBPopover
                                tag="span"
                                btnClassName="d-inline-block"
                                btnChildren={
                                    <MDBCard className="text-black align-items-center hover-zoom">
                                        <MDBCardImage
                                            src={apiUrl + '/uploads' + item.image}
                                            position="top"
                                            alt={item.sku}
                                            style={{ width: '75%', cursor: 'pointer' }}
                                        />
                                        <MDBCardBody>
                                            <div className="text-center">
                                                <MDBCardTitle>{item.sku}</MDBCardTitle>
                                                <p className="text-muted mb-4">{item.model}</p>
                                            </div>
                                            <div>
                                                <div className="d-flex justify-content-between">
                                                    <span>Buy with Near</span>
                                                    <span>
                                                        <span
                                                            style={{
                                                                color: 'lightcoral',
                                                                textDecoration: 'line-through',
                                                            }}
                                                        >
                                                            -10%
                                                        </span>{' '}
                                                        {Math.round(item.price * 0.9 * 100) / 100}
                                                        <img alt='' className="pb-1" src={nearToken} />
                                                    </span>
                                                </div>
                                                <div className="d-flex justify-content-between">
                                                    <span>Buy with USD</span>
                                                    <span style={{ paddingRight: '2.5px' }}>{item.price}$</span>
                                                </div>
                                                <div class="d-flex justify-content-between mb-2">
                                                    <div class="ms-auto text-warning mt-1">
                                                        <MDBIcon fas icon="star" />
                                                        <MDBIcon fas icon="star" />
                                                        <MDBIcon fas icon="star" />
                                                        <MDBIcon fas icon="star" />
                                                        <MDBIcon fas icon="star" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="d-flex justify-content-center align-items-center total font-weight-bold mt-4">
                                                <button
                                                    style={{ backgroundColor: '#71B280' }}
                                                    className="btn text-light mt-3"
                                                >
                                                    <i class="fas fa-cart-shopping fa-lg"></i> Add to cart
                                                </button>
                                            </div>
                                        </MDBCardBody>
                                    </MDBCard>
                                }
                                placement="right"
                                disabled
                            >
                                <MDBPopoverBody dangerouslySetInnerHTML={{ __html: item.desc }}></MDBPopoverBody>
                            </MDBPopover>
                        </MDBCol>
                    );
                })}
            </MDBRow>
        </MDBContainer>
    );
}

export default ItemCard;
