import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Card, Col, Form, Row} from "react-bootstrap";

const BrandBar = observer( () => {
    const {device} = useContext(Context)

    return (
        <Row className="d-flex">
            {device.brands.map(brand =>
                <Card
                    md={4}
                    // style={{cursor: 'pointer'}}
                    style={{width:150, cursor: 'pointer'}}

                    key={brand.id}
                    className={"p-3 mt-2"}
                    onClick={()=> device.setSelectedBrand(brand)}
                    border={brand.id === device.selectedBrand.id ? 'danger' : 'light'}
                >
                    {brand.name}
                </Card>
            )}
        </Row>
    );
});

export default BrandBar;