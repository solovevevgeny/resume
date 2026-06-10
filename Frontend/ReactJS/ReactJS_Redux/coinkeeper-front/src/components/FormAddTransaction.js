import React, { Component } from "react"
import Axios from "axios";
import { Form, Select, Input, Radio, Button, notification } from 'antd';

const { Option } = Select;

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};
const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};


class FormAddTransaction extends Component{
    state = {}

    constructor(props) {
        super(props)
        this.state.isLoading = false;

        this.onFinish = this.onFinish.bind(this)
        this.render = this.render.bind(this)
    }

   

    onFinish(values) {
        this.setState({isLoading: true})

        const data = {
            type: values.type,
            account_from_id: values.account_from_id,
            account_to_id: values.account_to_id,
            amount: values.amount,
            comment: values.comment
        }

        Axios.post('http://keeper.loc/api/transactions', data)
        .then ((response) => {

            if (response.status === 201) {
                this.setState({ isLoading: false })
                notification.open ({
                    message: "Операция успешно добавлена"
                })
            }

        })
        .catch( (error) => {
            console.error(error.message)
        })

    }


    render() {

        return (
            <div className="addForm">
            <Form
                {...layout}
                name="basic"
                initialValues={{ 
                    type: 'sub',
                    account_from_id: "1",
                    account_to_id: null,
                }}
                onFinish={this.onFinish}
            >
                <Form.Item 
                    name="type" 
                    label="Тип"
                    rules={[{ required: true, message: 'Выберете тип операции' }]}
                >
                    <Radio.Group  buttonStyle="solid">
                        <Radio.Button value="sub">Списание</Radio.Button>
                        <Radio.Button value="add">Пополнение</Radio.Button>
                        <Radio.Button value="move">Перемещение</Radio.Button>
                    </Radio.Group>
                </Form.Item>
                
               <Form.Item name="account_from_id" label='Счет списания'>
                    <Select >
                        <Option value="1">Сбербанк</Option>
                        <Option value="2">Альфабанк</Option>
                        <Option value="3">ВТБ</Option>
                        <Option value="4">Кошелек</Option>
                        <Option value="5">Сейф</Option>
                    </Select>
               </Form.Item>

                <Form.Item name="account_to_id" label='Счет зачисления'>
                    <Select >
                        <Option value="1">Сбербанк</Option>
                        <Option value="2">Альфабанк</Option>
                        <Option value="3">ВТБ</Option>
                        <Option value="4">Кошелек</Option>                        
                        <Option value="5">Сейф</Option>
                    </Select>
                </Form.Item>

                <Form.Item 
                    name="amount" 
                    label='Сумма'
                    rules={[{ required: true, message: 'Нужно ввести сумму' }]}
                >
                    <Input />
                </Form.Item>


                <Form.Item name="comment" label='Комметарий'>
                    <Input />
                </Form.Item>

                <Form.Item 
                    {...tailLayout }
                >
                    <Button 
                        type="primary" 
                        htmlType="submit" 
                        loading = {this.state.isLoading}
                    >
                        Записать
                    </Button>
                </Form.Item>


            </Form>
            </div>
        )
    }
}

export default FormAddTransaction