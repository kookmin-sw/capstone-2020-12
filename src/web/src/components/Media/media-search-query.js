import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import MediaList from './media-list';
import gql from 'graphql-tag';
import { Spin } from 'antd';

const SearchQuery = gql`
  query searchItems($queryStr: String!, $location: String!, $yearTo: Int, $yearFrom: Int) {
    search(queryStr: $queryStr, location: $location, yearTo: $yearTo, yearFrom: $yearFrom) {
      author{
        id
        name
        profileImgUrl
      }
      year
      isProcessing
      id
      location
      title
      url
    }
  }
`;

function MediaSearchQuery (props) {
  const { loading, error, data } = useQuery(SearchQuery, {
    variables: {
      queryStr: props.title,
      location: props.location,
      yearFrom: props.yearFrom,
      yearTo: props.yearTo
    },
    errorPolicy: 'all',
    fetchPolicy: 'cache-and-network'
  });
  if (loading) return <Spin tip="Loading..." style={{ paddingTop: "23%", paddingLeft: "47%" }}/>;
  if (error) return <div>Error: {error.message}</div>;
  if (data.search.length === 0) return <div style={{ width: '70%', margin: '3rem auto' }}>찾은 결과가 없습니다.</div>;
  return (
    <MediaList data={data.search}/>
  );
}

export default MediaSearchQuery;