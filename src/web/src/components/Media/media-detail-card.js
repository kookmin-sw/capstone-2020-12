import React from 'react';
import { Avatar, List, Divider } from 'antd';
import MediaDetailDeleteButton from './media-detail-delete-button';
import ImageCompare from './media-detail-card-image-compare';
import MediaComment from './MediaComment/media-comment';

function MediaInfo (props) {
  return (
    <div>
      <List>
        <List.Item
          actions={[
            // eslint-disable-next-line react/jsx-key
            <div>
              {
                // 작성자와 로그인 정보가 같을 경우에만 deleteButton 보이도록 설정
                (props.media.author.id === sessionStorage.getItem("user_id")) &&
              <MediaDetailDeleteButton mediaId={props.media.id}/>
              }
            </div>
          ]}
        >
          <List.Item.Meta
            avatar={<Avatar size={50} src={props.media.author.profileImgUrl}/>}
            title={<div style={{fontSize: 20}}>{props.media.title}</div>}
            description={<div style={{fontSize: 15}}>{props.media.author.name}</div>}
            style={{ textAlign: 'left' }}
          />
          <div style={{fontSize: 15}}>{props.media.location}<br/>{props.media.year}</div>
        </List.Item>
        <List.Item>
          {props.media.description}
        </List.Item>
      </List>
      <Divider/>
    </div>
  );
}

function MediaDetailCard (props) {
  //받아온 media type가 Photo이면 ImageCompare, Video면 video
  return (
    <div>

      {/* media */}
      {
        (props.media.__typename === "Photo")
          ? <ImageCompare url={props.media.url} originalUrl={props.media.originalUrl}/>
          : <video style={{width: '100%', margin: 'auto', paddingTop: 50, paddingBottom: 30}} src={props.media.url} controls/>

      }
      {/* 상세 정보 */}
      <MediaInfo media={props.media}/>
      {/* 댓글 */}
      <MediaComment mediaId={props.media.id}/>
    </div>
  );
}

export default MediaDetailCard;
