import React from 'react';
import {Layout, Menu, Icon, Avatar} from 'antd';
import {Link} from 'react-router-dom'
import './Dashboard.css';
  const { Sider,} = Layout;
  const SubMenu = Menu.SubMenu;
  
  class SiderComponent extends React.Component {
    state = {
      collapsed: false,
    };

    toggle = () => {
      this.setState({
        collapsed: !this.state.collapsed,
      });
    };

    logout = () =>{

    }
    render() {
      return (
                

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
                    <div className="logo"><a href="/">Leave Management</a></div>
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

              
         
      );

    }
  }
  
  export default SiderComponent;