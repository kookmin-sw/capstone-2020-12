import React, {useState}from 'react';
import MediaDetailCardQuery from '../components/Media/media-detail-card-query';
import { useLocation, withRouter } from 'react-router-dom';
import { Col, Row, Button } from 'antd';
import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import Header from '../components/Header/header';

function useQueryParm () {
  return new URLSearchParams(useLocation().search);
}
function MediaViewPage (props) {
  let query = useQueryParm();
  const [onHeader, setHeader] = useState(false);
  const move = (event) => {
    if (event.pageY<250) {
      setHeader(true);
    }
    else {
      setHeader(false);
    }
  };

  //인덱스를 찾는 function
  const findIndex = (element) => {
    return element.id === query.get('id');
  };

  // detail-view-page인지 확인, navbar 생성 여부 확인하기 위해서
  props.onChangeIsMediaView(window.location.pathname === "/watch");

  // props.location.state.data: search 쿼리에서 받아온 결과값들이 저장되어 있는 리스트, 리스트 안에는 오브젝트(미디어 아이디, 유저 이름, title 등등)가 들어있음
  // 가공중인 곳은 넘어가면 안되므로 filter함수로 제외
  const data = props.location.state.data.filter(media => media.isProcessing === false);

  //현재 detail-view-page에서 보이는 미디어의 인덱스를 찾음
  const index = data.findIndex(findIndex);

  // 왼쪽 화살표를 누르면 이전 인덱스에 있는 미디어 인덱스로 이동
  let previous_index = index - 1;

  // 오른쪽 화살표를 누르면 다음 인덱스에 있는 미디어의 인덱스로 이동
  let next_index = index + 1;

  // 만약 해당 미디어가 리스트에서 가장 앞이거나 가장 끝일 경우
  if (index === 0) previous_index = data.length - 1;
  if (index === (data.length-1)) next_index = 0;

  return (
    <div onMouseMove={move}>
      {onHeader ? <Header/> : <div/>}
      <Row justify="center" style={{ paddingTop: '3rem' }}>
        <Col span={2} style={{paddingTop: '20rem', paddingLeft: '2rem'}}>
          {/*왼쪽 화살표를 누르면 이전 미디어로 이동, 이때 state는 data를 전달해줌, 리스트 원소가 한개이면 버튼 사용 불가능*/}
          <Link to={{pathname: `/watch`, search: `?id=${data[previous_index].id}`, state: {data: data}}}>
            {
              (data.length === 1) ? 
                <Button shape="circle" icon={<ArrowLeftOutlined style={{fontSize: 30}}/>} size="large" disabled/>
                :
                <Button shape="circle" icon={<ArrowLeftOutlined style={{fontSize: 30}}/>} size="large"/>
            }
          </Link>
        </Col>
        <Col span={19}>
          <MediaDetailCardQuery mediaId={query.get('id')}/>
        </Col>
        <Col span={2} style={{paddingTop: '20rem', paddingLeft: '4.2rem'}}>
          {/*오른쪽 화살표를 누르면 이전 미디어로 이동, 이때 state는 data를 전달해줌, 리스트 원소가 한개이면 버튼 사용 불가능*/}
          <Link to={{pathname: `/watch`, search: `?id=${data[next_index].id}`, state: {data: data}}}>
            {
              (data.length === 1) ? 
                <Button shape="circle" icon={<ArrowRightOutlined style={{fontSize: 30}}/>} size="large" disabled/>
                :
                <Button shape="circle" icon={<ArrowRightOutlined style={{fontSize: 30}}/>} size="large"/>
            }
          </Link>
        </Col>
      </Row>
    </div>
  );
}

export default withRouter(MediaViewPage);
