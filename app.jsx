import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { upload } from './src/api';
import { Button, Col, Row, Table } from 'antd';
import '/style.css';
import Title from 'antd/es/typography/Title';
const columns = [
  {
    title: 'Key',
    dataIndex: 'key',
    key: 'key',
  },
  {
    title: 'Value',
    dataIndex: 'value',
    key: 'value',
  },
];
const App = () => {
  const { register, handleSubmit } = useForm();
  const [std, setStd] = useState([]);
  const [duplicatedNumbers, setDuplicatedNumbers] = useState([]);
  const onsubmit = async (data) => {
    const formData = new FormData();
    formData.append('excelFile', data.excelFile[0]);
    const d = await upload(formData);
    const std = d.data.data;
    setStd(std);
    setDuplicatedNumbers(d.data.duplicatedNumbers);
  }
  const dataSource = std && std.map((item, index) => {
    return {
      key: index + 1,
      value: '4 số đầu tiên:' + item.split(' ')[0]
    }
  })
  const dataSourceduplicatedNumbers = duplicatedNumbers && duplicatedNumbers.map((item, index) => {
    return {
      key: index + 1,
      value: 'Các số trùng lặp nhau:' + item
    }
  })
  return (
    <React.Fragment>
      <Row
        justify={'center'}
        align={'middle'}
        style={{
          marginTop: '20px'
        }}
      >
        <Col>
          <form onSubmit={handleSubmit(onsubmit)}>
            <input type="file" {...register('excelFile')} />
            <Button danger htmlType="submit">Upload</Button>
          </form>
        </Col>
      </Row>

      {std.length && duplicatedNumbers.length ? <>
        <Row gutter={[12, 12]}>
          <Col span={12}>
            <Title level={5} style={{ textAlign: 'center' }}>4 số đầu tiên:</Title>
            <Table dataSource={dataSource} columns={columns} />
          </Col>
          <Col span={12}>
            <Title level={5} style={{ textAlign: 'center' }}>Các số trung lặp:</Title>
            <Table dataSource={dataSourceduplicatedNumbers} columns={columns} />
          </Col>
        </Row>
      </> : ''}
    </React.Fragment>
  )
}

export default App