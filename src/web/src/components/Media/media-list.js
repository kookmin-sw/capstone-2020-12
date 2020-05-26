import React from 'react';
import { Col, Row, Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import MediaCard from './media-card';
import UserMediaCard from '../UserPage/user-media-card';

function MediaList (props) {
  return (
    <div style={{ width: '70%', margin: '3rem auto' }}>
      <Row gutter={[36, 16]}>
        {props.data.filter(media => media !== null).map(media => {
          let temp_media = {
            ...media,
            title: (media.title) ? media.title : '',
            location: (media.location) ? media.location : '대한민국',
            year: (media.year) ? media.year : '',
            author: (media.author) ? media.author : { name: 'Unknown', profileImgUrl: '' },
            isProcessing: (media.isProcessing) ? media.isProcessing : false,
          };
          temp_media.author.name = (temp_media.author.name) ? temp_media.author.name : 'Unknown';
          temp_media.author.profileImgUrl = (temp_media.author.profileImgUrl) ? temp_media.author.profileImgUrl : '';
          //isprocessing == true일 때
          if (temp_media.isProcessing === true)
            //해당 창이 user이면 카드가 이전버전처럼 나타남
            if (window.location.pathname === "/user")
              return (
                <Col xs={24} md={12} lg={8} xl={8} key={temp_media.id}>
                  <Spin indicator={<LoadingOutlined style={{ fontSize: 30, color: 'gray' }}/>}>
                    <UserMediaCard title={temp_media.title} location={temp_media.location} year={temp_media.year}
                      author={temp_media.author} id={temp_media.id} url={temp_media.url}/>
                  </Spin>
                </Col>
              );
            //해당 창이 user가 아니면 카드가 핀터레스트처럼 나타남
            else
              return (
                <Col xs={24} md={12} lg={8} xl={8} key={temp_media.id}>
                  <Spin indicator={<LoadingOutlined style={{ fontSize: 30, color: 'gray' }}/>}>
                    <MediaCard title={temp_media.title} location={temp_media.location} year={temp_media.year}
                      author={temp_media.author} id={temp_media.id} url={temp_media.url}/>
                  </Spin>
                </Col>
              );
          //isProcessing이 false일 때
          else
          //해당 창이 user이면 카드가 이전버전처럼 나타남
          if (window.location.pathname === "/user")
            return (
              <Col xs={24} md={12} lg={8} xl={8} key={temp_media.id}>
                <UserMediaCard title={temp_media.title} location={temp_media.location} year={temp_media.year}
                  author={temp_media.author} id={temp_media.id} url={temp_media.url} data={props.data}/>
              </Col>
            );
          //해당 창이 user가 아니면 카드가 핀터레스트처럼 나타남
          return (
            <Col xs={24} md={12} lg={8} xl={8} key={temp_media.id}>
              <MediaCard title={temp_media.title} location={temp_media.location} year={temp_media.year}
                author={temp_media.author} id={temp_media.id} url={temp_media.url} data={props.data}/>
            </Col>
          );
        })}
      </Row>
    </div>
  );
}

export default MediaList;