import React, { FunctionComponent } from 'react';
import { Card, Col } from 'antd';
import ShowPreview from '../../types/ShowPreview';
import { Link } from 'react-router-dom';
const { Meta } = Card;
interface ShowCardProps {
  show: ShowPreview;
}
const ShowCard: FunctionComponent<ShowCardProps> = ({ show }) => {
  const style = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '1rem'
  };
  console.log(show);
  return (
    <Col style={style} xs={20} sm={16} md={12} lg={8} xl={4}>
      <Link to={`/show/${show.name}`}>
        <Card
          hoverable
          style={{ width: 240 }}
          cover={<img alt="example" src={show.image_thumbnail_path} />}
        >
          <Meta title={show.name} description={show.network} />
        </Card>
      </Link>
    </Col>
  );
};
export default ShowCard;
