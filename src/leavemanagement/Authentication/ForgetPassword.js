import React from 'react';
import 'antd/dist/antd.css';
import './ForgetPassword.css';
import { Form, Icon, Input, Button } from 'antd';

class ForgetPassword extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      
      <div className="forgotPassword">
      
      <div className="forgot-center">
      <Form onSubmit={this.handleSubmit} className="forget-form">
   
      <h4>ForgetPassword</h4>
     
       
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
            />,
          )}
        </Form.Item>
        <Form.Item>
         
          <Button   type="primary" htmlType="submit" className="forgot-form-button">
           ForgetPassword
          </Button>
          <Button  href="Login" type="default" htmlType="submit" className="login-form-button">Login</Button>
        </Form.Item>
      </Form>
      </div>
      </div>
    );
  }
}

const ForgetPasswordForm = Form.create({ name: 'normal_login' })(ForgetPassword);

export default ForgetPasswordForm;