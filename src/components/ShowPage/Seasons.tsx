import React, { FunctionComponent, useState, useEffect } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { Card, Collapse } from 'antd';

const Panel = Collapse.Panel;

interface SeasonsProps {
  seasons: any[];
}
const Seasons: FunctionComponent<SeasonsProps> = ({ seasons }) => {
  return (
    <Card style={{ width: '100%' }}>
      <Collapse defaultActiveKey={['collapse']} accordion>
        {Object.values(seasons).map((season: any, index) => {
          return (
            <Panel header={`Season ${index + 1}`} key={index.toString()}>
              {Object.values(season).map((episode: any, index) => (
                <p key={episode.air_date}>{episode.name}</p>
              ))}
            </Panel>
          );
        })}
      </Collapse>
    </Card>
  );
};
export default Seasons;
