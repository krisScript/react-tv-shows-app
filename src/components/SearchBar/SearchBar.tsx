import React, { FunctionComponent } from 'react';
import { Form, Icon, Input, Button } from 'antd';
const SearchBar: FunctionComponent = () => {
  return (
    <Form layout="inline">
      <Form.Item validateStatus={''} help={''}>
        <Input
          prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
          placeholder="Show Name"
        />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Search
        </Button>
      </Form.Item>
    </Form>
  );
};
export default SearchBar;
