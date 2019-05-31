import React, { FunctionComponent, useState, useEffect } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { Row, Col } from 'antd';
import Show from '../../types/Show';
import getData from '../../util/getData';
import Seasons from './Seasons';
import ShowMain from './ShowMain';
const style = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '1rem'
};
interface MatchProps {
  showId: string;
}
interface ShowPageProps extends RouteComponentProps<MatchProps> {}
const ShowPage: FunctionComponent<ShowPageProps> = ({ match }) => {
  const [show, setShow] = useState<Show | null>(null);
  const [seasons, setSeasons] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const { showId } = match.params;
  useEffect(() => {
    const url: string = `https://www.episodate.com/api/show-details?q=${showId}`;
    getData(url)
      .then(data => {
        if (data) {
          setLoading(false);
          setShow(data.tvShow);

          const seasons = data.tvShow.episodes.reduce(
            (accumulator: any, currentValue: any) => {
              if (accumulator[currentValue.season]) {
                accumulator[currentValue.season] = [
                  ...accumulator[currentValue.season],
                  currentValue
                ];
              } else {
                accumulator[currentValue.season] = [currentValue];
              }

              return accumulator;
            },
            {}
          );
          setSeasons(seasons);
        }
      })
      .catch(err => {
        console.log(err);
      });
  }, [showId]);

  return (
    <>
      {show ? (
        <>
          <Row gutter={8}>
            <Col style={style} xs={30} sm={30} md={12} lg={8} xl={8}>
              <ShowMain
                description={show.description}
                imgSrc={show.image_thumbnail_path}
                name={show.name}
              />
            </Col>
            <Col style={style} xs={30} sm={30} md={12} lg={8} xl={8}>
              <Seasons seasons={seasons} />
            </Col>
          </Row>
        </>
      ) : (
        ''
      )}
    </>
  );
};
export default withRouter(ShowPage);
