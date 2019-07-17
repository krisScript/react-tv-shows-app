import React, { FunctionComponent } from "react";
import { Card, Typography } from "antd";
import Show from "./../../types/Show";
const { Meta } = Card;
const { Text } = Typography;

interface ShowMainProps {
  show: Show;
}
const ShowMain: FunctionComponent<ShowMainProps> = ({ show }) => {
  const { name, description, network, end_date, start_date } = show;
  return (
    <Card
      hoverable
      cover={<img alt={show.name} src={show.image_thumbnail_path} />}
    >
      <Meta
        style={{ padding: "20px" }}
        title={name}
        description={[
          <Text>Start date: {end_date ? end_date : "None"}</Text>,
          <br />,
          <Text>End date: {start_date}</Text>,
          <br />,
          <Text>Network: {network}</Text>,
          <br />,
          <Text>{description}</Text>
        ]}
      />
    </Card>
  );
};
export default ShowMain;
