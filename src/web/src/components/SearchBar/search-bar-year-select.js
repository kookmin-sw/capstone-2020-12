import React from 'react';
import { DatePicker } from 'antd';

function SearchBarYearSelect (props) {
  return (
    <div>
      <DatePicker.RangePicker
        picker="year"
        onChange={props.onChangeYear}
      />
    </div>
  );
}

export default SearchBarYearSelect;