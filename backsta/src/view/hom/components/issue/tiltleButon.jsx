import React, { Component } from 'react';
import { Button, Radio, Icon } from 'antd';
import "./issue.css"
class TM_FILENAME_BASE extends Component {
    constructor(props) {
        super(props)
        this.state = {
            size: 'large',
        }
    }
    render() {
        return (
            <div className="tileBtn">
                <Button.Group size={this.state.size}>
                    <Button type="primary">
                       1.编辑基本信息
                    </Button>
                    <Button type="primary">
                        2.编辑基本详情
                    </Button>
                </Button.Group>
            </div>
        );
    }
}

export default TM_FILENAME_BASE;
