import React from 'react';
import { Cascader } from 'antd';
import { LocationOptions } from '../constants';

function SearchBarPlaceSelect (props) {
  return (
    <div>
      <Cascader options={LocationOptions} placeholder="Place select" changeOnSelect
        onChange={props.onChangeLocation}/>
    </div>
  );
}

export default SearchBarPlaceSelect;

