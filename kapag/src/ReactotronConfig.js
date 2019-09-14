import Reactotron from 'reactotron-react-native'
import { reactotronRedux } from 'reactotron-redux'

const reactotron = Reactotron
  .configure({
    host: '192.168.0.15'  // server ip
  })
  .useReactNative() // add all built-in react native plugins
  .use(reactotronRedux()) //  <- here i am!
  .connect() // let's connect!


export default reactotron
