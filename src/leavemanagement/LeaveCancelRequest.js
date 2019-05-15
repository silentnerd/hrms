import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {Breadcrumb,Table, Divider, Popconfirm, Icon } from 'antd';


class LeaveCancelRequest extends React.Component {
  
  render() {
    const columns = [
      {
        title: 'Employee Name',
        dataIndex: 'name',
        key: 'name',
        render: text => <a href="javascript:;">{text}</a>,
      },
      {
        title: 'View Leave',
        dataIndex: 'view',
        key: 'view',
        render: text => <a href="javascript:;">{text}</a>,
      },
      {
        title: 'Leave Type',
        dataIndex: 'type',
        key: 'type',
        render: text => <a href="javascript:;">{text}</a>,
      },
      {
        title: 'Cancel Reason',
        dataIndex: 'reason',
        key: 'reason',
        render: text => <a href="javascript:;">{text}</a>,
      },
    ];

    const data = [

    ];

  return (
    <React.Fragment>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Leave Management</Breadcrumb.Item>
              <Breadcrumb.Item>Cancel Request</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
           
            <Table columns={columns} dataSource={data} />

            </div>
          
            </React.Fragment>
  );
}
}

export default LeaveCancelRequest;
