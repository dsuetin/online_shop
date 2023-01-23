import React from 'react';
import {Col, Container, Image, Row} from "react-bootstrap";
import bigStar from '../assets/bigStar.png'
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
    const device =  {id: 1, name: '12 pro', price: 100000, rating: 5,
            img: "../assets/комета.jpg",
            // img: "/home/tst/WebstormProjects/second_site/client/src/assets/photo_2023-01-22_22-02-26.png",
        typeId: 2, brandId: 2}
    console.log("device", device.img)
    const path_to_jpg = "http://localhost:3000/src/assets/комета.jpg"
    // const my_url = new URL(device.img, import.meta.url)
    //const my_url = new URL("../assets/комета.jpg", import.meta.url)
    console.log("device222", typeof (device.img), device.img)
    console.log("device3333", typeof ("../assets/комета.jpg"), "../assets/комета.jpg")

    const my_url = new URL(path_to_jpg, import.meta.url)
    {/*<Image width={300} height={300} src="/home/tst/WebstormProjects/second_site/2023-01-14 22-15-42.png" responsive />*/}

    // return (
    //     // <div>
    //     //     Diiiivvv
    //     //
    //     // </div>
    //     <img src={"/home/tst/WebstormProjects/second_site/2023-01-14 22-15-42.png"} />
    // // <Image width={300} height={300} src="/home/tst/WebstormProjects/second_site/2023-01-14 22-15-42.png" responsive />
    // )

    // import tmp from "{device.img}"
    return (

        // <Image src='../assets/photo_2023-01-22_22-02-26.png' width={300} height={300} />
        // <Image src={bigStar} width={300} height={300} />
        // <Image src={bigStar} width={300} height={300} />
        //
        <Container className="d-flex align-items-center">
            <Col md={4}>

                {/*console.log("my_url", my_url)*/}
                {/*new URL('../assets/photo_2023-01-22_22-02-26.png', import.meta.url)*/}
                {/*<Image src={new URL("../assets/комета.jpg", import.meta.url)} width={300} height={300} />*/}
                {/*<Image src={new URL("../assets/комета.jpg", import.meta.url)} width={300} height={300} />*/}
                <Image src={new URL(my_url, import.meta.url)} width={300} height={300} />
                {/*<Image src={new URL(device.img, import.meta.url)} width={300} height={300} />*/}
            </Col>
            <Col md={4}>
                <Image src={bigStar} width={300} height={300} />
            </Col>
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