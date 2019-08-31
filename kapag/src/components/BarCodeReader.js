import React, { Component } from 'react'
import { ToastAndroid, Text, View } from 'react-native'
import { RNCamera } from 'react-native-camera'
import productsJson from '../products.json'
class BarCodeReader extends Component {

  constructor(props) {
    super(props)
    this.camera = null
    this.barcodeCodes = []
    this.products = this.props.navigation.getParam('products', [])
    this.hasRead = false
    this.state = {
      camera: {
        type: RNCamera.Constants.Type.back,
        flashMode: RNCamera.Constants.FlashMode.auto,
      },

    }
  }

  onBarCodeRead(scanResult) {
    if (scanResult.data != null) {
      if (!this.barcodeCodes.includes(scanResult.data)) {
        if (!this.hasRead) {
          this.hasRead = true
          let codeExist = false
          for (let i = 0; i < productsJson.length; i++) {
            
            if (productsJson[i].barcode === scanResult.data) {
              codeExist = true

              let incremented = false
              /*for (let j = 0 j < this.products.length j++) {
                if (this.products[j].barcode === scanResult.data) {
                  this.products[j].qtd++
                  incremented = true
                }
              }*/

              if (!incremented) {
                this.products.push(productsJson[i])
              }
            }
          }

          if (!codeExist) {
            ToastAndroid.show('Código de barras não cadastrado no sistema', ToastAndroid.SHORT)
            this.hasRead = false
          } else {
            this.props.navigation.navigate("Home", { products: this.products })
          }
        }

      }
    }
    return
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

export default BarCodeReader