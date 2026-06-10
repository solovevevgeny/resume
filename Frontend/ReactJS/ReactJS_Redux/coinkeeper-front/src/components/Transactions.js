import Axios from "axios";
import React, { Component } from "react"

import { List, Button} from "antd"
import { PlusCircleTwoTone, EditOutlined, DeleteOutlined } from "@ant-design/icons"


class Transactions extends Component {
    state = {}

    // const {transactions} =  useContext([])

    constructor(props) {
        super(props);
        this.state.trans = [];
        this.state.isLoading = true;

        this.loadData = this.loadData.bind(this)
        this.render = this.render.bind(this)
        this.componentDidMount = this.componentDidMount.bind(this)
    }

    loadData() {
        this.setState({isLoading: true})

        Axios.get('http://keeper.loc/api/transactions')
            .then((response) => {
                this.setState({
                    trans: response.data,
                    isLoading: false
                })
            })
    }

    componentDidMount() {
        this.loadData()
    }

    transactionDelete(event) {
        let id = event.target.parentElement.getAttribute('id');
        console.log("delete" + id)
    }

    transactionEdit(event) {
        let id = event.target.parentElement.getAttribute('id');
        console.log("edit" + id)
    }


    render() {
        return (
            <div className="transactions">
                <List
                    loading = {this.state.isLoading}
                    size="small"
                    header={<h3>Транзакции</h3>}
                    bordered
                    dataSource={this.state.trans}
                    renderItem={item => (
                        <>
                        <List.Item 
                            id= {item.id}
                            className="transaction-item"
                                actions={[
                                    <Button id={item.id} onClick={this.transactionEdit} ghost={true} size="small" type="primary">Edit</Button>, 
                                    <Button id={item.id} onClick={this.transactionDelete} ghost={true} size="small" type="danger" >Delete</Button>
                                ]}
                        >
                            <List.Item.Meta
                                title={ item.account_from == null ? '' : item.account_from.title  }
                                description={item.comment} 
                                avatar={<PlusCircleTwoTone />}
                            />
                                {item.account_from == null ? '' : item.account_from.title} &nbsp;
                                {item.account_to   == null ? '' : item.account_to.title}
                                {item.amount}
                                
                        </List.Item>
                        </>
                    )}
                />
            </div>
        )
    }


}

export default Transactions