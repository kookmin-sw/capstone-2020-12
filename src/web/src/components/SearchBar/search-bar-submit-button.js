import React from 'react';
import { Button } from 'antd';
import { Link } from 'react-router-dom';

function SearchBarSubmitButton (props) {
  return (
    <Link
      to={`/search?title=${props.title}&location=${props.location}&yearFrom=${props.yearFrom}&yearTo=${props.yearTo}`}>
      <Button>
        Search
      </Button>
    </Link>
  );
}

export default SearchBarSubmitButton;