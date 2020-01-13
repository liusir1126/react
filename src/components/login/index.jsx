import React, { Component } from 'react'

import { Form, Icon, Input, Button } from 'antd';
import img from './logo.png'
import './index.less'

//装饰器语法
@Form.create()
class Login extends Component {

  

  validator = (rule,value,callback)=>{
    const name = rule.field === 'username'?'用户名':'密码'
    const ref =/^\w+$/
    if(!value){
      callback(`${name}不能为空`)
    }else if(value.length < 3){
      callback(`${name}长度最小为3`)
    }else if(value.length > 12){
      callback(`${name}长度最大为12`)
    }else if(!ref.test(value)){
      callback(`${name}只能是数字，字母，下划线`)
    }    
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className = 'login'>
        <header className='login_header'>
          <img src={img} alt="logo"/>
          <h1>React项目: 后台管理系统</h1>
        </header>
        <section className='login_section'>
          <h3>用户登录</h3>
          <Form className="login-form"> 
            <Form.Item>
              {getFieldDecorator('username', {
                rules: [
                  // { required: true, message: '用户名不能为空!' },
                  // {min:4,message:'用户名必须大于3位'},
                  // {max:12,message:'用户名必须小于12位'},
                  // {pattern:/^\w+$/,message:'用户名只能是数字，字母，下划线'}
                  {validator:this.validator}
                ]
               
                  
            
              })(
                <Input
                  prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  placeholder="Username"
                />,
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('password', {
                rules:[
                  {
                    validator:this.validator
                  }                 
                ]
              })(
                <Input
                  prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  type="password"
                  placeholder="Password"
                />,
              )}
            </Form.Item>   
            <Form.Item>  
              <Button type="primary" htmlType="submit" className="login-form-button">
                登录
              </Button>

             </Form.Item>         
          </Form>
        </section>
      </div>
    )
  }
}
export default Login;


