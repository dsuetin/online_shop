import React from 'react';
import {Button, Card, Col, Container, Form, Image, Row} from "react-bootstrap";
import bigStar from '../assets/bigStar.png'
//
import pic_tmp from '../assets/photo_2023-01-22_22-03-14.jpg'
import tmp_png from '../assets/photo_2023-01-22_22-02-26.png'
import star from "../assets/star.png";
// import * as assets from "../assets";


// const DevicePage = () => {
//     const bpic = new URL('../assets/photo_2023-01-22_22-02-26.png', import.meta.url)
//     return (
//         <div style={{ display: "block", width: 700, padding: 30 }}>
//             <h4>React-Bootstrap Image Component</h4>
//             <Image
//                 src=
//                     {tmp_png}
//                 rounded
//             />
//             <Image
//                 src=
//                     "https://media.geeksforgeeks.org/wp-content/uploads/20210425000233/test-300x297.png"
//                 roundedCircle
//             />
//             <img src={bpic}/>
//         </div>
//     );
// }

const DevicePage = () => {
    const process = require('process')
    const device =  {id: 1, name: '12 pro', price: 100000, rating: 5,
            img: "https://media.geeksforgeeks.org/wp-content/uploads/20210425000233/test-300x297.png",
            // img: pic_tmp,
        typeId: 2, brandId: 2}
    console.log("device", device.img)
    // const path_to_jpg = "http://localhost:3000/src/assets/комета.jpg"
    const my_url = new URL(device.img, import.meta.url)
    //const my_url = new URL("../assets/комета.jpg", import.meta.url)
    console.log("device222", typeof (device.img), device.img)
    console.log(process.version);
    const description = [
        {id:1, title: 'Память', description: '5Gb '},
        {id:1, title: 'Память', description: '5Gb '},
        {id:1, title: 'Память', description: '5Gb '},
        {id:1, title: 'Память', description: '5Gb '},
        {id:1, title: 'Память', description: '5Gb '},
        {id:1, title: 'Память', description: '5Gb '},
    ]
    return (
        <Container className="d-flex align-items-center">
            <Col>
                <Row>
                    <Col md={4}>
                        {/*<Image src={new URL("../assets/комета.jpg", import.meta.url)} width={300} height={300} />*/}
                        {/*<Image src={pic_tmp} width={300} height={300} />*/}
                        <Image src={device.img} width={300} height={300} />
                    </Col>
                    <Col md={4}>
                        <Form className={"d-flex flex-column align-items-center"}>
                            <h2 className={"d-flex align-items-center justify-content-center"}>{device.name}</h2>
                            <div
                                className={"d-flex align-items-center justify-content-center"}
                                style={{background: `url(${bigStar}) no-repeat center center`, width:240, height:240, backgroundSize:'cover', fontSize: 64}}
                            >
                                {device.rating}
                            </div>
                        </Form>
                    </Col>
                    <Col md={4}>
                        <Card
                            className={"d-flex flex-column align-items-center justify-content-around"}
                            style={{width:300, height:300, fontSize: 32, border:'5px solid lightgray'}}
                        >
                            <h3>От: {device.price} руб.</h3>
                            <Button variant={"outline-dark"}>Добавить в корзину</Button>
                        </Card>
                        {/*<Image src={bigStar} width={300} height={300} />*/}
                    </Col>

                </Row>

                <Row className={"d-flex flex-column m-3"}>
                    <h1>Характеристики</h1>
                    {description.map((info,index) =>
                        <Row key={info.id} style={{background: index % 2 === 0 ? 'lightgray' : 'transparent', padding: 10}}>
                            {info.title}: {info.description}
                        </Row>
                    )}
                </Row>
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