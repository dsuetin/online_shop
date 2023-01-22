import React from 'react';
import {Col, Container, Image, Row} from "react-bootstrap";
import bigStar from '../assets/bigStar.png'
import star from "../assets/star.png";
const DevicePage = () => {
    const device =  {id: 1, name: '12 pro', price: 100000, rating: 5,
            img: "/home/tst/WebstormProjects/second_site/2023-01-14_22-15-42.png", typeId: 2, brandId: 2}


    {/*<Image width={300} height={300} src="/home/tst/WebstormProjects/second_site/2023-01-14 22-15-42.png" responsive />*/}

    // return (
    //     // <div>
    //     //     Diiiivvv
    //     //
    //     // </div>
    //     <img src={"/home/tst/WebstormProjects/second_site/2023-01-14 22-15-42.png"} />
    // // <Image width={300} height={300} src="/home/tst/WebstormProjects/second_site/2023-01-14 22-15-42.png" responsive />
    // )


    return (

        <Container className="d-flex align-items-center">
            <Col md={4}>
                <Image src={bigStar} width={300} height={300} />
            </Col>

        </Container>
        //
        // <Container className={"mt-3"}>
        //     <Col md={4}>
        //         <Image width={300} height={300} src={device.img}/>
        //
        //     </Col>
        //     <Col md={4}>
        //         <Row>
        //             <h2>{device.name}</h2>
        //             <div
        //                 className={"d-flex align-items-center justify-content-center"}
        //                 style={{background: `url(${bigStar}) no-repeat center center`, width:240, height:240}}
        //             >
        //                 {device.rating}
        //             </div>
        //         </Row>
        //     </Col>
        //     <Col md={4}>
        //
        //     </Col>
        // </Container>
    );
};

export default DevicePage;