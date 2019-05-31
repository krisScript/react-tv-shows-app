import React, { FunctionComponent } from 'react';
import { Card } from 'antd';
const { Meta } = Card;
interface ShowMainProps {
  imgSrc: string;
  name: string;
  description: string;
}
const ShowMain: FunctionComponent<ShowMainProps> = ({
  imgSrc,
  name,
  description
}) => {
  return (
    <Card hoverable cover={<img alt={name} src={imgSrc} />}>
      <Meta
        style={{ padding: '20px' }}
        title={name}
        description={description}
      />

      {/* <Skeleton loading={loading} avatar active /> */}
    </Card>
  );
};
export default ShowMain;
