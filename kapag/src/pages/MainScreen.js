import React, { Component, useState, useEffect } from "react"
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  ToastAndroid
} from 'react-native'
import ActionButton from 'react-native-action-button'
import TodoList from '../components/TodoList'
import Icon from 'react-native-vector-icons/Feather'
import { connect } from 'react-redux';
import { deleteProduct } from './../actions/index';


function MainScreen(props) {

  const [todos, setTodos] = useState(props.products.scannedProducts, [])
  let totalSum = 0.0


  

  useEffect(() => {
    setTodos(props.products.scannedProducts)
  }, [props.products.scannedProducts])



  return (
    <View style={styles.container}>


      <Text style={styles.header}>Carrinho de Compras</Text>
      <ScrollView style={{ width: '100%' }}>
        {todos.map(item => (

          <TodoList
            text={item.name}
            price={item.price}
            key={item.barcode}
            qtd={item.qtd}

            deleteTodo={() => props.dispatch(deleteProduct(item.barcode))}
          />

        ))}
        {todos.map(item => {
          totalSum += (item.price * item.qtd)
        })}

        <Text style={styles.totalPrice}>TOTAL - R$ {totalSum}</Text>

      </ScrollView>

      <ActionButton buttonColor="#25316D">
        <ActionButton.Item buttonColor='white' title="Finalizar Compra" onPress={() => {
          if (totalSum != 0.0)
            props.navigation.navigate("SelectPayment", { products: todos, totalPrice: totalSum })
          else
            ToastAndroid.show('Carro de compras vazio!', ToastAndroid.SHORT)

        }}>
          <Icon name="shopping-cart" style={styles.actionButtonIcon} />
        </ActionButton.Item>
        <ActionButton.Item buttonColor='white' title="Adicionar Produto" onPress={() => props.navigation.navigate("BarCodeReader", { products: todos })}>
          <Icon name="camera" style={styles.actionButtonIcon} />
        </ActionButton.Item>

      </ActionButton>




    </View>
  )
}

const mapStateToProps = store => ({
  products: store.products,
  scannedProducts: store.scannedProducts
})

export default connect(mapStateToProps)(MainScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  header: {
    marginTop: '15%',
    fontSize: 25,
    fontWeight: 'bold',
    color: '#25316D',
    paddingBottom: 10
  },
  textInputContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
    borderColor: 'black',
    borderBottomWidth: 1,
    paddingRight: 10,
    paddingBottom: 10,
    paddingTop: 20
  },
  totalPrice: {
    flex: 1,
    height: 20,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#25316D',
    paddingLeft: 10,
    minHeight: '3%'
  },
  textInput: {
    flex: 1,
    height: 20,
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    paddingLeft: 10,
    minHeight: '3%'
  }
})

