import React from 'react'
import { Button, Popover, Avatar, Card } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'

function UserMenu () {
  const logout = () => {
    sessionStorage.removeItem("token")
    sessionStorage.removeItem("user_id")
    sessionStorage.removeItem("user_email")
    sessionStorage.removeItem("user_name")
    sessionStorage.removeItem("user_profileImgUrl")
    window.location.reload()
  }
  const title = (
    <div>
      <p/>
      <Card.Meta
        avatar={
          <Avatar size={50} src={sessionStorage.getItem("user_profileImgUrl")}/>
        }
        description={
          <div>
            <h4>
              {sessionStorage.getItem("user_name")}
            </h4>
            {sessionStorage.getItem("user_email")}
          </div>
        }
      />
      <p/>
    </div>
  )
  const content = (
    <div>
      <p>
        <Link to="/user">
          <Button type="link">
            내 채널
          </Button>
        </Link>
      </p>
      <Button type="link" onClick={logout}>
        로그아웃
      </Button>
    </div>
  )
  //logout 버튼을 누르면 sessionSotrage에 있는 token을 지우고 홈으로 이동
  return (
    <Popover title={title} content={content} placement="bottom" trigger="click">
      <Button type="link" ghost>
        <Avatar icon={<UserOutlined />} style={{backgroundColor: "#87d068"}}/>
      </Button>
    </Popover>
  )
}

export default UserMenu