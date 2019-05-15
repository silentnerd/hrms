import React from 'react';
import {
    Layout, Menu, Breadcrumb, Icon,
  } from 'antd';
import { Route, Link } from 'react-router-dom'
import AddLeave from './leavemanagement/ApplyLeave';


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
  
    render() {
      return (
        <Layout style={{ minHeight: '100vh' }}>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed} width={200} style={{ background: '#fff' }}>
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
              <Menu.Item key="2"><Link to='/leave/applyleave'>Apply Leave</Link></Menu.Item>
              <Menu.Item key="3"><Link to='/leave/viewcalendar'>View Calendar</Link></Menu.Item>
              <Menu.Item key="4"><Link to='/leave/viewleaverequest'>View leave request</Link></Menu.Item>
              <Menu.Item key="5"><Link to='/leave/leavehistory'>Leave history</Link></Menu.Item>
              <Menu.Item key="6"><Link to='/leave/leavecancelrequest'>Leave cancel request</Link></Menu.Item>
              <Menu.Item key="7"><Link to='/leave/carryforwardrequest'>Carry forward request</Link></Menu.Item>
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
          
          <Route path='/leave/add' component={AddLeave}/>
       

        
                    
          </Content>
          <Footer style={{ textAlign: 'center' }}>
          Human Resource Management System ©2018 Created by SGIC
          </Footer>
        </Layout>
      </Layout>
      );
    }
  }
  
  export default Dashboard;