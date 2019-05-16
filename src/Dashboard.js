import React from 'react';
<<<<<<< HEAD
import {Layout, Menu, Breadcrumb, Icon, Avatar, Badge, Row, Col} from 'antd';
import {Route, Link, Switch} from 'react-router-dom'
=======
import {
    Layout, Menu, Breadcrumb, Icon,
  } from 'antd';
import { Route, Link } from 'react-router-dom'
>>>>>>> 54029ca737bf1c81b37a56cae0d401f9cfd608ba
import ApplyLeave from './leavemanagement/ApplyLeave';
import CarryForwardRequest from './leavemanagement/CarryForwardRequest';
import LeaveCancelRequest from './leavemanagement/LeaveCancelRequest';
import LeaveHistory from './leavemanagement/LeaveHistory';
import ViewCalendar from './leavemanagement/ViewCalendar';
import ViewLeaveRequest from './leavemanagement/ViewLeaveRequest';


import './Dashboard.css';
  const {
    Header, Content, Footer, Sider,
  } = Layout;
  const SubMenu = Menu.SubMenu;
  
  class Dashboard extends React.Component {
    state = {
      collapsed: false,
    };

    toggle = () => {
      this.setState({
        collapsed: !this.state.collapsed,
      });
    };
<<<<<<< HEAD

    logout = () =>{

    }

=======
  
>>>>>>> 54029ca737bf1c81b37a56cae0d401f9cfd608ba
    render() {
      return (
        <Layout style={{ minHeight: '100vh' }}>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed} width={240} style={{ background: '#fff' }}>
          <div className="logo" ><img src="" width='35px'/> <a href="/">HRM</a></div>
          <Menu theme="light" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1">
              <Icon type="pie-chart" />
              <span>Dashboard</span>
            </Menu.Item>
        
            <SubMenu
              key="sub1"
              title={<span><Icon type="project" /><span>Leave Management</span></span>}
            >
              <Menu.Item key="2"><Link to='/leavemanagement/applyleave'>Apply Leave</Link></Menu.Item>
              <Menu.Item key="3"><Link to='/leavemanagement/viewcalendar'>View Calendar</Link></Menu.Item>
              <Menu.Item key="4"><Link to='/leavemanagement/viewleaverequest'>View leave request</Link></Menu.Item>
              <Menu.Item key="5"><Link to='/leavemanagement/leavehistory'>Leave history</Link></Menu.Item>
              <Menu.Item key="6"><Link to='/leavemanagement/leavecancelrequest'>Leave cancel request</Link></Menu.Item>
              <Menu.Item key="7"><Link to='/leavemanagement/carryforwardrequest'>Carry forward request</Link></Menu.Item>
            </SubMenu>
           
            <Menu.Item key="8">
              <Icon type="setting" />
              <span>Setting</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
         <Header style={{ background: '#007bff', paddingLeft: '14px' }}>
            <Icon
              style={{
                color: 'white',
                fontSize: '18px'
              }}
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
          </Header>
          <Content style={{ margin: '0 16px' }}>
          
          <Route path='/leavemanagement/applyleave' component={ApplyLeave}/>
          <Route path='/leavemanagement/carryforwardrequest' component={CarryForwardRequest}/>
          <Route path='/leavemanagement/leavecancelrequest' component={LeaveCancelRequest}/>
          <Route path='/leavemanagement/leavehistory' component={LeaveHistory}/>
          <Route path='/leavemanagement/viewcalendar' component={ViewCalendar}/>
          <Route path='/leavemanagement/viewleaverequest' component={ViewLeaveRequest}/>
       

<<<<<<< HEAD
                <Sider
                    trigger={null}
                    collapsible
                    collapsed={this.state.collapsed}
                    width={240}
                    breakpoint="lg"
                    collapsedWidth="0"
                    onBreakpoint={broken => {
                        console.log(broken);}}
                    onCollapse={(collapsed, type) => {
                        console.log(collapsed, type);}}
                    style={{
                      background: '#fff',
                      display: this.state.SiderMobileCollapse
                    }}>
                    <div className="logo"><img src="" width='35px'/><a href="/">Leave Management</a></div>
                    <br></br>
                    <div className="container-avatar"><Avatar size="large" icon="user"/>
                        <p style={{display: this.state.avatarFullname}}>Firstname Lastname</p>
                    </div>
                    <Menu
                        theme="light"
                        mode="inline"
                        selectedKeys={[this.state.current]}
                        onClick={this.handleClick}>
                        <Menu.Item key="1">
                            <Icon type="pie-chart"/>
                            <span>Dashboard</span>
                        </Menu.Item>

                        <SubMenu
                            key="sub1"
                            title={<span><Icon type="project"/><span>Leave Management</span></span >}>
                            <Menu.Item key="2">
                                <Link to='/leavemanagement/applyleave'>Apply Leave</Link>
                            </Menu.Item>
                            <Menu.Item key="3">
                                <Link to='/leavemanagement/viewcalendar'>View Calendar</Link>
                            </Menu.Item>
                            <Menu.Item key="4">
                                <Link to='/leavemanagement/viewleaverequest'>View leave request</Link>
                            </Menu.Item>
                            <Menu.Item key="5">
                                <Link to='/leavemanagement/leavehistory'>Leave history</Link>
                            </Menu.Item>
                            <Menu.Item key="6">
                                <Link to='/leavemanagement/leavecancelrequest'>Leave cancel request</Link>
                            </Menu.Item>
                            <Menu.Item key="7">
                                <Link to='/leavemanagement/carryforwardrequest'>Carry forward request</Link>
                            </Menu.Item>
                        </SubMenu>

                        <Menu.Item key="8">
                            <Icon type="setting"/>
                            <span>Setting</span>
                        </Menu.Item>
                    </Menu>
                </Sider>

                <Layout>
                    <Header
                        style={{
                        background: '#007bff',
                        paddingLeft: '14px'
                        }}>
                         <div style={{float: 'left'}}>
                         
                        <Icon
                            style={{
                            color: 'white',
                            fontSize: '18px',
                            padding: '20px',
                            }}
                            className="trigger"
                            type={this.state.collapsed
                            ? 'menu-unfold'
                            : 'menu-fold'}
                            onClick={this.toggle}/>
                            </div>
                            <Row style={{width: '60px', float: 'right'}} type="flex" justify="end">
                            <Col span={12}>
                            <Badge count={2} showZero> 
                              <Icon
                              style={{
                              color: 'white',
                              fontSize: '18px',
                              float: 'right',
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
                              float: 'right',
                              }}
                              align="right"
                              type="logout"
                              onClick={this.logout}/>
                            </Col>
                          </Row>
                    </Header>
                    <Content
                        style={{
                        margin: '24px 16px 0'
                    }}>
                        <Switch>
                            <Route
                                path='/leavemanagement/applyleave'
                                render={(props) => <ApplyLeave {...props}/>}></Route>

                            <Route
                                path='/leavemanagement/carryforwardrequest'
                                component={CarryForwardRequest}/>
                            <Route
                                path='/leavemanagement/leavecancelrequest'
                                component={LeaveCancelRequest}/>
                            <Route path='/leavemanagement/leavehistory' component={LeaveHistory}/>
                            <Route path='/leavemanagement/viewcalendar' component={ViewCalendar}/>
                            <Route path='/leavemanagement/viewleaverequest' component={ViewLeaveRequest}/>
                        </Switch>

                    </Content>
                    <Footer
                        style={{
                        textAlign: 'center'
                    }}>
                        Human Resource Management System ©2018 Created by SGIC
                    </Footer>
                </Layout>
            </Layout>
            
        );
=======
        
                    
          </Content>
          <Footer style={{ textAlign: 'center' }}>
          Human Resource Management System ©2018 Created by SGIC
          </Footer>
        </Layout>
      </Layout>
      );
>>>>>>> 54029ca737bf1c81b37a56cae0d401f9cfd608ba
    }
  }
  
  export default Dashboard;