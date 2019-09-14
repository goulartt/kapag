import React, { Component } from 'react'
import { ToastAndroid, Text, View } from 'react-native'
import { RNCamera } from 'react-native-camera'
import { addProduct, getAllProducts } from './../actions/index';
import { connect } from 'react-redux'

class BarCodeReader extends Component {

  constructor(props) {
    super(props)
    this.camera = null
    this.barcodeCodes = []
    this.hasRead = false
    this.state = {
      camera: {
        type: RNCamera.Constants.Type.back,
        flashMode: RNCamera.Constants.FlashMode.auto,
      },

    }
  }

  onBarCodeRead(scanResult) {
    const { products } = this.props

    if (scanResult.data != null) {
      if (!this.barcodeCodes.includes(scanResult.data)) {
        this.setState({ barcodeCodes: [...this.barcodeCodes, scanResult.data] })
        if (!this.hasRead) {
          this.setState({ hasRead: true })
          for (let i = 0; i < products.length; i++) {

            if (products[i].barcode === scanResult.data) {
              codeExist = true

              this.props.dispatch(addProduct(products[i]))
              this.props.navigation.navigate('MainScreen')

              return;
            }
          }

          ToastAndroid.show('Código de barras não cadastrado no sistema', ToastAndroid.SHORT)
          this.setState({ hasRead: false })

        }

      }
    }
  }

  async takePicture() {
    if (this.camera) {
      const options = { quality: 0.5, base64: true }
      const data = await this.camera.takePictureAsync(options)


    }
  }

  pendingView() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: 'lightgreen',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text>Waiting</Text>
      </View>
    )
  }

  render() {



    return (
      <View style={styles.container}>
        <RNCamera
          ref={ref => {
            this.camera = ref
          }}
          defaultTouchToFocus
          flashMode={this.state.camera.flashMode}
          mirrorImage={false}
          onBarCodeRead={this.onBarCodeRead.bind(this)}
          onFocusChanged={() => { }}
          onZoomChanged={() => { }}
          permissionDialogTitle={'Permission to use camera'}
          permissionDialogMessage={'We need your permission to use your camera phone'}
          style={styles.preview}
          type={this.state.camera.type}
        />
        <View style={[styles.overlay, styles.topOverlay]}>
          <Text style={styles.scanScreenMessage}>Por favor, escaneie o código de barras.</Text>
        </View>

      </View>
    )
  }
}

const styles = {
  container: {
    flex: 1
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  overlay: {
    position: 'absolute',
    padding: 16,
    right: 0,
    left: 0,
    alignItems: 'center'
  },
  topOverlay: {
    top: 0,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  bottomOverlay: {
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.4)',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  enterBarcodeManualButton: {
    padding: 15,
    backgroundColor: 'white',
    borderRadius: 40
  },
  scanScreenMessage: {
    fontSize: 14,
    color: 'white',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center'
  }
}


const mapStateToProps = store => ({
  products: store.products.products
})

export default connect(mapStateToProps)(BarCodeReader)
