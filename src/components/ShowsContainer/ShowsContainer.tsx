import React, {
  FunctionComponent,
  useEffect,
  useContext,
  useState,
  SyntheticEvent
} from 'react';

import { Row, Button, Icon, Col, Pagination } from 'antd';
import ShowsStoreContext from '../../stores/ShowsStore';
import { observer } from 'mobx-react-lite';
import ShowCard from '../ShowCard/ShowCard';
const ShowContainer: FunctionComponent = observer(() => {
  const showsStore = useContext(ShowsStoreContext);
  useEffect(() => {
    showsStore.getPage(1);
  }, [showsStore]);

  const PaginationHandler = async (page: any) => {
    await showsStore.getPage(page);
  };
  return (
    <>
      <Row
        type="flex"
        align="middle"
        gutter={8}
        style={{ justifyContent: 'center' }}
      >
        {showsStore.shows.map(show => (
          <ShowCard key={show.id} show={show} />
        ))}
      </Row>
      <Row
        style={{
          display: 'flex',
          width: '100vw',
          justifyContent: 'space-between',
          padding: '1rem'
        }}
      >
        <Col>
          <Pagination
            showQuickJumper
            defaultCurrent={1}
            total={showsStore.pages}
            onChange={PaginationHandler}
          />
        </Col>
      </Row>
    </>
  );
});
export default ShowContainer;
