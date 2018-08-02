import React, { Component } from 'react';
import routers from "./router"
import {BrowserRouter as Router,Route,Switch} from "react-router-dom"
class TM_FILENAME_BASE extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Switch>
                        {
                            routers.map((s, index) => {
                                return <Route key={index} path={s.path} render={
                                    (props) => {
                                        return <s.component chrenliRouter={s.children} {...props}/>
                                    }
                                } />
                            })
                        }
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default TM_FILENAME_BASE;
