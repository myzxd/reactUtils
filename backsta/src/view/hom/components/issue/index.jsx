import React, { Component } from 'react';
import TileBtn from "./tiltleButon"
import { Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete } from 'antd';
import "./issue.css"
const CheckboxGroup = Checkbox.Group;

const plainOptions = ['Apple', 'Pear', 'Orange'];
const defaultCheckedList = ['Apple', 'Orange'];
const FormItem = Form.Item;
const Option = Select.Option;
const AutoCompleteOption = AutoComplete.Option;
class TM_FILENAME_BASE extends Component {
    constructor(props) {
        super(props)
        this.state = {
            checkedList: defaultCheckedList,
            indeterminate: true,
            checkAll: false,
        }
    }

    onChange = (checkedList) => {
        this.setState({
            checkedList,
            indeterminate: !!checkedList.length && (checkedList.length < plainOptions.length),
            checkAll: checkedList.length === plainOptions.length,
        });
    }
    onCheckAllChange = (e) => {
        this.setState({
            checkedList: e.target.checked ? plainOptions : [],
            indeterminate: false,
            checkAll: e.target.checked,
        });
    }

    render() {
        return (
            <div className="Issue_wrap">
                <TileBtn />
                <div className="Issue_tile">
                    <h5>商品类型</h5>
                </div>
                <div className="inputBox">
                    <ul>
                        <li>
                            <h5>
                                <span>实物商品</span>
                                <p>(物流发货)</p>
                            </h5>
                            <Checkbox options={plainOptions} value={this.state.checkedList} onChange={this.onChange} />
                        </li>
                        <li>
                            <h5>
                                <span>实物商品</span>
                                <p>(物流发货)</p>
                            </h5>
                            <Checkbox options={plainOptions} value={this.state.checkedList} onChange={this.onChange} />
                        </li>
                        <li>
                            <h5>
                                <span>实物商品</span>
                                <p>(物流发货)</p>
                            </h5>
                            <Checkbox options={plainOptions} value={this.state.checkedList} onChange={this.onChange} />
                        </li>
                        <li>
                            <h5>
                                <span>实物商品</span>
                                <p>(物流发货)</p>
                            </h5>
                            <Checkbox options={plainOptions} value={this.state.checkedList} onChange={this.onChange} />
                        </li>
                        <li>
                            <h5>
                                <span>实物商品</span>
                                <p>(物流发货)</p>
                            </h5>
                            <Checkbox options={plainOptions} value={this.state.checkedList} onChange={this.onChange} />
                        </li>
                    </ul>
                </div>
                <div className="setting">
                <h5>折叠更多设置</h5>
                   <p><Checkbox options={plainOptions} value={this.state.checkedList} onChange={this.onChange} /><span>跳到其他网站购买</span></p>
                   <h6>因特殊流程(如电影选坐等)需要，可以从有赞商品详情跳转到外部购买，最多支持50个外部购买商品</h6>
                </div>
                <div className="Issue_tile">
                    <h5>基本信息</h5>
                </div>
            </div>
        );
    }
}

export default TM_FILENAME_BASE;
