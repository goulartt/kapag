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


