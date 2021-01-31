import { SearchOutlined } from '@ant-design/icons';
import { Input } from 'antd';

const InputSearch = ({placeholder, onChange}) => {
  return (
    <Input
      size="large"
      placeholder={placeholder || 'Search'}
      onChange={onChange}
      onPressEnter={onChange}
      prefix={<SearchOutlined style={{ fontSize: '16px', color: '#a3a3a3' }} />}
      style={{ borderRadius: 8 }}
      allowClear
    />
  );
};

export { InputSearch };
