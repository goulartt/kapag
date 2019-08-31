import React, { Component } from "react"
import {
    Text,
    View,
    Button
} from "react-native"
import styles from "../styles/MainStyles"

import PayPal from 'react-native-paypal-wrapper'
 
export default class SelectPayment extends Component {
    constructor(props) {
        super(props)

        this.state = {
            user: "",
            pass: ""
        }
        this.products = this.props.navigation.getParam('products', [])
        this.totalPrice = this.props.navigation.getParam('totalPrice', 0.0)

        this.processPayment = this.processPayment.bind(this)
    }

    async processPayment(event) {
        PayPal.initialize(PayPal.SANDBOX, "AbOmvMNsWBnji77cyNsVsR7mJoq_o9DQKdW7Q2xjAwrQSQ11zLj7WEj1730KjLcnxT5mIdVg499w2GJ3")
        PayPal.pay({
          price: this.totalPrice.toString(),
          currency: 'BRL',
          description: 'Compras do supermercado',
        }).then(confirm => console.log(confirm))
          .catch(error => console.warn(error))
    }

    render() {
        return (
            <View style={styles.container}>
                <Button
                    onPress={this.processPayment}
                    title="PAYPAL"
                    color="black"
                    accessibilityLabel="Learn more about this purple button"
                />
            </View>
        )
    }
}
