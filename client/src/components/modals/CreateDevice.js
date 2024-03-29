import React, { useContext, useState, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { Modal, Button, Form, Dropdown, Row, Col } from 'react-bootstrap';
import { Context } from '../../index';
import { fetchTypes, fetchBrands, createDevice } from '../../http/deviceAPI';

const CreateDevice = observer(({ show, onHide }) => {
  const { user, device } = useContext(Context);
  const [info, setInfo] = useState([]);
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [file, setFile] = useState(null);
  useEffect(() => {
    fetchTypes().then((typesData) => { return device.setTypes(typesData); });
    fetchBrands().then((brandsData) => { return device.setBrands(brandsData); });
  }, []);
  const addInfo = () => {
    setInfo([...info, { title: '', description: '', number: Date.now() }]);
  };

  const removeInfo = (number) => {
    setInfo(info.filter((i) => { return (i.number !== number); }));
  };
  const changeInfo = (number, key, value) => {
    setInfo(info.map((i) => {
      if (i.number === number) {
        return { ...i, [key]: value };
      } return i;
    }));
  };
  const selectFile = (e) => {
    console.log('selectFile', e.target.files[0]);
    setFile(e.target.files[0]);
  };

  const addDevice = () => {
    const formData = new FormData();
    formData.append('name', name);
    formData.append('price', `${price}`);
    console.log('filefile', file.name);
    formData.append('brandId', device.getSelectedBrand().id);
    formData.append('typeId', device.getSelectedType().id);
    formData.append('img', file);
    formData.append('info', JSON.stringify(info));

    console.log('formData', formData);
    createDevice(formData).then((data) => {
      // onHide();
    });
    console.log(info);
  };
  if (device.getTypes().length > 0) {
    console.log('device', device.getTypes()[0].id);
  }
  console.log('user', user);
  return (
    <Modal
      onHide={onHide}
      show={show}
      size="lg"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Добавить новое устройство
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Dropdown className="mt-2 mb-2">
            <Dropdown.Toggle>{ device.getSelectedType().name || 'Выберете тип' }</Dropdown.Toggle>
            <Dropdown.Menu>
              {device.getTypes().map((type) => {
                return (
                  <Dropdown.Item
                    onClick={() => { return (device.setSelectedType(type)); }}
                    key={type.id}
                  >
                    {type.name}
                  </Dropdown.Item>
                );
              })}
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown className="mt-2 mb-2">
            <Dropdown.Toggle>{ device.getSelectedBrand().name || 'Выберете брэнд' }</Dropdown.Toggle>
            <Dropdown.Menu>
              {device.getBrands().map((brand) => {
                return (
                  <Dropdown.Item
                    onClick={() => { return (device.setSelectedBrand(brand)); }}
                    key={brand.id}
                  >
                    {brand.name}
                  </Dropdown.Item>
                );
              })}
            </Dropdown.Menu>
          </Dropdown>
          <Form.Control
            value={name}
            onChange={(e) => { return setName(e.target.value); }}
            className="mt-3"
            placeholder="Введите название устройства"
          />
          <Form.Control
            value={price}
            onChange={(e) => { return setPrice(Number(e.target.value)); }}
            className="mt-3"
            placeholder="Введите стоимость устройства"
            type="number"
          />
          <Form.Control
            className="mt-3"
            placeholder="Введите название устройства"
            type="file"
            onChange={selectFile}
          />
          <hr />
          <Button
            variant="outline-dark"
            onClick={addInfo}
          >
            Добавить новое свойство
          </Button>
          {info.map((i) => {
            return (
              <Row className="mt-4" key={i.number}>
                <Col md={4}>
                  <Form.Control
                    value={i.title}
                    onChange={(e) => { return changeInfo(i.number, 'title', e.target.value); }}
                    placeholder="Введите название свойства"
                  />
                </Col>
                <Col md={4}>
                  <Form.Control
                    value={i.description}
                    onChange={(e) => { return changeInfo(i.number, 'description', e.target.value); }}
                    placeholder="Введите описание свойства"
                  />
                </Col>
                <Col md={4}>
                  <Button
                    variant="outline-danger"
                    onClick={() => { return removeInfo(i.number); }}
                  >
                    Удалить
                  </Button>
                </Col>
              </Row>
            );
          })}
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
        <Button variant="outline-success" onClick={addDevice}>Добавить</Button>
      </Modal.Footer>
    </Modal>
  );
});

export default CreateDevice;
