import React from 'react';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';
import { Button, message, Popconfirm } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';

const DELETE_MEDIA = gql`
  mutation deleteMedia($mediaId: ID!){
    deleteMedia(id: $mediaId){
      title,
      author{
        name
      }
    }
  }
`;

function UserMediaDeleteButton (props) {
  const [deleteMedia] = useMutation(DELETE_MEDIA, {
    onCompleted ({ deleteMedia: { title, author } }) {
      message.success(`${author.name}의 ${title}가(이) 삭제되었습니다.`);
      window.location.reload();
    },
    onError () {
      message.error('삭제를 요청한 미디어가 존재하지 않습니다.');
    }
  });
  const confirm = (mediaId) => {
    deleteMedia({ variables: { mediaId } });
  };
  const cancel = () => {
    message.error('삭제를 취소하였습니다.');
  };
  return (
    <Popconfirm
      title="미디어를 삭제하시겠습니까?"
      onConfirm={() => confirm(props.mediaId)}
      onCancel={cancel}
      okText={'Yes'}
      cancelText={'No'}
    >
      <Button type="link" icon={<DeleteOutlined style={{fontSize: '25px'}}/>} style={{float: "right"}} />
    </Popconfirm>
  );
}

export default UserMediaDeleteButton;