import React, { Component } from "react"
import {
    View
} from "react-native"

import CreditCard from 'react-native-credit-card'

export default class SelectPayment extends Component {
    constructor(props) {
        super(props)
        this.state = {
            type: '',
            focused: '',
            number: '',
            name: '',
            expiry: '',
            cvc: ''
        }

    }



    render() {
        return (
            <View > 
                <CreditCard
                    type={this.state.type}
                    imageFront={require('../assets/images/card-front.png')}
                    imageBack={require('../assets/images/card-back.png')}
                    shiny={false}
                    bar={false}
                    focused={this.state.focused}
                    number={this.state.number}
                    name={this.state.name}
                    expiry={this.state.expiry}
                    cvc={this.state.cvc} />
            </View>
        )
    }
}
