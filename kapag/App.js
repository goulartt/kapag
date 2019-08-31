import React, { Component } from 'react'
import { createAppContainer, createStackNavigator } from 'react-navigation'

//screens
import Home from './src/components/Home'
import Login from './src/components/Login'
import SignUp from './src/components/SignUp'
import Drawer from './src/Drawer'
import BarCodeReader from './src/components/BarCodeReader'
import SelectPayment from './src/components/SelectPayment'
import CreditCard from './src/components/CreditCard'
import { Provider, connect } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import ProductReducer from './src/reducers/ProductReducer'

const MainNav = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        header: null
      }
    },
    Login: {
      screen: Login,
      navigationOptions: {
        headerTitle: 'Login'
      }
    },
    SignUp: {
      screen: SignUp,
      navigationOptions: {
        headerTitle: 'Cadastrar'
      }
    },
    BarCodeReader: {
      screen: BarCodeReader,
      navigationOptions: {
        headerTitle: 'Leitor de Código de Barras'
      }
    },
    SelectPayment: {
      screen: SelectPayment,
      navigationOptions: {
        headerTitle: 'Forma de Pagamento'
      }
    },
    CreateCard: {
      screen: CreditCard,
      navigationOptions: {
        headerTitle: 'Cartão de Crédito'
      }
    },
    Drawer: {
      screen: Drawer,
      navigationOptions: {
        header: null
      }
    }
  },
  {
    defaultNavigationOptions: {
      headerTitleStyle: {
        color: '#25316D'
      },
      headerTintColor: '#25316D'
    }
  }
)

let store = createStore(combineReducers({ products: ProductReducer }));

let MainNavContainer = connect(state => ({ products: state.products }))(MainNav);

let Navigation = createAppContainer(MainNavContainer);


export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Navigation />
      </Provider>
    );
  }
}
