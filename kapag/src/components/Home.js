import React, { Component } from "react"
import { View, Text, TouchableHighlight, StatusBar, Image } from "react-native"
import styles from "../styles/Home"

//Icon
import Icon from "react-native-vector-icons/FontAwesome5"

export default class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#0066CC" />
        {/*<Image
        style={{width: 200, height: 200, marginBottom:50}}
          source={require('../assets/images/icone.png')}
        />*/} 
        <Image
        style={{width: 150, height: 55, marginBottom:40}}
          source={require('../assets/images/logo1.png')}
        />

        <TouchableHighlight
          underlayColor="#25316D"
          style={styles.buttons}
          onPress={() => {
            this.props.navigation.navigate("Login")
          }}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableHighlight>

        <TouchableHighlight
          underlayColor="#25316D"
          style={styles.buttons}
          onPress={() => {
            this.props.navigation.navigate("Cadastrar")
          }}
        >
          <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableHighlight>
      </View>
    )
  }
}
