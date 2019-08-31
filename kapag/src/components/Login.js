import React, { Component } from "react"
import {
  Text,
  View,
  TouchableHighlight,
  TextInput,
  StatusBar,
  Image
} from "react-native"
import styles from "../styles/MainStyles"
import auth from '@react-native-firebase/auth'
import Icon from "react-native-vector-icons/FontAwesome5"





export default class Login extends Component {
  constructor(props) {
    super(props)

    this.state = {
      user: '',
      pass: ''
    }
  }

  async register() {
    try {
      await auth().createUserWithEmailAndPassword(this.state.user, this.state.pass)
    } catch (e) {
      console.error(e.message)
    }
  }
  



  componentDidMount() {
    const subscriber = auth().onAuthStateChanged((user) => this.setState(user))
  }


  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#fff" barStyle="dark-content" />
        <Image
          style={{ width: 200, height: 200, marginBottom: 50 }}
          source={require('../assets/images/icone2.png')}
        />
        <TextInput
          style={styles.input}
          placeholder="Usuário"
          onChangeText={(text) => this.setState({ user: text })}
          value={this.state.user}
        />

        <TextInput
          secureTextEntry={true}
          style={styles.input}
          placeholder="Senha"
          onChangeText={(text) => this.setState({ pass: text })}
          value={this.state.pass}
        />

        <TouchableHighlight
          underlayColor="#25316D"
          style={styles.buttons}
          onPress={() => {
            this.props.navigation.navigate("Drawer")
          }}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableHighlight>
      </View>
    )
  }
}
