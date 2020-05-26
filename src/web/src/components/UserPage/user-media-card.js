import React from 'react';
import { Link } from 'react-router-dom';
import { Avatar, Card } from 'antd';
import UserMediaDeleteButton from './user-media-deleteButton';

function MediaCard(props){
  return (
    <Card
      style={{ height: '95%', borderRadius: 10 }}
      bordered={true}
      //유저 이미지 카드에서 카드 전체를 눌러서 detail-view-page로 이동하게 만들면 삭제기능 불가능, 여기서는 이미지만 누를 수 있도록 설정
      cover={<Link to={{pathname: `/watch`, search: `?id=${props.id}`, state: {data: props.data}}}><img style={{ width: '100%', borderTopLeftRadius: 10, borderTopRightRadius: 10 }}
        src={props.url} alt="thumbnail"/></Link>}
    >
      <Card.Meta
        avatar={
          <Avatar size={40} src={props.author.profileImgUrl} shape="circle"/>
        }
        description={
          <div>
            <div style={{
              fontWeight: 'bold',
              fontSize: '1.5em',
              color: 'black',
              display: 'inline-block',
              maxInlineSize: '70%',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              marinTop: 10,
              marginBottom: 10
            }}>
              {props.title}
            </div>
            <UserMediaDeleteButton mediaId={props.id}/>
            <br/>
            {props.author.name}
            <br/>
            {props.year} / {props.location}
          </div>
        }
      />
    </Card>
  );
}

export default MediaCard;