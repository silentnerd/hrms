import React from 'react';
import axios from 'axios';
import moment from 'moment';
import {
    Content,
    Form,
    Upload,
    Breadcrumb,
    Statistic,
    Divider,
    Tag,
    Table,
    Icon,
    Input,
    Col,
    Select,
    Row,
    Button,
    DatePicker,
    InputNumber,
    AutoComplete,
    Cascader
} from 'antd';

const {MonthPicker, RangePicker} = DatePicker;

const dateFormat = 'YYYY/MM/DD';
const InputGroup = Input.Group;
const Option = Select.Option;
const {TextArea} = Input;
const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY'];
const props = Upload;
const formItemLayout = {
    labelCol: {
        span: 8
    },
    wrapperCol: {
        span: 16
    }
};

const columns = [
    {
        title: 'Leave Type',
        dataIndex: 'type'
    }, {
        title: 'Start Date',
        dataIndex: 'sdate'
    }, {
        title: 'End Date',
        dataIndex: 'edate'
    }, {
        title: 'Number of Days',
        dataIndex: 'number'
    }, {
        title: 'Reason',
        dataIndex: 'reason'
    }, {
        title: 'Status',
        dataIndex: 'status'
    }
];

const data = [
    {
        key: '1',
        type: 'Medical',
        sdate: '2019/05/21',
        edate: '2019/05/22',
        number: '2',
        reason: 'Medical',
        status: '1'
    }, {
        key: '2',
        type: 'Casual',
        sdate: '2019/05/21',
        edate: '2019/05/23',
        number: '3',
        reason: 'Wedding',
        status: '1'
    }, {
        key: '3',
        type: 'Annual',
        sdate: '2019/05/21',
        edate: '2019/05/27',
        number: '7',
        reason: 'Trip',
        status: '1'
    }
];

class ApplyLeave extends React.Component {

    render() {
        return (
            <React.Fragment>
                <Row>
                    <Col span={16}>
                        <Breadcrumb
                            style={{
                            margin: '16px 0'
                        }}>
                            <Breadcrumb.Item>Leave Managment</Breadcrumb.Item>
                            <Breadcrumb.Item>Apply Leave</Breadcrumb.Item>
                        </Breadcrumb>
                        <div
                            style={{
                            padding: 24,
                            background: '#fff',
                            minHeight: 360,
                            marginRight: '20px'
                        }}>
                            <Row >
                                <Col span={24}>
                                    <InputGroup>
                                        <Row gutter={24}>
                                            <Col span={6}>
                                                <Form.Item hasFeedback label="Start Date" layout='inline'>
                                                    <div>
                                                        <DatePicker
                                                            defaultValue={moment('2015/01/01', dateFormat)}
                                                            format={dateFormat}/>

                                                    </div>
                                                </Form.Item>

                                            </Col>
                                            <Col span={6}>
                                                <Form.Item hasFeedback label="End Date" layout='vertical'>
                                                    <div>
                                                        <DatePicker
                                                            defaultValue={moment('2015/01/01', dateFormat)}
                                                            format={dateFormat}/>

                                                    </div>
                                                </Form.Item>

                                            </Col>
                                            <Col span={6}>
                                                <Form.Item hasFeedback label="Number of Days" layout='vertical'>
                                                    <div>
                                                        <Input defaultValue="0" disabled/>
                                                    </div>
                                                </Form.Item>

                                            </Col>
                                        </Row>
                                    </InputGroup>

                                    <InputGroup>
                                        <Row gutter={24}>
                                            <Col span={10}>
                                                <Form.Item hasFeedback label="Type of Leave" layout='vertical'>
                                                    <InputGroup compact>

                                                        <Select defaultValue="Type of Leave">
                                                            <Option value="Annual">Annual</Option>
                                                            <Option value="Casual">Casual</Option>
                                                            <Option value="Medical">Medical</Option>
                                                        </Select>

                                                    </InputGroup>
                                                </Form.Item>
                                            </Col>

                                            <Col span={10}>
                                                <Form.Item hasFeedback label="Attachments" layout='vertical'>
                                                    <div>
                                                        <Upload {...props}>
                                                            <Button>
                                                                <Icon type="upload"/>
                                                                Click to Upload
                                                            </Button>
                                                        </Upload>

                                                    </div>
                                                </Form.Item>

                                            </Col>
                                        </Row>
                                    </InputGroup>

                                    <Form.Item hasFeedback label="Reason" layout='vertical'>

                                        <div
                                            style={{
                                            margin: '24px 0'
                                        }}>
                                            <TextArea
                                                placeholder="Reason"
                                                autosize={{
                                                minRows: 2,
                                                maxRows: 8
                                            }}/>

                                        </div>

                                    </Form.Item>

                                    <Button
                                        type="primary"
                                        style={{
                                        float: 'right'
                                    }}>Request</Button>
                                    <Button
                                        type="danger"
                                        style={{
                                        float: 'right',
                                        marginRight: '10px'
                                    }}>Clear</Button>

                                </Col>
                            </Row>
                        </div>

                    </Col>

                    <Col span={8}>

                        <Breadcrumb
                            style={{
                            margin: '16px 0'
                        }}>
                            <Breadcrumb.Item>Available Leave</Breadcrumb.Item>
                        </Breadcrumb>
                        <div
                            style={{
                            padding: 24,
                            background: '#fff',
                            minHeight: 50
                        }}>
                            <Row>
                                <Col span={8}>
                                    <Statistic title="Annuval" value={10} suffix="/ 10"/>
                                </Col>
                                <Col span={8}>
                                    <Statistic title="Casual" value={5} suffix="/ 5"/>
                                </Col>
                                <Col span={8}>
                                    <Statistic title="Medical" value={7} suffix="/ 7"/>
                                </Col>
                            </Row>
                        </div>
                        <Breadcrumb
                            style={{
                            margin: '16px 0'
                        }}>
                            <Breadcrumb.Item>
                                Carry Forward Leave Request</Breadcrumb.Item>
                        </Breadcrumb>

                        <div
                            style={{
                            padding: 24,
                            background: '#fff',
                            minHeight: 50,
                            marginTop: '20px'
                        }}>
                            <Row >
                                <Col span={24}>

                                    <Form.Item layout='vertical' label="Remaining days of Annual Leave">
                                        <div >
                                            <Input defaultValue="0" disabled/>
                                        </div>
                                    </Form.Item>

                                    <Form.Item layout='vertical' label="Number of Leave to be Carry forwarded">
                                        <div >
                                            <Input defaultValue="0"/>
                                        </div>
                                    </Form.Item>
                                    <Button
                                        type="primary"
                                        style={{
                                        float: 'right'
                                    }}>Submit</Button>

                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>

                <Breadcrumb style={{
                    margin: '16px 0'
                }}>
                    <Breadcrumb.Item>
                        Leave History</Breadcrumb.Item>
                </Breadcrumb>
                <div
                    style={{
                    padding: 24,
                    background: '#fff',
                    minHeight: 360,
                    marginTop: '20px'
                }}>
                    <Row >
                        <Col span={24}>

                            <Table columns={columns} dataSource={data}/>

                        </Col>
                    </Row>
                </div>

            </React.Fragment>
        );
    }

}

export default ApplyLeave;
