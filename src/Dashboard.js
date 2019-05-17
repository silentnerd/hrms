import React from 'react';
import {Layout} from 'antd';
import {Route, Switch} from 'react-router-dom'
import ApplyLeave from './ApplyLeave/ApplyLeave';
import CarryForwardRequest from './CarryForwardRequest';
import LeaveCancelRequest from './LeaveCancelRequest';
import LeaveHistory from './LeaveHistory';
import ViewCalendar from './ViewCalendar/ViewCalendar';
import ViewLeaveRequest from './ViewLeaveRequest';
import Login from './Authentication/Login';
import SignUp from './Authentication/Signup';
import ForgotPassword from './Authentication/ForgetPassword';
import HeaderComponent from './HeaderComponent';
import SiderComponent from './SiderComponent';
import './Dashboard.css';
  const {Content, Footer,} = Layout;
  
  class Dashboard extends React.Component {
    state = {
      collapsed: false,
    };

    
toggle = () => {
  this.setState(prevState => ({
    collapsed: !prevState.collapsed
  }));
};
    logout = () =>{

    }
    render() {
      return (
        <Layout style={{ minHeight: '100vh' }}>
        <Route path="/leavemanagement" 
                  render={(props) => <SiderComponent isCollapsed={this.state.collapsed} {...props} />}></Route>
            
             
                <Layout>

                  <Route path="/leavemanagement" 
                  render={(props) => <HeaderComponent isCollapsed={this.state.collapsed} {...props} />}></Route>
                    <Content
                        style={{
                        margin: '24px 16px 0'
                    }}>
                    <Route path='/login' component={Login}/>
                        <Switch>
                          
                          <Route path='/signup' component={SignUp}/>
                          <Route path='/forgotpass' component={ForgotPassword}/>
                            <Route
                                path='/leavemanagement/applyleave'
                                render={(props) => <ApplyLeave {...props}/>}></Route>

                            <Route path='/leavemanagement/carryforwardrequest' component={CarryForwardRequest}/>
                            <Route path='/leavemanagement/leavecancelrequest' component={LeaveCancelRequest}/>
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

    }
  }
  
  export default Dashboard;