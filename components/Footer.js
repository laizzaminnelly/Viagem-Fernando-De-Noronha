import {View, Text, StyleSheet} from 'react-native'

export default function Footer(){
  return(
    <View style={styles.container}>
      <Text style={styles.footer}>2024 Fernando de Noronha Turismo</Text>
    </View>

  )
}
const styles = StyleSheet.create({
  footer: {
    fontSize: 15,
    textAlign: 'center',
    marginLeft: 20,
    marginRight: 10,
    paddingBottom: 20,
    paddingLeft: 10,
    paddingTop: 0,
    margin: 0,
  }
})