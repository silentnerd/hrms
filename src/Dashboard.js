import React from 'react';
import {Layout} from 'antd';
import {Route, Switch} from 'react-router-dom'
import ApplyLeave from './leavemanagement/ApplyLeave/ApplyLeave';
import CarryForwardRequest from './leavemanagement/CarryForwardRequest';
import LeaveCancelRequest from './leavemanagement/LeaveCancelRequest';
import LeaveHistory from './leavemanagement/LeaveHistory';
import ViewCalendar from './leavemanagement/ViewCalendar/ViewCalendar';
import ViewLeaveRequest from './leavemanagement/ViewLeaveRequest';
import Login from './leavemanagement/Authentication/Login';
import SignUp from './leavemanagement/Authentication/Signup';
import ForgotPassword from './leavemanagement/Authentication/ForgetPassword';
import HeaderComponent from './HeaderComponent';
import SiderComponent from './SiderComponent';
import './Dashboard.css';
  const {Content, Footer,} = Layout;
  
  class Dashboard extends React.Component {
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
        <Layout style={{ minHeight: '100vh' }}>
            <Route path="/leavemanagement" component={SiderComponent} />
             
                <Layout>
                  <Route path="/leavemanagement" component={HeaderComponent} />  
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