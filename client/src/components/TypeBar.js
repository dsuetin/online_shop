import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { ListGroup } from 'react-bootstrap';
import { Context } from '../index';

const TypeBar = observer(() => {
  const { device } = useContext(Context);
  console.log('device', device.getBands()[0].id, device.getBands()[0].name);
  return (
    <ListGroup>
      {device.getTypes().map((type) => (
        <ListGroup.Item
          style={{ cursor: 'pointer' }}
          active={type.id === device.getSelectedType().id}
          onClick={() => device.setSelectedType(type)}
          key={type.id}
        >
          { type.name }
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
});

export default TypeBar;
