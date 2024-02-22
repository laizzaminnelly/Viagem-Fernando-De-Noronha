import {View, Text, StyleSheet} from 'react-native'

export default function Title(){
  return(
    <View>
      <Text style={styles.paragrafo}>Descubra o paraíso das praias intocadas e águas cristalinas.</Text> 
    </View>
  )
}
const styles = StyleSheet.create({
 paragrafo: {
    marginLeft: 10,
  }
})