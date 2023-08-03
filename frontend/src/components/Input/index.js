import React  from 'react';
import { SearchOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import _ from 'lodash';

const InputSearch = ({placeholder, onChange}) => {

  const handleChange = (e) => {
    onChange(e.target.value);
  }

  return (
    <Input
      size="large"
      placeholder={placeholder || 'Search'}
      onChange={_.debounce(handleChange, 500)}
      prefix={<SearchOutlined style={{ fontSize: '16px', color: '#a3a3a3' }} />}
      style={{ borderRadius: 8 }}
      allowClear
    />
  );
};

export { InputSearch };
