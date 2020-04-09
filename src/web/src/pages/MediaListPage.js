import React from 'react'
import gql from 'graphql-tag'
import { Row, Col } from 'antd';
import { useLocation } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import MediaCard from '../components/MediaList/MediaCard'

function useQueryParm() {
  return new URLSearchParams(useLocation().search)
}

const SearchQuery = gql `
  query searchItems($title: String!, $location: String!, $dateFrom: Date, $dateTo: Date) {
    search(title: $title, location: $location, dateFrom: $dateFrom, dateTo: $dateTo) {
      author{
        name
        profileImgUrl
      }
      date
      id
      location
      title
      url
    }
  }
`

function MediaListPage (props) {
  let query = useQueryParm()
  const {loading, error, data} = useQuery(SearchQuery, {
    /*TODO 파라미터 잘 받아왔는지 확인하기*/
    variables: {
      title: query.get("title"),
      location: query.get("location"),
      dateFrom: query.get("dateFrom"),
      dateTo: query.get("dateTo")
    },
    errorPolicy: 'all'
  });
  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>
  if (data.search.length === 0) return <div>찾은 결과가 없습니다.</div>
  return (
    <div style={{width: '85%', margin: '3rem auto'}}>
      <Row gutter={[32,16]}>
        {data.search.map(({title, location, date, author, id}) => {
          if (title === null || location === null || date === null || author === null || id === null) return <div>error</div>
          return (
            <Col lg={6} md={8} xs={24} key={id}>
              <MediaCard title={title} location={location} date={date} author={author} id={id}/>
            </Col>
          )
        })}
      </Row>
    </div>
  )
}

export default MediaListPage