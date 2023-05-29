import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { Pagination } from 'react-bootstrap';
import { Context } from '../index';

const Pages = observer(() => {
  const { device } = useContext(Context);
  const pageCount = Math.ceil(device.getTotalCount() / device.getLimit());
  const pages = [];
  console.log('debug1234', device.getTotalCount(), device.getLimit());
  console.log('pageCount', pageCount);
  for (let i = 0; i < pageCount; i += 1) {
    pages.push(i + 1);
  }
  // const pages = [1, 2, 3, 4, 5];
  return (
    <Pagination className="mt-3">
      {pages.map((page) => {
        return (
          <Pagination.Item
            key={page}
            active={device.page === page}
            onClick={() => { return device.setPage(page); }}
          >
            {page}
          </Pagination.Item>
        );
      })}
    </Pagination>
  );
});

export default Pages;
