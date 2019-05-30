import React, {
  FunctionComponent,
  useEffect,
  useContext,
  useState
} from 'react';
import { Row, Col, Card } from 'antd';
import ShowsStoreContext from '../../stores/ShowsStore';
import { observer } from 'mobx-react-lite';
import ShowCard from '../ShowCard/ShowCard';
const ShowContainer: FunctionComponent = observer(() => {
  const showsStore = useContext(ShowsStoreContext);
  useEffect(() => {
    showsStore.getCurrentPage();
  }, [showsStore]);
  return (
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
  );
});
export default ShowContainer;
