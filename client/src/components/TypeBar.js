import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { ListGroup } from 'react-bootstrap';
import { Context } from '../index';

const TypeBar = observer(() => {
  const { device } = useContext(Context);
  // console.log('device', device.getBrands()[0].id, device.getBrands()[0].name);
  return (
    <ListGroup>
      {device.getTypes().map((type) => {
        return (
          <ListGroup.Item
            style={{ cursor: 'pointer' }}
            active={type.id === device.getSelectedType().id}
            onClick={() => { return device.setSelectedType(type); }}
            key={type.id}
          >
            { type.name }
          </ListGroup.Item>
        );
      })}
    </ListGroup>
  );
});

export default TypeBar;
