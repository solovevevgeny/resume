import React, { Component } from "react"
import { Typography } from "antd";
import Axios from "axios";


const {Title} = Typography;

class TotalBalance extends Component {
    state = {}

    constructor(props) {
        super(props)
        this.state.totalBalance = 0;

        this.componentDidMount = this.componentDidMount.bind(this);
        this.render = this.render.bind(this);

    }

    componentDidMount() {
        Axios.get('http://keeper.loc/api/accounts/total')
        .then ((response) => {
            this.setState({totalBalance: response.data})
        })
        .catch ((e)=>{
            console.error(e)
        })
    }

    render() {
        return (
            <Title
                type= "success"
            >
                Баланс: {this.state.totalBalance} &#8381;
            </Title>
        )
    }
}

export default TotalBalance