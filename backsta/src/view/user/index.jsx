import React, { Component } from 'react';
import "./index.css"
import axios from "axios"
class TM_FILENAME_BASE extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: "",
            pws: ''
        }
    }
    componentDidMount(){
        axios.get("/api/product/list").then(res=>{
            console.log(res)
        })
    }
    User(e) {
        this.setState({
            user: e.target.value
        })
    }
    Pwswod(e) {
        this.setState({
            pws: e.target.value
        })
    }
    fn(){
       axios.get("/api/user/login ").then((s)=>{
           console.log(s.data)
       })
    }
    render() {
        return (
            <div className="login">
                <div className="form">
                    <ul>
                        <li><label htmlFor="">账号:</label><input type="text" value={this.state.user} onChange={this.User.bind(this)} /></li>
                        <li><label htmlFor="">密码:</label><input type="password" value={this.state.pws} onChange={this.Pwswod.bind(this)} /></li>
                    </ul>
                    <button onClick={this.fn.bind(this)}>登录</button>
                </div>
            </div>
        );
    }
}

export default TM_FILENAME_BASE;
