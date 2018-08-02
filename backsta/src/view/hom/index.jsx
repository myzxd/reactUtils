import React, { Component } from 'react';
import "./hom.css";
import {routerArray,routerDrecte,filteRouter} from  "../../utils/routetool"
import {Route,Switch,Redirect} from "react-router-dom"
import { Layout, Menu, Icon} from 'antd';

const { Header, Content, Footer, Sider} = Layout;
const { SubMenu } = Menu;
class TM_FILENAME_BASE extends Component {
    constructor(props){
      super(props)
      this.state = {
        collapsed: false,
      }
    }
    toggle(){
        this.setState({
          collapsed: !this.state.collapsed,
        })
    }
    render() {
        console.log(this.props.chrenliRouter)
      //  const routerArray=routerArray(this.props.chrenliRouter)
       var routs=routerArray(this.props.chrenliRouter)
       var dercit=routerDrecte(this.props.chrenliRouter)
       var textArr =filteRouter(this.props.chrenliRouter)
        return (
          <Layout height="100%" width="100%">
          <Sider
            breakpoint="lg"
            collapsedWidth="0"
            onCollapse={(collapsed, type) => { console.log(collapsed, type); } }
            height="100%"
            width="15%"
          >
            <div className="logo" />
            <Menu 
             theme="dark" 
             mode="inline" 
             defaultSelectedKeys={[this.props.location.pathname]} 
             defaultOpenKeys={[this.props.location.pathname.replace(/(\/{1}\S{1,})(\/{1}\S{1,})/, '$1')]}
             onClick={(select) => {
               this.props.history.push(select.key)
             }}
            >
            {
              textArr.map((item, index) => {
                if (item.children) {
                  return (
                    <SubMenu
                      key={item.path}
                      title={
                        <span><Icon type="user" />{item.tile}</span>
                      }
                    >
                     
                      {
                        item.children.map((subItem, subIndex) => {
                         return <Menu.Item key={subItem.path}> <Icon type="user" />{subItem.tile}</Menu.Item>
                        })
                      }

                    </SubMenu>
                  )
                 } else {
                  return (
                    <Menu.Item key={item.path}>
                    <Icon type="user" />
                      <span className="nav-text">{item.tile}</span>
                    </Menu.Item>
                  )
                }


              })
            }
            </Menu>
          </Sider>
          <Layout>
            <Header style={{ background: '#fff', padding: 0 }} />
            <Content style={{ margin: '24px 16px 0' }}>
              <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                 <Switch>
                     {
                       routs.map((item,index)=>{
                          return <Route path={item.path} component={item.component} exact key={index}/>
                       })
                     }
                 </Switch>
                 <Switch>
                     {
                       dercit.map((item,index)=>{
                          return <Redirect to={item.to} from={item.form} exact key={index}/>
                       })
                     }
                 </Switch>
              </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>
              Ant Design ©2016 Created by Ant UED
            </Footer>
          </Layout>
        </Layout>
        
        );
    }
}

export default TM_FILENAME_BASE;

