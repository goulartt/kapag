import { createAppContainer, createStackNavigator } from 'react-navigation'
import HomeScreen from './pages/HomeScreen'
import MainScreen from './pages/MainScreen'
import LoginScreen from './pages/LoginScreen'
import SignUpScreen from './pages/SignUpScreen'
import BarCodeReader from './components/BarCodeReader'
import SelectPayment from './components/SelectPayment'
import CreditCard from './components/CreditCard'


const MainNav = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        header: null,
      }
    },
    Login: {
      screen: LoginScreen,
      navigationOptions: {
        headerTitle: 'Login'
      }
    },
    SignUp: {
      screen: SignUpScreen,
      navigationOptions: {
        headerTitle: 'Cadastrar'
      }
    },
    MainScreen: {
      screen: MainScreen,
      navigationOptions: {
        header: null
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

const AppContainer = createAppContainer(MainNav);

export default AppContainer;

/*import React, { Component } from 'react'
import { createAppContainer, createStackNavigator } from 'react-navigation'

//screens
import Home from './components/Home'
import Login from './components/Login'
import SignUp from './components/SignUp'
import Drawer from './Drawer'
import BarCodeReader from './components/BarCodeReader'
import SelectPayment from './components/SelectPayment'
import CreditCard from './components/CreditCard'
import { Provider, connect } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import ProductReducer from './reducers/ProductReducer'
import MainScreen from './pages/MainScreen';
import Header from './components/Drawer/Components/Header';

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
}*/
