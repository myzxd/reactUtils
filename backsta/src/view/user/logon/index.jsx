import React, { Component } from 'react';

class TM_FILENAME_BASE extends Component {
    constructor(props){
        super(props)
        this.state={
           user:"",
           pws:""
        }
    }
    user(e){
      console.log(e.target.value)
    }
    render() {
        return (
            <div className="login">
                <div className="form">
                    <ul>
                        <li><label htmlFor="">账号:</label><input type="text" onChange={()=>{this.user()}} /></li>
                        <li><label htmlFor="">密码:</label><input type="password" /></li>
                    </ul>
                    <button>登录</button>
                </div>
            </div>
        );
    }
}

export default TM_FILENAME_BASE;
