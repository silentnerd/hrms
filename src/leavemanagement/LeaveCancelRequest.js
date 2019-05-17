import React from 'react';
import {
    Breadcrumb,
    Table,
    Input
} from 'antd';

const Search = Input.Search;

class LeaveCancelRequest extends React.Component {

    render() {
        const columns = [
            {
                title: 'Employee Name',
                dataIndex: 'name',
                key: 'name'
            }, {
                title: 'View Leave',
                dataIndex: 'view',
                key: 'view'
            }, {
                title: 'Leave Type',
                dataIndex: 'type',
                key: 'type'
            }, {
                title: 'Cancel Reason',
                dataIndex: 'reason',
                key: 'reason'
            }
        ];

        const data = [
            {
                key: '1',
                name: 'Mark',
                view: 'view',
                type: 'type',
                reason: 'reason'
            }, {
                key: '2',
                name: 'James',
                view: 'view',
                type: 'type',
                reason: 'reason'
            }, {
                key: '3',
                name: 'Paul',
                view: 'view',
                type: 'type',
                reason: 'reason'
            }
        ];

        return (
            <React.Fragment>
                <Breadcrumb style={{
                    margin: '16px 0'
                }}>
                    <Breadcrumb.Item>Leave Management</Breadcrumb.Item>
                    <Breadcrumb.Item>Cancel Request</Breadcrumb.Item>
                </Breadcrumb>
                <div
                    style={{
                    padding: 24,
                    background: '#fff',
                    minHeight: 360
                }}>
                    <Search
                        placeholder="Search..."
                        onSearch={value => console.log(value)}
                        style={{
                        width: 200
                    }}/>
                    <br></br>
                    <br></br>
                    <Table columns={columns} dataSource={data}/>,

                </div>

            </React.Fragment>

        );
    }
}

export default LeaveCancelRequest;