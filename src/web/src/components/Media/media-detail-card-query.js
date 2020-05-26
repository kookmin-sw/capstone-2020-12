import React from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import MediaDetailCard from './media-detail-card';
import { Spin } from 'antd';
import ErrorView from '../error-view';

const GET_MEDIA = gql`
  query ($mediaId: ID!){
    media(id: $mediaId){
      __typename
      id
      title
      originalUrl
      url
      location
      year
      description
      author {
        id
        name
        profileImgUrl
      }
    }
  }
`;

function MediaDetailCardQuery (props) {
  const { loading, error, data } = useQuery(GET_MEDIA, {
    variables: { mediaId: props.mediaId },
    errorPolicy: 'all'
  }
  );
  // Loading이 중앙에 나타남
  if (loading) return (<Spin tip="Loading..." style={{ paddingTop: "25%", paddingLeft: "47%" }}/>)
  // TODO(Lhyejin): 자세히 에러 처리 해주기
  if (error) {
    console.log(error);
    return (<ErrorView/>);
  } else
    return (
      <MediaDetailCard media={data.media}/>
    );
}

export default MediaDetailCardQuery;
