import React, { Component } from "react"
import { Card,  Typography } from 'antd';
import { EditOutlined } from '@ant-design/icons';

import axios from "axios"   


const { Text, Link } = Typography;

class Accounts extends Component {
    state = {}

    constructor(props) {
        super(props);
        this.state.accounts = [];
        this.state.isLoading = false;

        this.componentDidMount = this.componentDidMount.bind(this)
        this.loadData = this.loadData.bind(this)
        this.render = this.render.bind(this)
    }

    componentDidMount() {
        this.loadData()
    }


    loadData() {
        this.setState({isLoading: true})

        axios.get('http://keeper.loc/api/accounts')
            .then((response) => {
                this.setState({ 
                    accounts: response.data,
                    isLoading: false
                })
        })
        .catch ((e) => {
            console.error(e)
        })
    }

    edit() {
        console.log("edit");
    }

    render() {
        const operations = this.state.accounts.map ((operation)=> {
            return (
                <Card 
                    className="accounts-card"
                    hoverable={true} 
                    size="small" 
                    loading={this.state.isLoading} 
                    title={operation.title} 
                    extra={<a onClick={this.loadData}>refresh</a>} 
                    // actions={[
                    //     // <SettingOutlined key="setting" onClick={this.edit}/>,
                    //     <EditOutlined key="edit" />,
                    //     // <EllipsisOutlined key="ellipsis" />,
                    // ]}
                >

                    <Text type="success">
                        {operation.current_amount.toLocaleString()}&#8381;
                    </Text>
                    
                </Card>
            )
        })

        return (
            <div className="accounts">
                {operations}
            </div>
        )
    }
}

export default Accounts