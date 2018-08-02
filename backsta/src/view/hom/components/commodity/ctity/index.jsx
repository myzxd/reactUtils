import React, { Component } from 'react';
import { Table, Button } from 'antd';
class TM_FILENAME_BASE extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedRowKeys: [],
            loading: false,
        }
    }
    start() {
        this.setState({ loading: true });
        // ajax request after empty completing
        setTimeout(() => {
            this.setState({
                selectedRowKeys: [],
                loading: false,
            });
        }, 1000);
    }
    onSelectChange(selectedRowKeys) {
        this.setState({ selectedRowKeys:[1,2,3,4,5,6,7,8,9,10] });
    }

    render() {
        const columns = [{
            title: 'Name',
            dataIndex: 'name',
        }, {
            title: 'Age',
            dataIndex: 'age',
        }, {
            title: 'Address',
            dataIndex: 'address',
        }];
        const data = [];
        for (let i = 0; i < 46; i++) {
            data.push({
                key: i,
                name: `Edward King ${i}`,
                age: 32,
                address: `London, Park Lane no. ${i}`,
            });
        }
        const { loading, selectedRowKeys } = this.state;
        const rowSelection = {
            selectedRowKeys,
            onChange: this.onSelectChange,
        };
        const hasSelected = selectedRowKeys.length > 0;
        return (
            <div className="wrap">
                <div className="tileRop">
                    <Button type="primary">发布商品</Button>
                </div>
                <div>
                    <div style={{ marginBottom: 16 }}>
                        <Button
                            type="primary"
                            onClick={this.start}
                            disabled={!hasSelected}
                            loading={loading}
                        >
                            Reload
                          </Button>
                        <span style={{ marginLeft: 8 }}>
                            {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
                        </span>
                    </div>
                    <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
                </div>
            </div>
        );
    }
}

export default TM_FILENAME_BASE