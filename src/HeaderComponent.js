import React from 'react';
import {
    Layout,
    Icon,
    Badge,
    Row,
    Col
} from 'antd';
import './Dashboard.css';
const {Header} = Layout;

class HeaderComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            collapsed: false,
        };
    }

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed
        });
    };
    logout = () => {
        this.props.history.push('/login')
    }

    render() {
        return (

            <Header
                style={{
                background: '#007bff',
                paddingLeft: '14px'
            }}>
                <div style={{
                    float: 'left'
                }}>

                    <Icon
                        style={{
                        color: 'white',
                        fontSize: '18px',
                        padding: '20px'
                    }}
                        className="trigger"
                        type={this.state.collapsed
                        ? 'menu-unfold'
                        : 'menu-fold'}
                        onClick={this.toggle}/>
                </div>
                <Row
                    style={{
                    width: '60px',
                    float: 'right'
                }}
                    type="flex"
                    justify="end">
                    <Col span={12}>
                        <Badge count={2} showZero>
                            <Icon
                                style={{
                                color: 'white',
                                fontSize: '18px',
                                float: 'right'
                            }}
                                align="right"
                                type="bell"/>
                        </Badge>
                    </Col>
                    <Col span={12}>
                        <Icon
                            style={{
                            color: 'white',
                            fontSize: '18px',
                            padding: '20px 0 20px 20px',
                            float: 'right'
                        }}
                            align="right"
                            type="logout"
                            onClick={this.logout}/>
                    </Col>
                </Row>
            </Header>

        );

    }
}

export default HeaderComponent;