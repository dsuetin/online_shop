import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { ListGroup } from 'react-bootstrap';
import { Context } from '../index';

const TypeBar = observer(() => {
  const { device } = useContext(Context);
  console.log('device', device.getBrands()[0].id, device.getBrands()[0].name);
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

// md={4}
// style={{ cursor: 'pointer' }}
// key={brand.id}
// className="p-3 mt-2"
// onClick={() => device.setSelectedBrand(brand)}
// border={brand.id === device.selectedBrand.id ? 'danger' : 'light'}


