import React, { Component } from "react"

import {
  Text,
  View,
  TouchableHighlight,
  TextInput,
  StatusBar
} from "react-native"
import styles from "../styles/MainStyles"

//Icon
import Icon from "react-native-vector-icons/FontAwesome5"


export default function SignUpScreen(props) {

  const [user, setUser] = useState('')
  const [pass, setPass] = useState('')

  function handle(e ) {
    setUser(e.target.value);
  }

  register = async () => {
    try {
      await auth().createUserWithEmailAndPassword(this.state.user, this.state.pass)
    } catch (e) {
      console.error(e.message)
    }
  }


  componentDidMount = () => {
    const subscriber = auth().onAuthStateChanged((user, err) => {
      this.setState(user)
    })
  }

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#FFF" barStyle="dark-content" />

      <Icon name="sign-in-alt" size={56} color="#FFF" solid />

      <TextInput
        style={styles.input}
        placeholder="Nome e Sobrenome"
        value={this.state.name}
      />

      <TextInput
        style={styles.input}
        placeholder="Usuário"
        value={this.state.user}
      />

      <TextInput
        secureTextEntry={true}
        style={styles.input}
        placeholder="Senha"
        value={this.state.pass}
      />

      <TouchableHighlight
        underlayColor="#CCC"
        style={styles.buttons}
        onPress={() => this.register()}>
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableHighlight>
    </View >
  )
}

