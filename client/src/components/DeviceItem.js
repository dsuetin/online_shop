import React from 'react';
import {Card, Col, Form, Image, Row} from "react-bootstrap";
import star from "../assets/star.png"
import {useNavigate} from "react-router-dom";
import {DEVICE_ROUTE} from "../utils/consts";

const DeviceItem = ({device}) => {
    const navigate = useNavigate()
    //console.log(navigate)
   ///// console
        console.log("66666666666666",device.img)
    const my_url = new URL(device.img, import.meta.url)

    return (
        <Col md={3} className={"mt-3"} onClick={() => navigate(DEVICE_ROUTE + '/' + device.id)}>
            <Card style={{width:150, cursor: 'pointer'}} border={'light'}>
                {/*<Image width={150} height={150} url={device.img}/>*/}
                {/*<Image width={150} height={150} src={my_url}/>*/}
                {/*<Image width={150} height={150} src={new URL("../assets/bigStar.png", import.meta.url)}/>*/}
                {/*<Image width={150} height={150} src={require('../assets/bigStar.png')}/>*/}
                {/*<Image width={150} height={150} src={require(device.img)}/>*/}
                <Image width={150} height={150} src={device.img}/>

                {/*require('./thumbnail.webp')*/}
                {/*<Image width={150} height={150} src={new URL(device.img, import.meta.url)}/>*/}
                {/*<Image width={150} height={150} src={star}/>*/}
                <div className="text-black-50 mt-1 d-flex justify-content-between align-items-center">
                    {/*<div className="justify-content-between"> Пацанский ({device.rating})  <Image src={star} width={15} height={15} style={{position: 'absolute', bottom: 4.5}} /></div>*/}
                    <div>Пацанский</div>
                    <div className="d-flex align-items-center">
                        <div>{device.rating}</div>
                        <div className="col-sm-1 col-xs-1 col-md-1 col-lg-1"></div>
                        <Image src={star} width={15} height={15} />
                    </div>
                </div>
                <div>{device.name}</div>
            </Card>
        </Col>
    );
};

export default DeviceItem;