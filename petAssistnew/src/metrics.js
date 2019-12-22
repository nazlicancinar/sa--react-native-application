import { Dimensions, Platform } from 'react-native'

const IS_ANDROID = Platform.OS === 'android'
const { height, width } = Dimensions.get('window')
const nazlocal = "http://192.168.1.113:8081/"
const Url = "http://192.168.1.101:2730"

export default {
  ANDROID_STATUSBAR: 24,
  DEVICE_HEIGHT: IS_ANDROID ? height - 24 : height,
  DEVICE_WIDTH: width,
  NAVIGATIONBAR_HEIGHT: 52,
  URL:nazlocal
}