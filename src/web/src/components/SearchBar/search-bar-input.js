import React from 'react';
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

function SearchBarInput (props) {
  return (
    <div>
      <Input
        placeholder="Search"
        onChange={props.onChangeTitle}
        prefix={<SearchOutlined/>}
        onPressEnter={props.onPressEnter}
      />
    </div>
  );
}

export default SearchBarInput;